var f=(w,m,i)=>new Promise((n,s)=>{var r=a=>{try{l(i.next(a))}catch(d){s(d)}},u=a=>{try{l(i.throw(a))}catch(d){s(d)}},l=a=>a.done?n(a.value):Promise.resolve(a.value).then(r,u);l((i=i.apply(w,m)).next())});import{_ as b}from"./BasicTable.vue_vue_type_script_setup_true_lang-B__OVVPE.js";import"./TableImg.vue_vue_type_style_index_0_lang-j5lGMzZ7.js";import{a as v}from"./componentMap-6-nlDLC9.js";import{u as x}from"./useTable-CGFapm-3.js";import{o as h}from"./select-D7FTpR5m.js";import{d as g}from"./table-DHRXkqjJ.js";import{t as I}from"./tree-DbELKN3n.js";import{a as k}from"./entry/index-DABNShW--1710921375309.js";import{f as _}from"./antd-DyzPRwGU.js";import{d as y,f as P,Z as R,_ as F,k as M,a9 as A,a8 as E,u as c,ab as S}from"./vue-CtuDRv_L.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-CLrXfId1.js";import"./FormItem.vue_vue_type_script_lang-B8XjBE6v.js";import"./helper-obtjBuQF.js";import"./BasicForm.vue_vue_type_style_index_0_lang-TyqFqYyE.js";import"./index-CAHwG1hY.js";import"./useWindowSizeFn-P9ujTsk2.js";import"./useForm-BIL0UVP1.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DoaVNGT9.js";import"./useFormItem-5yvMkjAJ.js";import"./onMountedOrActivated-BgwR2Bmq.js";import"./useSortable-CB3F0Fzq.js";import"./download-CXPnNNeN.js";import"./base64Conver-bBv-IO2K.js";import"./index-DIJZm3pw.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-B6qQnfly.js";import"./copyTextToClipboard-i-uAgz1h.js";import"./index-Dek0alpm.js";import"./index-EV6NSe22.js";const Y={class:"p-4"},ut=y({__name:"EditRowTable",setup(w){const m=[{title:"输入框",dataIndex:"name-group",editRow:!0,children:[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:150},{title:"输入框校验",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,align:"right",editRule:t=>f(this,null,function*(){return t==="2"?"不能输入该值":""})},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150}]},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"},{label:"Option3",value:"3"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:h,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"远程下拉树",dataIndex:"name8",editRow:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:I,resultField:"list"},width:200},{title:"日期选择",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"时间选择",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:t=>t?"是":"否",width:100},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:t=>t?"开":"关",width:100},{title:"单选框",dataIndex:"radio1",editRow:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"单选按钮框",dataIndex:"radio2",editRow:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"远程单选框",dataIndex:"radio3",editRow:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:h,resultField:"list",labelField:"name",valueField:"id"},width:200}],{createMessage:i}=k(),n=P(""),[s]=x({title:"可编辑行示例",titleHelpMessage:["本例中修改[数字输入框]这一列时，同一行的[远程下拉]列的当前编辑数据也会同步发生改变"],api:g,columns:m,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},actionColumn:{width:160,title:"Action",dataIndex:"action"}});function r(t){var e;n.value=t.key,(e=t.onEdit)==null||e.call(t,!0)}function u(t){var e;n.value="",(e=t.onEdit)==null||e.call(t,!1,!1)}function l(t){return f(this,null,function*(){var o,p;if(i.loading({content:"正在保存...",duration:0,key:"saving"}),yield(o=t.onValid)==null?void 0:o.call(t))try{const C=_(t.editValueRefs);console.log(C),(yield(p=t.onEdit)==null?void 0:p.call(t,!1,!0))&&(n.value=""),i.success({content:"数据已保存",key:"saving"})}catch(C){i.error({content:"保存失败",key:"saving"})}else i.error({content:"请填写正确的数据",key:"saving"})})}function a(t){return t.editable?[{label:"保存",onClick:l.bind(null,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:u.bind(null,t)}}]:[{label:"编辑",disabled:n.value?n.value!==t.key:!1,onClick:r.bind(null,t)}]}function d({column:t,value:e,record:o}){t.dataIndex==="id"&&(o.editValueRefs.name4.value=`${e}`),console.log(t,e,o)}return(t,e)=>(R(),F("div",Y,[M(c(b),{onRegister:c(s),onEditChange:d},{bodyCell:A(({column:o,record:p})=>[o.key==="action"?(R(),E(c(v),{key:0,actions:a(p)},null,8,["actions"])):S("",!0)]),_:1},8,["onRegister"])]))}});export{ut as default};
