import{_ as s}from"./BasicTable.vue_vue_type_script_setup_true_lang-B__OVVPE.js";import"./TableImg.vue_vue_type_style_index_0_lang-j5lGMzZ7.js";import{a as c}from"./componentMap-6-nlDLC9.js";import{u as d}from"./useTable-CGFapm-3.js";import{P as u}from"./index-f8CJvKfu.js";import{getBasicColumns as f}from"./tableData-BMnIBFtI.js";import{d as _}from"./table-DHRXkqjJ.js";import{d as g,Z as a,a8 as r,a9 as i,k as b,u as t,$ as C,a0 as x,ab as B}from"./vue-CtuDRv_L.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-CLrXfId1.js";import"./FormItem.vue_vue_type_script_lang-B8XjBE6v.js";import"./entry/index-DABNShW--1710921375309.js";import"./antd-DyzPRwGU.js";import"./helper-obtjBuQF.js";import"./BasicForm.vue_vue_type_style_index_0_lang-TyqFqYyE.js";import"./index-CAHwG1hY.js";import"./useWindowSizeFn-P9ujTsk2.js";import"./useForm-BIL0UVP1.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DoaVNGT9.js";import"./useFormItem-5yvMkjAJ.js";import"./onMountedOrActivated-BgwR2Bmq.js";import"./useSortable-CB3F0Fzq.js";import"./download-CXPnNNeN.js";import"./base64Conver-bBv-IO2K.js";import"./index-DIJZm3pw.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-B6qQnfly.js";import"./copyTextToClipboard-i-uAgz1h.js";import"./index-Dek0alpm.js";import"./index-EV6NSe22.js";import"./useContentViewHeight-D_59re7m.js";import"./select-D7FTpR5m.js";const to=g({__name:"ExpandTable",setup(k){const[p]=d({api:_,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,accordion:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function m(o){console.log("点击了删除",o)}function l(o){console.log("点击了启用",o)}return(o,w)=>(a(),r(t(u),{title:"可展开表格",content:"TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:i(()=>[b(t(s),{onRegister:t(p)},{expandedRowRender:i(({record:e})=>[C("span",null,"No: "+x(e.no),1)]),bodyCell:i(({column:e,record:n})=>[e.key==="action"?(a(),r(t(c),{key:0,stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:m.bind(null,n)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:l.bind(null,n)}}]},null,8,["actions","dropDownActions"])):B("",!0)]),_:1},8,["onRegister"])]),_:1}))}});export{to as default};
