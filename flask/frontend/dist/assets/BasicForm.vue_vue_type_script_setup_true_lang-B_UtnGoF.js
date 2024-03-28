var Re=Object.defineProperty;var Fe=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var we=(n,r,s)=>r in n?Re(n,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[r]=s,_=(n,r)=>{for(var s in r||(r={}))Ne.call(r,s)&&we(n,s,r[s]);if(Fe)for(var s of Fe(r))Ce.call(r,s)&&we(n,s,r[s]);return n};var x=(n,r,s)=>new Promise((o,h)=>{var p=c=>{try{g(s.next(c))}catch(u){h(u)}},l=c=>{try{g(s.throw(c))}catch(u){h(u)}},g=c=>c.done?o(c.value):Promise.resolve(c.value).then(p,l);g((s=s.apply(n,r)).next())});import{u as t,g as ke,c as q,w as M,an as Ke,y as ve,J as Ie,h as Ue,d as He,K as We,r as Ve,f as Z,o as Ye,Z as de,a8 as Te,a9 as re,k as Be,ae as ce,_ as Xe,aa as pe,ad as De,aj as he,ak as me,F as qe,ac as Ee,al as Ge}from"./vue-COhTiP8A.js";import{_ as Je}from"./FormItem.vue_vue_type_script_lang-VeRVZCVt.js";import{b as ze,c as Ze,_ as Me}from"./BasicForm.vue_vue_type_style_index_0_lang-DAHB9m3T.js";import{h as Qe,i as le,d as _e,a as et}from"./helper-G3iAk1hG.js";import{G as W,H as Q,I as H,F as tt,u as Le,J as Oe,K as ye,d as Pe,f as nt}from"./entry/index-B911ohv9-1709639936071.js";import{e as ue,l as fe,s as G,ad as Ae,ag as je,d as ee,v as xe,f as J,aa as st,ah as at,ai as ot,U as it,a2 as rt}from"./antd-BS7GgtZr.js";import{u as ct}from"./index-CPqgogsb.js";function lt(n,r,s){const o=/^\[(.+)\]$/;if(o.test(n)){const h=n.match(o);if(h&&h[1]){const p=h[1].split(",");return r=Array.isArray(r)?r:[r],p.forEach((l,g)=>{G(s,l.trim(),r[g])}),!0}}}function ft(n,r,s){const o=/^\{(.+)\}$/;if(o.test(n)){const h=n.match(o);if(h&&h[1]){const p=h[1].split(",");return r=W(r)?r:{},p.forEach(l=>{G(s,l.trim(),r[l.trim()])}),!0}}}function ut({defaultValueRef:n,getSchema:r,formModel:s,getProps:o}){function h(c){var w,B;if(!W(c))return{};const u={};for(const O of Object.entries(c)){let[,d]=O;const[I]=O;if(!I||Q(d)&&d.length===0||ue(d))continue;const m=t(o).transformDateFunc;W(d)&&(d=m==null?void 0:m(d)),Q(d)&&((w=d[0])!=null&&w.format)&&((B=d[1])!=null&&B.format)&&(d=d.map(A=>m==null?void 0:m(A))),fe(d)&&(d=d.trim()),!lt(I,d,u)&&!ft(I,d,u)&&G(u,I,d)}return p(u)}function p(c){const u=t(o).fieldMapToTime;if(!u||!Array.isArray(u))return c;for(const[w,[B,O],d="YYYY-MM-DD"]of u){if(!w||!B||!O)continue;if(!Ae(c,w)){je(c,w);continue}const[I,m]=Ae(c,w),[A,b]=Array.isArray(d)?d:[d,d];!ee(I)&&!xe(I)&&G(c,B,l(I,A)),!ee(m)&&!xe(m)&&G(c,O,l(m,b)),je(c,w)}return c}function l(c,u){return u==="timestamp"?H(c).unix():u==="timestampStartDay"?H(c).startOf("day").unix():H(c).format(u)}function g(){const c=t(r),u={};c.forEach(w=>{const{defaultValue:B,defaultValueObj:O}=w,d=Object.keys(O||{});d.length&&d.map(I=>{u[I]=O[I],s[I]===void 0&&(s[I]=O[I])}),ee(B)||(u[w.field]=B,s[w.field]===void 0&&(s[w.field]=B))}),n.value=J(u)}return{handleFormValues:h,initDefault:g}}const X=24;function dt({advanceState:n,emit:r,getProps:s,getSchema:o,formModel:h,defaultValueRef:p}){const l=ke(),{realWidthRef:g,screenEnum:c,screenRef:u}=tt(),w=q(()=>{if(!n.isAdvanced)return 0;const A=t(s).emptySpan||0;if(st(A))return A;if(W(A)){const{span:b=0}=A,k=t(u);return A[k.toLowerCase()]||b||0}return 0}),B=Le(I,30);M([()=>t(o),()=>n.isAdvanced,()=>t(g)],()=>{const{showAdvancedButton:A}=t(s);A&&B()},{immediate:!0});function O(A,b=0,k=!1){const D=t(g),S=parseInt(A.md)||parseInt(A.xs)||parseInt(A.sm)||A.span||X,L=parseInt(A.lg)||S,R=parseInt(A.xl)||L,N=parseInt(A.xxl)||R;return D<=c.LG?b+=S:D<c.XL?b+=L:D<c.XXL?b+=R:b+=N,k?(n.hideAdvanceBtn=!1,b<=X*2?(n.hideAdvanceBtn=!0,n.isAdvanced=!0):b>X*2&&b<=X*(t(s).autoAdvancedLine||3)?n.hideAdvanceBtn=!1:n.isLoad||(n.isLoad=!0,n.isAdvanced=!n.isAdvanced),{isAdvanced:n.isAdvanced,itemColSum:b}):b>X*(t(s).alwaysShowLines||1)?{isAdvanced:n.isAdvanced,itemColSum:b}:{isAdvanced:!0,itemColSum:b}}const d=Ke({});function I(){var D;let A=0,b=0;const{baseColProps:k={}}=t(s);for(const S of t(o)){const{show:L,colProps:R}=S;let N=!0;if(at(L)&&(N=L),ue(L)&&(N=L({schema:S,model:h,field:S.field,values:_(_({},t(p)),h)})),N&&(R||k)){const{itemColSum:K,isAdvanced:Y}=O(_(_({},k),R),A);A=K||0,Y&&(b=A),d[S.field]=Y}}(D=l==null?void 0:l.proxy)==null||D.$forceUpdate(),n.actionSpan=b%X+t(w),O(t(s).actionColOptions||{span:X},A,!0),r("advanced-change")}function m(){n.isAdvanced=!n.isAdvanced}return{handleToggleAdvanced:m,fieldsIsAdvancedMap:d}}function pt(n,r={}){const s=/^\[(.+)\]$/;if(s.test(n)){const o=n.match(s);if(o&&o[1]){const h=o[1].split(",");if(!h.length)return;const p=[];return h.forEach((l,g)=>{G(p,g,r[l.trim()])}),p.filter(Boolean).length?p:void 0}}}function ht(n,r={}){const s=/^\{(.+)\}$/;if(s.test(n)){const o=n.match(s);if(o&&o[1]){const h=o[1].split(",");if(!h.length)return;const p={};return h.forEach(l=>{G(p,l.trim(),r[l.trim()])}),Object.values(p).filter(Boolean).length?p:void 0}}}function mt({emit:n,getProps:r,formModel:s,getSchema:o,defaultValueRef:h,formElRef:p,schemaRef:l,handleFormValues:g}){function c(){return x(this,null,function*(){const{resetFunc:e,submitOnReset:a}=t(r);e&&ue(e)&&(yield e()),t(p)&&(Object.keys(s).forEach(i=>{const F=t(o).find(V=>V.field===i),y=F==null?void 0:F.defaultValueObj,j=Object.keys(y||{});j.length&&j.map(V=>{s[V]=y[V]}),s[i]=yt(F,h,i)}),ve(()=>R()),n("reset",Ie(s)),a&&K())})}const u=()=>t(o).map(e=>[...e.fields||[],e.field]).flat(1).filter(Boolean);function w(e){return x(this,null,function*(){if(Object.keys(e).length===0)return;const a=u(),v=".",i=a.filter(y=>String(y).indexOf(v)>=0),F=[];a.forEach(y=>{const j=t(o).find(E=>E.field===y);let V=Ae(e,y);const te=Reflect.has(e,y);V=Qe(j==null?void 0:j.component,V);const{componentProps:ne}=j||{};let P=ne;typeof ne=="function"&&(P=P({formModel:t(s),formActionType:Y}));const se=pt(y,e)||ht(y,e);if(te||se){const E=se||V;if(k(y))if(Array.isArray(E)){const U=[];for(const z of E)U.push(z?H(z):null);t(s)[y]=U}else t(s)[y]=E?P!=null&&P.valueFormat?E:H(E):null;else t(s)[y]=E;P!=null&&P.onChange&&(P==null||P.onChange(E)),F.push(y)}else i.forEach(E=>{try{const U=E.split(".").reduce((z,f)=>z[f],e);Oe(U)&&(t(s)[E]=t(U),F.push(E))}catch(U){Oe(h.value[E])&&(t(s)[E]=J(t(h.value[E])))}})}),D(F).catch(y=>{})})}function B(e){return x(this,null,function*(){const a=J(t(o));if(!e)return;let v=fe(e)?[e]:e;fe(e)&&(v=[e]);for(const i of v)O(i,a);l.value=a})}function O(e,a){if(fe(e)){const v=a.findIndex(i=>i.field===e);v!==-1&&(delete s[e],a.splice(v,1))}}function d(e,a,v=!1){return x(this,null,function*(){const i=J(t(o)),F=Array.isArray(e)?e.map(V=>V.field):[e.field];if(i.find(V=>F.includes(V.field))){ye("There are schemas that have already been added");return}const y=i.findIndex(V=>V.field===a),j=W(e)?[e]:e;!a||y===-1||v?v?i.unshift(...j):i.push(...j):y!==-1&&i.splice(y+1,0,...j),l.value=i,A(e)})}function I(e){return x(this,null,function*(){let a=[];if(W(e)&&a.push(e),Q(e)&&(a=[...e]),!a.every(i=>le(i.component)||Reflect.has(i,"field")&&i.field)){ye("All children of the form Schema array that need to be updated must contain the `field` field");return}l.value=a})}function m(e){return x(this,null,function*(){let a=[];if(W(e)&&a.push(e),Q(e)&&(a=[...e]),!a.every(y=>le(y.component)||Reflect.has(y,"field")&&y.field)){ye("All children of the form Schema array that need to be updated must contain the `field` field");return}const i=[],F=[];t(o).forEach(y=>{const j=a.find(V=>y.field===V.field);if(j){const V=Pe(y,j);F.push(V),i.push(V)}else i.push(y)}),A(F),l.value=ot(i,"field")})}function A(e){let a=[];W(e)&&a.push(e),Q(e)&&(a=[...e]);const v={},i=b();a.forEach(F=>{!le(F.component)&&Reflect.has(F,"field")&&F.field&&!ee(F.defaultValue)&&(!(F.field in i)||ee(i[F.field]))&&(v[F.field]=F.defaultValue)}),w(v)}function b(){return t(p)?g(Ie(t(s))):{}}function k(e){return t(o).some(a=>a.field===e&&a.component?_e.includes(a.component):!1)}function D(e){return x(this,null,function*(){var v;const a=yield(v=t(p))==null?void 0:v.validateFields(e);return g(a)})}function S(e){return x(this,null,function*(){var a;yield(a=t(p))==null?void 0:a.setProps(e)})}function L(e){return x(this,null,function*(){var i;let a;e===void 0?a=u():a=e===Array.isArray(e)?e:void 0;const v=yield(i=t(p))==null?void 0:i.validate(a);return g(v)})}function R(e){return x(this,null,function*(){var a;yield(a=t(p))==null?void 0:a.clearValidate(e)})}function N(e,a){return x(this,null,function*(){var v;yield(v=t(p))==null?void 0:v.scrollToField(e,a)})}function K(e){return x(this,null,function*(){e&&e.preventDefault();const{submitFunc:a}=t(r);if(a&&ue(a)){yield a();return}if(t(p))try{const i=yield L();n("submit",i)}catch(i){if((i==null?void 0:i.outOfDate)===!1&&(i!=null&&i.errorFields))return;throw new Error(i)}})}const Y={getFieldsValue:b,setFieldsValue:w,resetFields:c,updateSchema:m,resetSchema:I,setProps:S,removeSchemaByField:B,appendSchemaByField:d,clearValidate:R,validateFields:D,validate:L,submit:K,scrollToField:N};return{handleSubmit:K,clearValidate:R,validate:L,validateFields:D,getFieldsValue:b,updateSchema:m,resetSchema:I,appendSchemaByField:d,removeSchemaByField:B,resetFields:c,setFieldsValue:w,scrollToField:N}}function yt(n,r,s){let o=J(r.value[s]);return vt(n)?o||void 0:(!o&&n&&At(n)&&(o=[0,0]),!o&&n&&n.component==="ApiTree"&&(o=[]),o)}function At(n){if(n.component==="Slider"&&n.componentProps&&"range"in n.componentProps)return!0}function vt(n){return(n==null?void 0:n.component)&&et.includes(n.component)}function gt(h){return x(this,arguments,function*({getSchema:n,getProps:r,formElRef:s,isInitedDefault:o}){Ue(()=>x(this,null,function*(){if(t(o)||!t(r).autoFocusFirstItem)return;yield ve();const p=t(n),l=t(s),g=l==null?void 0:l.$el;if(!l||!g||!p||p.length===0)return;const c=p[0];if(!c.component||!c.component.includes("Input"))return;const u=g.querySelector(".ant-row:first-child input");u&&(u==null||u.focus())}))})}const Et=He({name:"BasicForm",__name:"BasicForm",props:ze,emits:["advanced-change","reset","submit","register","field-value-change"],setup(n,{expose:r,emit:s}){const o=n,h=s,p=We(),l=Ve({}),g=ct(),c=Ve({isAdvanced:!0,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),u=Z({}),w=Z(!1),B=Z(),O=Z(null),d=Z(null),{prefixCls:I}=nt("basic-form"),m=q(()=>_(_({},o),t(B))),A=q(()=>[I,{[`${I}--compact`]:t(m).compact}]),b=q(()=>{const{baseRowStyle:f={},rowProps:$}=t(m);return _({style:f},$)}),k=q(()=>_(_(_({},p),o),t(m))),D=q(()=>{var $;const f=t(O)||t(m).schemas;for(const T of f){const{defaultValue:C,component:ae,componentProps:oe={},isHandleDateDefaultValue:$e=!0}=T;if($e&&C&&ae&&_e.includes(ae)){const Se={schema:T,tableAction:($=o.tableAction)!=null?$:{},formModel:l,formActionType:{}},ie=oe?typeof oe=="function"?oe(Se).valueFormat:oe.valueFormat:null;if(!Array.isArray(C))T.defaultValue=ie?H(C).format(ie):H(C);else{const ge=[];C.forEach(be=>{ge.push(ie?H(be).format(ie):H(be))}),T.defaultValue=ge}}}return t(m).showAdvancedButton?J(f.filter(T=>!le(T.component))):J(f)}),{handleToggleAdvanced:S,fieldsIsAdvancedMap:L}=dt({advanceState:c,emit:h,getProps:m,getSchema:D,formModel:l,defaultValueRef:u}),{handleFormValues:R,initDefault:N}=ut({getProps:m,defaultValueRef:u,getSchema:D,formModel:l});gt({getSchema:D,getProps:m,isInitedDefault:w,formElRef:d});const{handleSubmit:K,setFieldsValue:Y,clearValidate:e,validate:a,validateFields:v,getFieldsValue:i,updateSchema:F,resetSchema:y,appendSchemaByField:j,removeSchemaByField:V,resetFields:te,scrollToField:ne}=mt({emit:h,getProps:m,formModel:l,getSchema:D,defaultValueRef:u,formElRef:d,schemaRef:O,handleFormValues:R});Ze({resetAction:te,submitAction:K}),M(()=>t(m).model,()=>{const{model:f}=t(m);f&&Y(f)},{immediate:!0}),M(()=>o.schemas,f=>{y(f!=null?f:[])}),M(()=>D.value,f=>{ve(()=>{var $;($=g==null?void 0:g.redoModalHeight)==null||$.call(g)}),!t(w)&&f!=null&&f.length&&(N(),w.value=!0)}),M(()=>l,Le(()=>{t(m).submitOnChange&&K()},300),{deep:!0});function P(f){return x(this,null,function*(){B.value=Pe(t(B)||{},f)})}function se(f,$,T){l[f]=$,h("field-value-change",f,$),T&&T.itemProps&&!T.itemProps.autoLink&&v([f]).catch(C=>{})}function E(f){const{autoSubmitOnEnter:$}=t(m);if($&&f.key==="Enter"&&f.target&&f.target instanceof HTMLElement){const T=f.target;T&&T.tagName&&T.tagName.toUpperCase()=="INPUT"&&K()}}const U={getFieldsValue:i,setFieldsValue:Y,resetFields:te,updateSchema:F,resetSchema:y,setProps:P,removeSchemaByField:V,appendSchemaByField:j,clearValidate:e,validateFields:v,validate:a,submit:K,scrollToField:ne},z=q(()=>_(_({},m.value),c));return r(_({},U)),Ye(()=>{N(),h("register",U)}),(f,$)=>(de(),Te(t(rt),Ee(k.value,{class:A.value,ref_key:"formElRef",ref:d,model:l,onKeypress:Ge(E,["enter"])}),{default:re(()=>[Be(t(it),he(me(b.value)),{default:re(()=>[ce(f.$slots,"formHeader"),(de(!0),Xe(qe,null,pe(D.value,T=>(de(),Te(Je,{key:T.field,isAdvanced:t(L)[T.field],tableAction:f.tableAction,formActionType:U,schema:T,formProps:m.value,allDefaultValues:u.value,formModel:l,setFormModel:se},De({_:2},[pe(Object.keys(f.$slots),C=>({name:C,fn:re(ae=>[ce(f.$slots,C,he(me(ae||{})))])}))]),1032,["isAdvanced","tableAction","schema","formProps","allDefaultValues","formModel"]))),128)),Be(Me,Ee(z.value,{onToggleAdvanced:t(S)}),De({_:2},[pe(["resetBefore","submitBefore","advanceBefore","advanceAfter"],T=>({name:T,fn:re(C=>[ce(f.$slots,T,he(me(C||{})))])}))]),1040,["onToggleAdvanced"]),ce(f.$slots,"formFooter")]),_:3},16)]),_:3},16,["class","model"]))}});export{Et as _};