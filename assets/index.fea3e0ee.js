import{d as e,h as t}from"./elements.f945da86.js";import{t as l}from"./shared.6d6b25a1.js";import{_ as o}from"./IconSfc.7d4b9349.js";import{q as a,r as d,b as n,y as i,H as s,I as r,x as u,G as f,o as p,c as x,a as c,O as v,n as b,m}from"./vendor.613212a8.js";const h={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onScroll:{type:Function}};var w=o(a({name:"VarSticky",props:h,setup(o){const a=d(null),p=d(null),x=d(!1),c=d("0px"),v=d("0px"),b=d("auto"),m=d("auto"),h=d("auto"),w=d("auto"),g=n((()=>!o.disabled&&o.cssMode)),y=n((()=>!o.disabled&&x.value)),M=n((()=>e(o.offsetTop)));let S=window;const F=()=>{const{onScroll:e,cssMode:t,disabled:l}=o;if(l)return;let d=0;if(S!==window){const{top:e}=S.getBoundingClientRect();d=e}const n=p.value,i=a.value,{top:s,left:r}=i.getBoundingClientRect(),u=s-d;u<=M.value?(t||(b.value=`${i.offsetWidth}px`,m.value=`${i.offsetHeight}px`,c.value=`${d+M.value}px`,v.value=`${r}px`,h.value=`${n.offsetWidth}px`,w.value=`${n.offsetHeight}px`,x.value=!0),null==e||e(M.value,!0)):(x.value=!1,null==e||e(u,!1))},W=()=>{S=t(a.value),S!==window&&S.addEventListener("scroll",F),window.addEventListener("scroll",F),F()},E=()=>{S!==window&&S.removeEventListener("scroll",F),window.removeEventListener("scroll",F)};return i((()=>o.disabled),F),s(W),r(E),u(W),f(E),{stickyEl:a,wrapperEl:p,isFixed:x,offsetTop:M,fixedTop:c,fixedLeft:v,fixedWidth:b,fixedHeight:m,fixedWrapperWidth:h,fixedWrapperHeight:w,enableCSSMode:g,enableFixedMode:y,toNumber:l}}}),[["render",function(e,t,l,o,a,d){return p(),x("div",{class:m(["var-sticky",[e.enableCSSMode?"var-sticky--css-mode":null]]),ref:"stickyEl",style:b({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?`${e.offsetTop}px`:null,width:e.enableFixedMode?e.fixedWidth:null,height:e.enableFixedMode?e.fixedHeight:null})},[c("div",{class:"var-sticky__wrapper",ref:"wrapperEl",style:b({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":null,width:e.enableFixedMode?e.fixedWrapperWidth:null,height:e.enableFixedMode?e.fixedWrapperHeight:null,left:e.enableFixedMode?e.fixedLeft:null,top:e.enableFixedMode?e.fixedTop:null})},[v(e.$slots,"default")],4)],6)}]]);w.install=function(e){e.component(w.name,w)};export{w as S,h as p};
