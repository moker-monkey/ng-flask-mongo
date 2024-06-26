# -*- coding: utf-8 -*-
"""封装 MongoDB 的数据库的操作信息;
注: 本工具依赖包是 pymongo == 3.12.3; 更高版本的包可能会导致方法的出错
"""
import pymongo,json,pandas as pd,io,json
from config.settings import MONGODB
from urllib.parse import quote_plus

class MongoHelper(object):
    """封装 MongoDB 的基本操作
    """ 
        
    
    def __init__(self,DB,autoClose = False):
        """实例化 MongoDB 的连接池对象,使用对象进行 MongoDB 的操作;
        """
        self.DB = DB
        self.autoClose = autoClose
        encoded_username = quote_plus(MONGODB["user"])
        encoded_password = quote_plus(MONGODB["password"])
        if MONGODB.get("password") is None:
            url = "mongodb://%(host)s:%(port)s" % {
                "host": MONGODB['host'],
                "port": MONGODB['port'],
            }
        else:
            # 扩展有密码时连接的配置信息;
            url = "mongodb://%(user)s:%(password)s@%(host)s:%(port)s" % {
                "user": encoded_username,
                "password": encoded_password,
                "host": MONGODB["host"],
                "port": MONGODB["port"]
            }
        print('连接的url',url)
        # 将线程安全的连接池封装到对象中;
        self.connect_client = pymongo.MongoClient(url)


    def serializer(self,obj):
        try:
            data = obj.__dict__
            return data
        except Exception as e:
            return str(obj)
        
    def set_autoClose(self,val):
        """
        注意【单例使用时】每次执行前都要设置一下
        True: 每次执行语句后会关闭
        False: 需要手动关闭
        """
        self.autoClose = val

    def close_connect(self):
        """
        关闭 mongodb 的连接;
        :return: None
        """
        self.connect_client.close()

    def get_connections(self) -> list:
        """
        获取数据库中的集合信息;
        :return: list; 集合名称的列表信息;

        example:
            v = mongo_helper.get_connections()
            print(v)
        """
        result = self.connect_client[self.DB].list_collection_names()
        if(self.autoClose):
            self.close_connect()
        return result

    def insert_one(self, collection_name: str, value: dict):
        """
        向集合中插入一条(文档)数据;
        :param collection_name: str; 集合的名称;
        :param value: 被插入的数据信息;
        :return: 返回插入返回的 id 信息

        example:
            v = mongo_helper.insert_one('test', {"name": "hello", "price": 33})
            print(v)
        """
        conn = self.connect_client[self.DB]
        col_insert = conn[collection_name].insert_one(value)
        col_id = col_insert.inserted_id
        if(self.autoClose):
            self.close_connect()
        return col_id

    def insert_many(self, collection_name: str, value: list):
        """
        插入多条数据信息;
        :param collection_name: 集合的名称;
        :param value: 列表嵌套字典的信息;
        :return: 返回插入的 ids 对象集合的列表信息;

        example:
            data = [
                {"name": "前端", 'price': 66},
                {"name": "前端", 'price': 66},
                {"name": "前端", 'price': 66},
                {"name": "前端", 'price': 66},
                {"name": "前端", 'price': 66},
                {"name": "前端", 'price': 66}
            ]
            v = mongo_helper.insert_many('test', data)
            print(v)
        """
        conn = self.connect_client[self.DB]
        col_insert = conn[collection_name].insert_many(value)
        col_ids = col_insert.inserted_ids
        if(self.autoClose):
            self.close_connect()
        return col_ids

    def fetch_one(self, collection_name: str, filters: dict = None) -> dict:
        """
        查询一条符合条件的数据信息
        :param collection_name: 集合的名称;
        :param filters: dict; 过滤条件;
        :return: dict; 筛选结果,字典信息;

        example:
            filters = {"name": "python入门"}
            v = mongo_helper.fetch_one("test", filters)
            print(v)

        """
        conn = self.connect_client[self.DB][collection_name]
        result = conn.find_one(filters)
        if(self.autoClose):
            self.close_connect()
        return result

    def fetch_all(self, collection_name: str, filters: dict = None) -> list:
        """
        查询符合条件的所有数据信息,将游标的信息进行循环获取到列表信息;
        :param collection_name: 集合的名称;
        :param filters: dict; 过滤的条件信息;
        :return: list; 符合条件的数据列表

        example:
            filters = {"name": "java入门"}
            v = mongo_helper.fetch_all("test", filters)
            print(v, type(v))

        """
        conn = self.connect_client[self.DB][collection_name]
        result = conn.find(filters)  # 此时返回的是游标对象;
        result_list = [i for i in result]
        if(self.autoClose):
            self.close_connect()
        return json.dumps(result_list, default=self.serializer)

    def fetch_prev_record(self, collection_name: str, filters: dict = None) -> dict:
        """
        根据过滤信息，查询最晚的一条记录;
        :param collection_name: 集合的名称;
        :param filters: dict; 过滤的条件信息;
        :return: list; 符合条件的数据列表

        example:
            filters = {"name": "java入门"}
            v = mongo_helper.fetch_prev_record("test", filters)
            print(v, type(v))

        """
        conn = self.connect_client[self.DB][collection_name]
        result = conn.find(filters).sort("_id", -1).limit(1)  # 此时返回的是游标对象;
        result_list = [i for i in result]
        if(self.autoClose):
            self.close_connect()
        return result_list[0] if result_list else None
    
    def fetch_first_record(self, collection_name: str, filters: dict = None) -> dict:
        """
        查询最早的一条记录
        :param collection_name: 集合的名称;
        :param filters: dict; 过滤的条件信息;
        :return: list; 符合条件的数据列表

        example:
            filters = {"name": "java入门"}
            v = mongo_helper.fetch_all("test", filters)
            print(v, type(v))
        """
        conn = self.connect_client[self.DB][collection_name]
        result = conn.find(filters).sort("_id", 1).limit(1)  # 此时返回的是游标对象;
        result_list = [i for i in result]
        if(self.autoClose):
            self.close_connect()
        return result_list[0] if result_list else None

    def fetch_page_info(self, collection_name: str, filters: dict = None, page_size: int = 10,
                        page_no: int = 1) -> dict:
        """
        分页查询的使用;
        :param collection_name: 集合的名称信息;
        :param filters: 查询条件信息;
        :param page_size: 每页上的数量信息;
        :param page_no: 页码信息;
        :return: dict; 返回分页查询的信息数据;

        example:
            filters = {"name": "java入门"}
            v = mongo_helper.fetch_page_info("test", filters, 5, 5)
            print(v)
        """
        conn = self.connect_client[self.DB][collection_name]
        skip = page_size * (page_no - 1)
        result = conn.find(filters).limit(page_size).skip(skip)
        result_dict = {"page_size": page_size, "page_no": page_no, "data": [i for i in result]}
        if(self.autoClose):
            self.close_connect()
        return result_dict

    def fetch_count_info(self, collection_name: str, filters: dict = None) -> int:
        """
        查询统计集合中的文档的数量信息;
        :param collection_name: str; 集合的名称;
        :param filters: dict; 按条件统计,为空的时候查询全部的信息;
        :return: int; 集合中的文档的数量信息;

        example:
            v = mongo_helper.fetch_count_info("test")
            print(v, type(v))
        """
        if filters is None:
            filters = {}
        conn = self.connect_client[self.DB][collection_name]
        result = conn.count_documents(filters)
        if(self.autoClose):
            self.close_connect()
        return result

    def update_one(self, collection_name: str, filters: dict, data: dict, upsert=False) -> int:
        """
        更新一条文档的信息;
        :param collection_name: 集合的名称;
        :param filters: dict; 筛选条件;
        :param data: 修改的信息;
        :return: int; 返回被修改的文档数;

        example:
            filters = {"name": "java入门"}
            v = mongo_helper.update_many("test", filters, {"$set": {"name": "我爱学习"}})
            $set设置字段值，$inc新增字段值
            print(v, type(v))
        """
        conn = self.connect_client[self.DB][collection_name]
        result = conn.update_one(filter=filters, update=data, upsert=upsert)
        if(self.autoClose):
            self.close_connect()
        return result.modified_count
    

    def update_many(self, collection_name: str, filters: dict, data: dict) -> int:
        """
        批量修改数据;
        :param collection_name: 集合的名称;
        :param filters: 筛选条件;
        :param data: 修改信息;
        :return: int; 修改的数量;

        example:
            filters = {"name": "我爱学习"}
            v = mongo_helper.update_many("test", filters, {"$set": {"name": "批量修改回来"}})
            print(v, type(v))
        """
        conn = self.connect_client[self.DB][collection_name]
        result = conn.update_many(filter=filters, update=data)
        if(self.autoClose):
            self.close_connect()
        return result.modified_count

    def delete_one(self, collection_name: str, filters: dict) -> int:
        """
        删除单条的数据信息;
        :param collection_name:
        :param filters:
        :return: int; 删除数据的条数;

        example:
            filters = {"name": "批量修改回来"}
            v = mongo_helper.delete_one("test", filters)
            print(v, type(v))
        """
        conn = self.connect_client[self.DB][collection_name]
        result = conn.delete_one(filter=filters)
        if(self.autoClose):
            self.close_connect()
        return result.deleted_count

    def delete_many(self, collection_name: str, filters: dict) -> int:
        """
        删除多条的数据信息;
        :param collection_name: 集合的名称;
        :param filters: dict; 过滤条件;
        :return: int; 返回删除的条数;

        example:
            filters = {"name": "批量修改回来"}
            v = mongo_helper.delete_many("test", filters)
            print(v, type(v))

        """
        conn = self.connect_client[self.DB][collection_name]
        result = conn.delete_many(filter=filters)
        if(self.autoClose):
            self.close_connect()
        return result.deleted_count

    def drop_collection(self, collection_name: str):
        """
        删除集合(删除表);
        :param collection_name: 集合的名称;
        :return: None

        example:
            mongo_helper.drop_collection("test_data")
        """
        self.connect_client[self.DB][collection_name].drop()
        if(self.autoClose):
            self.close_connect()

    def collection_count(self, collection_name:str):
        conn = self.connect_client[self.DB][collection_name]
        result = conn.estimated_document_count()
        return result
    
    def document_count(self, collection_name, filters):
        conn = self.connect_client[self.DB][collection_name]
        result = conn.count_documents(filter=filters)
        return result
    
    def set_unique_fields(self, collection_name, fields:[str]):
        # 如果已存在相同的index,会报错
        conn = self.connect_client[self.DB][collection_name]
        _fields = {(s, 1) for s in fields}
        conn.create_index(list(_fields),unique=True)
        return True
    
    def result_to_excel(self, result):
        print('this is result',result)
        output = io.BytesIO()
        df = pd.DataFrame(json.loads(str(result)))
        writer = pd.ExcelWriter(output, engine='openpyxl')
        df.to_excel(writer, index=False)
        output.seek(0)
        writer.close()
        return output

if __name__ == '__main__':
    """简单的脚本测试
    """
    # 使用的时候为保持连接池的数量,导入时直接导入该对象进行单例模式形式的使用
    DB_Stock_Overview_naked = MongoHelper('StockOverview_naked')
    DB_Stock_Overview = MongoHelper('StockOverview')
    v = DB_Stock_Overview_naked.fetch_count_info("BaseList")
    print(DB_Stock_Overview_naked.fetch_all("BaseList"))
