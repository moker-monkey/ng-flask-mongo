import{aI as T,aJ as F}from"./entry/index-B911ohv9-1709639936071.js";import{u as i,d as x,f as _,r as w,a7 as W,n as B,m as D,Z as N,a8 as R,a9 as s,$ as V,k as t,G as c}from"./vue-COhTiP8A.js";import{P as A}from"./index-CTJAYMqh.js";import{as as p}from"./antd-BS7GgtZr.js";import"./useContentViewHeight-BAS-NZzJ.js";import"./useWindowSizeFn-R3hq2B0A.js";import"./onMountedOrActivated-GpUdBAv_.js";function y(r){let a,n=document.body;if(Reflect.has(r,"target")||Reflect.has(r,"props")){const o=r;a=o.props||{},n=o.target||document.body}else a=r;const e=T(a,void 0,!0);return[()=>{const o=i(n);o&&e.open(o)},()=>{e.close()},o=>{e.setTip(o)}]}const j=x({__name:"index",setup(r){const a=_(null),n=_(!1),e=w({absolute:!1,loading:!1,theme:"dark",background:"rgba(111,111,111,.7)",tip:"加载中..."}),[u,d]=y({tip:"加载中..."}),[m,o]=y({target:a,props:{tip:"加载中...",absolute:!0}});function g(f){e.absolute=f,e.loading=!0,setTimeout(()=>{e.loading=!1},2e3)}function L(){g(!1)}function b(){g(!0)}function k(){u(),setTimeout(()=>{d()},2e3)}function v(){m(),setTimeout(()=>{o()},2e3)}function C(){n.value=!0,setTimeout(()=>{n.value=!1},2e3)}return(f,E)=>{const l=W("a-button"),h=B("loading");return D((N(),R(i(A),{"loading-tip":"加载中...",title:"Loading组件示例"},{default:s(()=>[V("div",{ref_key:"wrapEl",ref:a},[t(i(p),{message:"组件方式"}),t(l,{class:"my-4 mr-4",type:"primary",onClick:L},{default:s(()=>[c(" 全屏 Loading ")]),_:1}),t(l,{class:"my-4",type:"primary",onClick:b},{default:s(()=>[c(" 容器内 Loading ")]),_:1}),t(i(F),{loading:e.loading,absolute:e.absolute,theme:e.theme,background:e.background,tip:e.tip},null,8,["loading","absolute","theme","background","tip"]),t(i(p),{message:"函数方式"}),t(l,{class:"my-4 mr-4",type:"primary",onClick:k},{default:s(()=>[c(" 全屏 Loading ")]),_:1}),t(l,{class:"my-4",type:"primary",onClick:v},{default:s(()=>[c(" 容器内 Loading ")]),_:1}),t(i(p),{message:"指令方式"}),t(l,{class:"my-4 mr-4",type:"primary",onClick:C},{default:s(()=>[c(" 打开指令Loading ")]),_:1})],512)]),_:1})),[[h,n.value]])}}});export{j as default};