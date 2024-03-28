#!/usr/bin/env python
import os, pytz, datetime, json, requests

from flask import Flask,request, send_file, make_response
from plugin.mongo_helper import MongoHelper
from plugin.WXBizDataCrypt import WXBizDataCrypt
from config.settings import WEAPP
# 获取模板文件夹的绝对路径

app = Flask(__name__)
DB_WEAPP = MongoHelper('weapp')
shanghai_tz = pytz.timezone('Asia/Shanghai')
os.environ['TZ'] = shanghai_tz.zone

def getWeappSession(code):
    # 可以获取用户全平台唯一值unionid
    session_params= {
        "appid": WEAPP['APPID'],
        "secret": WEAPP['APP_SECRET'],
        "js_code": code,
        "grant_type": "authorization_code"
    }
    res = requests.get('https://api.weixin.qq.com/sns/jscode2session',params=session_params)
    return res.json()

def getWeappAccessToken():
    # 获取接口调用凭据
    # 如果没过期则继续使用,如果过期则重新获取
    root_info = DB_WEAPP.fetch_one('ROOT',{"username":'root'})
    if not root_info or datetime.datetime.now() > root_info['last_fetch_time'] + datetime.timedelta(seconds=root_info['expires_in']):
        # 如果不存在根用户,或者用户的调用凭证已过期,则拉取
        params= {
            "appid": WEAPP['APPID'],
            "secret": WEAPP['APP_SECRET'],
            "grant_type": "client_credential"
        }
        print('access token params',params)
        res = requests.get(f'https://api.weixin.qq.com/cgi-bin/token',params=params)
        res_json = res.json()
        print('access toekn:',res_json)
        DB_WEAPP.update_one('ROOT',{
            "username":"root",
        },{"$set":{
            "username":"root",
            "last_fetch_time":datetime.datetime.now(),
            "access_token":res_json['access_token'],
            "expires_in":res_json['expires_in']
        }},True)
        return res_json['access_token'],res_json['expires_in'] #seconds
    else:
        return root_info['access_token'],root_info['expires_in']

def getWeappPhoneNum(phone_code,access_token):
    headers={
        'Content-Type': 'application/json'
    }
    parmas = {
        "code":phone_code,
    }
    res = requests.post(f"https://api.weixin.qq.com/wxa/business/getuserphonenumber?access_token={access_token}",json=parmas,headers=headers)
    print('res url',res.request.url)
    print('params like',parmas)
    if res.status_code == 412:
        print('Error:', res.content.decode())
        return 0,res.content.decode()
    else:
        res_json = res.json()
        print('res_json',res_json)
        if res_json['errmsg'] == 'ok':
            return res_json['phone_info'],res_json['errmsg']
        else:
            return 0,res_json['errmsg']
 

@app.route('/')
def index():
    # code = "0f14orll28G1ad4x7gnl2AQbjw14orlq"
    # phone_code = 'b713d1df1b15cb6bd224cd3b4e074534f66e129b1def0666fbd6a5dd43b3b752'
    # res = getWeappPhoneNum(phone_code,access_token)
    # # conn = client['weapp']
    # data = DB_WEAPP.fetch_all('USER',{})
    # data = getWeappAccessToken()
    return 'hello world'

@app.route('/login/',methods=['get'])
def user():
    expires = 30 #过期时间30天,每30天让用户更新一次电话
    code = request.values.get('code')
    session = getWeappSession(code)
    print('session is',session)
    user = DB_WEAPP.fetch_one('USER',{"unionid":session['openid']})
    if not user:
        # 不存在用户,返回0,前端会设置获取电话号码
        DB_WEAPP.insert_one('USER',{
            'unionid':session['openid'],
            'first_time': datetime.datetime.now(),
            'last_login_time': datetime.datetime.now()
        })
        return {"status":0,"message":'已创建用户',"unionid":session['openid']}
    else:
        if not user['phoneNumber'] or datetime.datetime.now() > user['last_login_time'] + datetime.timedelta(days=expires):
            return {"status":2,"message":'需重新获取电话号码', "unionid":session['openid']}
        else:
            print("用户状态正常")
            return {"status":1,"message":'正常'}

@app.route('/phone/',methods=['post'])
def createPhoneNum():
    access_token = getWeappAccessToken()
    print('调用凭证',access_token)
    req_data = request.get_json()
    phone_code = req_data.get('phoneCode')
    print('phoneCode',phone_code)
    unionid = req_data.get('unionid')
    print('unionid',unionid)
    phoneCode,msg = getWeappPhoneNum(phone_code,access_token[0])
    if msg == 'ok':
        DB_WEAPP.update_one('USER',{"unionid":unionid},{"$set":{
            "phoneNumber":phoneCode["phoneNumber"],
            "purePhoneNumber":phoneCode['purePhoneNumber'],
            "countryCode":phoneCode['countryCode']
        }}, True)
        return {'status':1,'msg':'获取号码成功'}
    else:
        return {'status':0,'msg':'获取号码失败','err': msg}
    
@app.route('/root/')
def root():
    # 直接返回门户网站的首页内容
    user = request.values.get('user')
    pw = request.values.get('pw')
   
    if user == 'kun' and pw == 'kunge2024':
        data = DB_WEAPP.fetch_all("USER")
        output = DB_WEAPP.result_to_excel(data)
        print('output is',output)
        print('data is ',data)
        res = make_response(output.getvalue())
        res.headers["Cache-Control"] = "no-cache"
        res.headers['Content-Type'] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        res.headers["Content-Disposition"] = "attachment;filename=receiptDataAnalyze.xlsx"
        # return output
        return res
        


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get("FLASK_SERVER_PORT", 9090), debug=True)
