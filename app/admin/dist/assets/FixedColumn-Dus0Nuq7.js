import{_ as d}from"./BasicTable.vue_vue_type_script_setup_true_lang-B__OVVPE.js";import"./TableImg.vue_vue_type_style_index_0_lang-j5lGMzZ7.js";import{a as p}from"./componentMap-6-nlDLC9.js";import{u as s}from"./useTable-CGFapm-3.js";import{d as c}from"./table-DHRXkqjJ.js";import{d as u,Z as i,_ as f,k as _,a9 as x,a8 as b,u as o,ab as h}from"./vue-CtuDRv_L.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-CLrXfId1.js";import"./FormItem.vue_vue_type_script_lang-B8XjBE6v.js";import"./entry/index-DABNShW--1710921375309.js";import"./antd-DyzPRwGU.js";import"./helper-obtjBuQF.js";import"./BasicForm.vue_vue_type_style_index_0_lang-TyqFqYyE.js";import"./index-CAHwG1hY.js";import"./useWindowSizeFn-P9ujTsk2.js";import"./useForm-BIL0UVP1.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DoaVNGT9.js";import"./useFormItem-5yvMkjAJ.js";import"./onMountedOrActivated-BgwR2Bmq.js";import"./useSortable-CB3F0Fzq.js";import"./download-CXPnNNeN.js";import"./base64Conver-bBv-IO2K.js";import"./index-DIJZm3pw.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-B6qQnfly.js";import"./copyTextToClipboard-i-uAgz1h.js";import"./index-Dek0alpm.js";import"./index-EV6NSe22.js";const w={class:"p-4"},U=u({__name:"FixedColumn",setup(C){const n=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],[a]=s({title:"TableAction组件及固定列示例",api:c,columns:n,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function r(t){console.log("点击了删除",t)}function m(t){console.log("点击了启用",t)}return(t,I)=>(i(),f("div",w,[_(o(d),{onRegister:o(a)},{bodyCell:x(({column:l,record:e})=>[l.key==="action"?(i(),b(o(p),{key:0,actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:r.bind(null,e)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:m.bind(null,e)}}]},null,8,["actions","dropDownActions"])):h("",!0)]),_:1},8,["onRegister"])]))}});export{U as default};