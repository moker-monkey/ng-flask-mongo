import{d as u}from"./vuedraggable.umd-BCY2jvis.js";import{y as f,f as g,c as h}from"./entry/index-DABNShW--1710921375309.js";import{d as C,r as I,a7 as r,Z as $,_ as b,k as d,a9 as v,$ as _,G as y,a0 as k,ac as A,a1 as S}from"./vue-CtuDRv_L.js";import"./antd-DyzPRwGU.js";const D=C({name:"CollapseItem",components:{draggable:u,Icon:f},props:{list:{type:[Array],default:()=>[]},handleListPush:{type:Function,default:null}},setup(e,{emit:t}){const{prefixCls:s}=g("form-design-collapse-item"),n=I({});return{prefixCls:s,state:n,handleStart:(a,o)=>{t("start",o[a.oldIndex].component)},handleAdd:a=>{console.log(a)},cloneItem:a=>e.handleListPush(a)}}}),B=["onDragstart","onClick"];function N(e,t,s,n,i,c){const l=r("Icon"),a=r("draggable");return $(),b("div",{class:S(e.prefixCls)},[d(a,A({tag:"ul","model-value":e.list},{group:{name:"form-draggable",pull:"clone",put:!1},sort:!1,clone:e.cloneItem,animation:180,ghostClass:"moving"},{"item-key":"type",onStart:t[0]||(t[0]=o=>e.handleStart(o,e.list)),onAdd:e.handleAdd}),{item:v(({element:o,index:p})=>[_("li",{class:"bs-box text-ellipsis",onDragstart:m=>e.$emit("add-attrs",e.list,p),onClick:m=>e.$emit("handle-list-push",o)},[d(l,{icon:o.icon},null,8,["icon"]),y(" "+k(o.label),1)],40,B)]),_:1},16,["model-value","onAdd"])],2)}const x=h(D,[["render",N],["__scopeId","data-v-9ac1f6bb"]]);export{x as default};
