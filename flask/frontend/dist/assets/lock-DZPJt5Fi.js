var l=(o,s,t)=>new Promise((n,r)=>{var c=e=>{try{i(t.next(e))}catch(f){r(f)}},a=e=>{try{i(t.throw(e))}catch(f){r(f)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(c,a);i((t=t.apply(o,s)).next())});import{V as I}from"./vue-COhTiP8A.js";import{ab as u,bF as k,l as L}from"./entry/index-B911ohv9-1709639936071.js";const p=I({id:"app-lock",state:()=>({lockInfo:u.getLocal(k)}),getters:{getLockInfo(o){return o.lockInfo}},actions:{setLockInfo(o){this.lockInfo=Object.assign({},this.lockInfo,o),u.setLocal(k,this.lockInfo,!0)},resetLockInfo(){u.removeLocal(k,!0),this.lockInfo=null},unLock(o){return l(this,null,function*(){var n;const s=L();return((n=this.lockInfo)==null?void 0:n.pwd)===o?(this.resetLockInfo(),!0):yield l(this,null,function*(){var r;try{const c=(r=s.getUserInfo)==null?void 0:r.username,a=yield s.login({username:c,password:o,goHome:!1,mode:"none"});return a&&this.resetLockInfo(),a}catch(c){return!1}})})}}});export{p as u};
