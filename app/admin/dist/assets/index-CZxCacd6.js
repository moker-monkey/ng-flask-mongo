import{d as f,f as r,a7 as T,Z as l,a8 as c,a9 as o,$ as p,k as u,u as n,G as x,ai as S,m as h,A as k}from"./vue-CtuDRv_L.js";import{P as b}from"./index-f8CJvKfu.js";import{aj as y,ak as w,al as C,am as R,an as X,ao as Y,ap as B,aq as N,ar as V,as as j,at as D,au as E,av as F,c as I}from"./entry/index-DABNShW--1710921375309.js";import{W as P}from"./antd-DyzPRwGU.js";import"./useContentViewHeight-D_59re7m.js";import"./useWindowSizeFn-P9ujTsk2.js";import"./onMountedOrActivated-BgwR2Bmq.js";const W={class:"flex"},g={class:"box"},q=f({__name:"index",setup(A){const i={FadeTransition:y,ScaleTransition:w,SlideYTransition:C,ScrollYTransition:R,SlideYReverseTransition:X,ScrollYReverseTransition:Y,SlideXTransition:B,ScrollXTransition:N,SlideXReverseTransition:V,ScrollXReverseTransition:j,ScaleRotateTransition:D,ExpandXTransition:E,ExpandTransition:F},d=Object.keys(i).map(a=>({label:a.replace("Transition",""),value:a,key:a})),e=r("FadeTransition"),s=r(!0);function m(){s.value=!1,setTimeout(()=>{s.value=!0},300)}return(a,t)=>{const v=T("a-button");return l(),c(n(b),{title:"动画组件示例"},{default:o(()=>[p("div",W,[u(n(P),{options:n(d),value:e.value,"onUpdate:value":t[0]||(t[0]=_=>e.value=_),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),u(v,{type:"primary",class:"ml-4",onClick:m},{default:o(()=>[x(" start ")]),_:1})]),(l(),c(S(i[e.value]),null,{default:o(()=>[h(p("div",g,null,512),[[k,s.value]])]),_:1}))]),_:1})}}}),J=I(q,[["__scopeId","data-v-f3d40c1d"]]);export{J as default};