import{_ as g}from"./BasicTable.vue_vue_type_script_setup_true_lang-B__OVVPE.js";import"./TableImg.vue_vue_type_style_index_0_lang-j5lGMzZ7.js";import{a as C}from"./componentMap-6-nlDLC9.js";import{u as x}from"./useTable-CGFapm-3.js";import{d as k}from"./system-FKjTS984.js";import{u as w}from"./index-Dm7OTFZ4.js";import{_ as y,c as T,s as S}from"./MenuDrawer.vue_vue_type_script_setup_true_lang-DsW1-kxq.js";import{d as R,a7 as D,Z as a,_ as v,k as o,a9 as r,G as B,a8 as F,u as t,ab as M,y as N}from"./vue-CtuDRv_L.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-CLrXfId1.js";import"./FormItem.vue_vue_type_script_lang-B8XjBE6v.js";import"./entry/index-DABNShW--1710921375309.js";import"./antd-DyzPRwGU.js";import"./helper-obtjBuQF.js";import"./BasicForm.vue_vue_type_style_index_0_lang-TyqFqYyE.js";import"./index-CAHwG1hY.js";import"./useWindowSizeFn-P9ujTsk2.js";import"./useForm-BIL0UVP1.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DoaVNGT9.js";import"./useFormItem-5yvMkjAJ.js";import"./onMountedOrActivated-BgwR2Bmq.js";import"./useSortable-CB3F0Fzq.js";import"./download-CXPnNNeN.js";import"./base64Conver-bBv-IO2K.js";import"./index-DIJZm3pw.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-B6qQnfly.js";import"./copyTextToClipboard-i-uAgz1h.js";import"./index-Dek0alpm.js";import"./index-EV6NSe22.js";const pe=R({name:"MenuManagement",__name:"index",setup(V){const[s,{openDrawer:i}]=w(),[m,{reload:l,expandAll:c}]=x({title:"菜单列表",api:k,columns:T,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function u(e){i(!0,{record:e,isUpdate:!0})}function d(e){console.log(e)}function f(){l()}function _(){N(c)}return(e,$)=>{const h=D("a-button");return a(),v("div",null,[o(t(g),{onRegister:t(m),onFetchSuccess:_},{toolbar:r(()=>[o(h,{type:"primary",onClick:p},{default:r(()=>[B(" 新增菜单 ")]),_:1})]),bodyCell:r(({column:b,record:n})=>[b.key==="action"?(a(),F(t(C),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:u.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:d.bind(null,n)}}]},null,8,["actions"])):M("",!0)]),_:1},8,["onRegister"]),o(y,{onRegister:t(s),onSuccess:f},null,8,["onRegister"])])}}});export{pe as default};
