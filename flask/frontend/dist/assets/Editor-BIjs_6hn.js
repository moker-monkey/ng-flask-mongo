import{_ as n}from"./BasicForm.vue_vue_type_script_setup_true_lang-B_UtnGoF.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DAHB9m3T.js";import"./componentMap-DZl6fvk-.js";import{C as l,a as u}from"./entry/index-B911ohv9-1709639936071.js";import{M as c}from"./index-Dn36L_AI.js";import{P as f}from"./index-CTJAYMqh.js";import{d,Z as _,a8 as k,a9 as o,k as a,u as e,l as h}from"./vue-COhTiP8A.js";import"./FormItem.vue_vue_type_script_lang-VeRVZCVt.js";import"./helper-G3iAk1hG.js";import"./antd-BS7GgtZr.js";import"./index-CPqgogsb.js";import"./useWindowSizeFn-R3hq2B0A.js";import"./useFormItem-CGQuU2J0.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-C9cFO_nk.js";import"./uuid-D0SLUWHI.js";import"./useSortable-BMVMPHws.js";import"./download-DE9YbXJ6.js";import"./base64Conver-bBv-IO2K.js";import"./index-CtIoCqGb.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CqpBDhiP.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-Cd7sb74L.js";import"./index-DkOmvddw.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useContentViewHeight-BAS-NZzJ.js";const G=d({__name:"Editor",setup(C){const i=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:t,field:r})=>h(c,{value:t[r],onChange:s=>{t[r]=s}})}],{createMessage:p}=u();function m(t){p.success("click search,values:"+JSON.stringify(t))}return(t,r)=>(_(),k(e(f),{title:"MarkDown组件嵌入Form示例"},{default:o(()=>[a(e(l),{title:"MarkDown表单"},{default:o(()=>[a(e(n),{labelWidth:100,schemas:i,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:m})]),_:1})]),_:1}))}});export{G as default};