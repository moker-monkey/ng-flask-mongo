import{e as d}from"./formItemPropsConfig-YoD-wQ5D.js";import C from"./RuleProps-CwvXRQiQ.js";import{u as y}from"./useFormDesignState-Bxb7RWFj.js";import{aG as _,E as I,a2 as P,Z as b,ax as k,a3 as v,W as F,ay as g,bn as h}from"./antd-DyzPRwGU.js";import{d as E,a7 as m,Z as r,_ as n,a8 as s,a9 as p,F as w,aa as S,ai as $,ac as A,ab as a}from"./vue-CtuDRv_L.js";import{c as B}from"./entry/index-DABNShW--1710921375309.js";import"./formItemConfig-Dy6fd-Om.js";import"./componentMap-6-nlDLC9.js";import"./useFormItem-5yvMkjAJ.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DoaVNGT9.js";import"./index-CAHwG1hY.js";import"./useWindowSizeFn-P9ujTsk2.js";import"./uuid-D0SLUWHI.js";import"./useSortable-CB3F0Fzq.js";import"./download-CXPnNNeN.js";import"./base64Conver-bBv-IO2K.js";import"./index-DIJZm3pw.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-B6qQnfly.js";import"./copyTextToClipboard-i-uAgz1h.js";import"./index-Dek0alpm.js";import"./index-EV6NSe22.js";import"./index-C-HTZ3dm.js";const D=E({name:"FormItemProps",components:{RuleProps:C,Empty:_,Input:I,Form:P,FormItem:b,Switch:k,Checkbox:v,Select:F,Slider:g},setup(){const{formConfig:o}=y();return{baseItemColumnProps:d,formConfig:o,showProps:t=>t&&h(t)?!t.includes(o.value.currentItem.component):!0}}}),U={class:"properties-content"},Z={key:0,class:"properties-body"};function G(o,i,t,L,N,R){const c=m("Empty"),l=m("FormItem"),u=m("Form");return r(),n("div",U,[o.formConfig.currentItem?(r(),n("div",Z,[o.formConfig.currentItem.key?(r(),s(u,{key:1,"label-align":"left",layout:"vertical"},{default:p(()=>[(r(!0),n(w,null,S(o.baseItemColumnProps,e=>(r(),n("div",{key:e.name},[o.showProps(e.exclude)?(r(),s(l,{key:0,label:e.label},{default:p(()=>[o.formConfig.currentItem.colProps&&e.component?(r(),s($(e.component),A({key:0,class:"component-props"},e.componentProps,{value:o.formConfig.currentItem.colProps[e.name],"onUpdate:value":f=>o.formConfig.currentItem.colProps[e.name]=f}),null,16,["value","onUpdate:value"])):a("",!0)]),_:2},1032,["label"])):a("",!0)]))),128))]),_:1})):(r(),s(c,{key:0,class:"hint-box",description:"未选择控件"}))])):a("",!0)])}const ao=B(D,[["render",G]]);export{ao as default};
