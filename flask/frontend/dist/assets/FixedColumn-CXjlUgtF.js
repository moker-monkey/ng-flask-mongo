import{_ as p}from"./BasicTable.vue_vue_type_script_setup_true_lang-DTIMzejU.js";import"./TableImg.vue_vue_type_style_index_0_lang-CHNVHLiR.js";import{a as l}from"./componentMap-DZl6fvk-.js";import{u as s}from"./useTable-DD9_T1jP.js";import{d as c}from"./table-DE_DBy1H.js";import{d as u,Z as o,_ as f,k as _,a9 as x,a8 as b,u as t,ab as h}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-B_UtnGoF.js";import"./FormItem.vue_vue_type_script_lang-VeRVZCVt.js";import"./entry/index-B911ohv9-1709639936071.js";import"./antd-BS7GgtZr.js";import"./helper-G3iAk1hG.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DAHB9m3T.js";import"./index-CPqgogsb.js";import"./useWindowSizeFn-R3hq2B0A.js";import"./useForm-BVwVowtA.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-C9cFO_nk.js";import"./useFormItem-CGQuU2J0.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-BMVMPHws.js";import"./download-DE9YbXJ6.js";import"./base64Conver-bBv-IO2K.js";import"./index-CtIoCqGb.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CqpBDhiP.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-Cd7sb74L.js";import"./index-DkOmvddw.js";const w={class:"p-4"},U=u({__name:"FixedColumn",setup(C){const n=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],[r]=s({title:"TableAction组件及固定列示例",api:c,columns:n,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function a(e){}function m(e){}return(e,I)=>(o(),f("div",w,[_(t(p),{onRegister:t(r)},{bodyCell:x(({column:d,record:i})=>[d.key==="action"?(o(),b(t(l),{key:0,actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:a.bind(null,i)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:m.bind(null,i)}}]},null,8,["actions","dropDownActions"])):h("",!0)]),_:1},8,["onRegister"])]))}});export{U as default};
