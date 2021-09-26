import{t as e}from"./shared.6d6b25a1.js";import{_ as a,w as r}from"./IconSfc.7d4b9349.js";import{q as l,b as s,o as t,c,a as i,n as o,f as n,m as d,P as u,O as p,k as v,t as f,r as k,x as g,G as h,d as m,g as y,w as _,S as b,U as w}from"./vendor.613212a8.js";import{A as $}from"./AppType.5a8a2ee0.js";import{u as P,a as x,_ as z,b as S,c as B}from"./en-US.f5da4181.js";const U=l({name:"VarProgress",inheritAttrs:!1,props:{mode:{type:String,default:"linear",validator:function(e){return["linear","circle"].includes(e)}},lineWidth:{type:[Number,String],default:4},color:{type:String},trackColor:{type:String},ripple:{type:Boolean,default:!1},value:{type:[Number,String],default:0},label:{type:Boolean,default:!1},size:{type:Number,default:40},rotate:{type:Number,default:0},track:{type:Boolean,default:!0}},setup:a=>({linearProps:s((()=>{const r=e(a.value);return{width:`${r>100?100:r}%`,roundValue:`${r>100?100:Math.round(r)}%`}})),circleProps:s((()=>{const{size:r,lineWidth:l,value:s}=a,t=`0 0 ${r} ${r}`,c=e(s)>100?100:Math.round(e(s)),i=(r-e(l))/2,o=2*Math.PI*i;return{viewBox:t,radius:i,strokeDasharray:`${c/100*o}, ${o}`,perimeter:o,roundValue:`${c}%`}}))})}),C={class:"var-progress"},N={key:0,class:"var-progress-linear"},T=["viewBox"],j=["cx","cy","r","stroke-width"],I=["cx","cy","r","stroke-width"];var V=a(U,[["render",function(e,a,r,l,s,k){return t(),c("div",C,["linear"===e.mode?(t(),c("div",N,[i("div",u({class:"var-progress-linear__block",style:{height:`${e.lineWidth}px`}},e.$attrs),[e.track?(t(),c("div",{key:0,class:"var-progress-linear__background",style:o({background:e.trackColor})},null,4)):n("v-if",!0),i("div",{class:d("var-progress-linear__certain"+(e.ripple?" var-progress-linear__ripple":"")),style:o({background:e.color,width:e.linearProps.width})},null,6)],16),e.label?(t(),c("div",u({key:0,class:"var-progress-linear__label"},e.$attrs),[p(e.$slots,"default",{},(()=>[v(f(e.linearProps.roundValue),1)]))],16)):n("v-if",!0)])):n("v-if",!0),"circle"===e.mode?(t(),c("div",{key:1,class:"var-progress-circle",style:o({width:`${e.size}px`,height:`${e.size}px`})},[(t(),c("svg",{class:"var-progress-circle__svg",style:o({transform:`rotate(${e.rotate-90}deg)`}),viewBox:e.circleProps.viewBox},[e.track?(t(),c("circle",{key:0,class:"var-progress-circle__background",cx:e.size/2,cy:e.size/2,r:e.circleProps.radius,fill:"transparent","stroke-width":e.lineWidth,style:o({strokeDasharray:e.circleProps.perimeter,stroke:e.trackColor})},null,12,j)):n("v-if",!0),i("circle",{class:"var-progress-circle__certain",cx:e.size/2,cy:e.size/2,r:e.circleProps.radius,fill:"transparent","stroke-width":e.lineWidth,style:o({strokeDasharray:e.circleProps.strokeDasharray,stroke:e.color})},null,12,I)],12,T)),e.label?(t(),c("div",u({key:0,class:"var-progress-circle__label"},e.$attrs),[p(e.$slots,"default",{},(()=>[v(f(e.circleProps.roundValue),1)]))],16)):n("v-if",!0)],4)):n("v-if",!0)])}]]);V.install=function(e){e.component(V.name,V)};const{add:W,use:A,pack:D,packs:L,merge:M}=P(),q=e=>{B(e),A(e)};x("zh-CN",z),x("en-US",S),W("zh-CN",{circle:"环形进度条",style:"自定义样式",basicUsage:"基本使用",showLabel:"显示标签",hideTrack:"隐藏轨道"}),W("en-US",{circle:"Circle Progress",basicUsage:"Basic Usage",style:"Custom Style",showLabel:"Show Label",hideTrack:"Hide Track"});const E={name:"ProgressExample",components:{[V.name]:V,AppType:$},setup(){const e=k(0),a=k(0);return g((()=>{a.value=window.setInterval((()=>{e.value>=100?e.value=0:e.value+=20}),1e3)})),r(q),h((()=>{window.clearInterval(a.value)})),{value:e,pack:D}}},G=e=>(b("data-v-bc1075e6"),e=e(),w(),e),H={class:"progress-demo"},O=G((()=>i("div",{class:"space"},null,-1))),F={class:"progress-demo__basic"},J={class:"progress-demo__label"},K=v("success"),Q={class:"progress-demo__style"},R={class:"progress-demo__circle"},X=G((()=>i("div",{class:"space"},null,-1))),Y=G((()=>i("div",{class:"space"},null,-1))),Z={class:"progress-demo__circle"};var ee=a(E,[["render",function(e,a,r,l,s,o){const n=m("app-type"),d=m("var-progress");return t(),c("div",H,[O,i("div",F,[y(n,null,{default:_((()=>[v(f(l.pack.basicUsage),1)])),_:1}),y(d,{value:20,track:!1}),y(d,{value:l.value,track:!1},null,8,["value"]),y(d,{value:100,track:!1})]),i("div",J,[y(n,null,{default:_((()=>[v(f(l.pack.showLabel),1)])),_:1}),y(d,{value:30,label:""}),y(d,{value:l.value,label:""},null,8,["value"]),y(d,{value:100,label:""},{default:_((()=>[K])),_:1})]),i("div",Q,[y(n,null,{default:_((()=>[v(f(l.pack.style),1)])),_:1}),y(d,{value:30,"line-width":"8",color:"#ff9f00"}),y(d,{value:60,"line-width":"8",color:"#ff9f00","track-color":"#f5cb90"}),y(d,{value:80,ripple:"","line-width":"8",color:"#ff9f00","track-color":"#f5cb90"})]),y(n,null,{default:_((()=>[v(f(l.pack.circle),1)])),_:1}),i("div",R,[y(d,{mode:"circle",value:30,"line-width":"5",size:56}),X,y(d,{mode:"circle",label:"",value:l.value,"line-width":"5",size:56},null,8,["value"]),Y,y(d,{mode:"circle",label:"",value:100,"line-width":"5",size:56})]),y(n,null,{default:_((()=>[v(f(l.pack.hideTrack),1)])),_:1}),i("div",Z,[y(d,{mode:"circle",value:50,size:56,track:!1})])])}],["__scopeId","data-v-bc1075e6"]]);export{ee as default};
