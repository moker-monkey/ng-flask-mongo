var f=(g,i,o)=>new Promise((p,n)=>{var d=e=>{try{r(o.next(e))}catch(s){n(s)}},l=e=>{try{r(o.throw(e))}catch(s){n(s)}},r=e=>e.done?p(e.value):Promise.resolve(e.value).then(d,l);r((o=o.apply(g,i)).next())});import{aD as S,h as G}from"./entry/index-DABNShW--1710921375309.js";import{a as V,B as b}from"./index-CAHwG1hY.js";import{_ as D}from"./BasicForm.vue_vue_type_script_setup_true_lang-CLrXfId1.js";import"./BasicForm.vue_vue_type_style_index_0_lang-TyqFqYyE.js";import"./componentMap-6-nlDLC9.js";import{u as M}from"./useForm-BIL0UVP1.js";import{aj as v}from"./antd-DyzPRwGU.js";import{d as I,f as y,Z as h,a8 as A,a9 as m,k as x,u as a,_ as N,aa as P,ag as U,G as $,a0 as k,F as j,ac as q}from"./vue-CtuDRv_L.js";import"./useWindowSizeFn-P9ujTsk2.js";import"./FormItem.vue_vue_type_script_lang-B8XjBE6v.js";import"./helper-obtjBuQF.js";import"./useFormItem-5yvMkjAJ.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DoaVNGT9.js";import"./uuid-D0SLUWHI.js";import"./useSortable-CB3F0Fzq.js";import"./download-CXPnNNeN.js";import"./base64Conver-bBv-IO2K.js";import"./index-DIJZm3pw.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-B6qQnfly.js";import"./copyTextToClipboard-i-uAgz1h.js";import"./index-Dek0alpm.js";import"./index-EV6NSe22.js";const de=I({__name:"index",setup(g){const i=S(),o=v.Group,{t:p}=G(),[n,{closeModal:d}]=V(()=>f(this,null,function*(){R()})),l=y({development:"http://www.a.com",test:"http://www.b.com",prod:"http://www.c.com"}),r=y({display:"flex",height:"30px",lineHeight:"30px"}),[e,{validateFields:s,setFieldsValue:B}]=M({showActionButtonGroup:!1,schemas:[{field:"api",label:p("layout.header.dropdownChangeApi"),colProps:{span:24},defaultValue:"docker",required:!0,slot:"api"}]}),C=()=>f(this,null,function*(){const t=yield s();i.setApiAddress({key:t.api,val:l.value[t.api]}),location.reload()}),F=()=>{d()},R=()=>{const{key:t=""}=i.getApiAddress;t&&B({api:t})};return(t,z)=>(h(),A(a(b),q({title:a(p)("layout.header.dropdownChangeApi")},t.$attrs,{onRegister:a(n),onOk:C,onCancel:F}),{default:m(()=>[x(a(D),{onRegister:a(e)},{api:m(({model:_,field:w})=>[x(a(o),{value:_[w],"onUpdate:value":c=>_[w]=c},{default:m(()=>[(h(!0),N(j,null,P(l.value,(c,u)=>(h(),A(a(v),{style:U(r.value),value:u,key:u},{default:m(()=>[$(k(u)+": "+k(c),1)]),_:2},1032,["style","value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:1},8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{de as default};