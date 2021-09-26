import{R as e}from"./index.642010f1.js";import{L as t}from"./index.704303b9.js";import{t as a}from"./elements.f945da86.js";import{_ as i,w as r}from"./IconSfc.7d4b9349.js";import{q as l,e as s,h as o,o as n,c as p,n as d,m as c,d as u,g,w as h,F as f,k as v,t as m,a as y,S as z,U as j}from"./vendor.613212a8.js";import{A as k}from"./AppType.5a8a2ee0.js";import{R as x}from"./index.6b98ee33.js";import{u as b,a as L,_ as S,b as _,c as w}from"./en-US.f5da4181.js";import"./shared.6d6b25a1.js";import"./components.7c010433.js";const U=l({name:"VarImage",directives:{Lazy:t,Ripple:e},props:{src:{type:String},fit:{type:String,validator:function(e){return["fill","contain","cover","none","scale-down"].includes(e)},default:"fill"},alt:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:{type:Function},onLoad:{type:Function},onError:{type:Function}},setup:e=>({toSizeUnit:a,handleLoad:t=>{const a=t.currentTarget,{lazy:i,onLoad:r,onError:l}=e;i?("success"===a._lazy.state&&(null==r||r(t)),"error"===a._lazy.state&&(null==l||l(t))):null==r||r(t)},handleError:t=>{const{lazy:a,onError:i}=e;!a&&(null==i||i(t))}})}),E=["alt","lazy-error","lazy-loading"],R=["alt","src"];var C=i(U,[["render",function(e,t,a,i,r,l){const u=s("lazy"),g=s("ripple");return o((n(),p("div",{class:c(["var-image var--box",[e.block?null:"var--inline-block"]]),style:d({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)})},[e.lazy?o((n(),p("img",{key:0,class:"var-image__image",alt:e.alt,"lazy-error":e.error,"lazy-loading":e.loading,style:d({objectFit:e.fit}),onLoad:t[0]||(t[0]=(...t)=>e.handleLoad&&e.handleLoad(...t)),onError:t[1]||(t[1]=(...t)=>e.handleError&&e.handleError(...t)),onClick:t[2]||(t[2]=(...t)=>e.onClick&&e.onClick(...t))},null,44,E)),[[u,e.src]]):(n(),p("img",{key:1,class:"var-image__image",alt:e.alt,style:d({objectFit:e.fit}),src:e.src,onLoad:t[3]||(t[3]=(...t)=>e.handleLoad&&e.handleLoad(...t)),onError:t[4]||(t[4]=(...t)=>e.handleError&&e.handleError(...t)),onClick:t[5]||(t[5]=(...t)=>e.onClick&&e.onClick(...t))},null,44,R))],6)),[[g,{disabled:!e.ripple}]])}]]);C.install=function(e){e.component(C.name,C)};const{add:F,use:N,pack:B,packs:I,merge:M}=b(),A=e=>{w(e),N(e)};L("zh-CN",S),L("en-US",_),F("zh-CN",{basicUsage:"基本使用",fitMode:"填充模式",setRadius:"设置圆角",useRipple:"开启水波",useLazyLoad:"开启懒加载"}),F("en-US",{basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"});const T={name:"ImageExample",components:{[C.name]:C,[x.name]:x,AppType:k},setup:()=>(r(A),{pack:B})},q=e=>(z("data-v-6ef0d0c6"),e=e(),j(),e),V={class:"fit-item"},D=q((()=>y("div",null,"fill",-1))),G={class:"fit-item"},H=q((()=>y("div",null,"cover",-1))),J={class:"fit-item"},K=q((()=>y("div",null,"contain",-1))),O={class:"fit-item"},P=q((()=>y("div",null,"none",-1))),Q={class:"fit-item"},W=q((()=>y("div",null,"scale-down",-1)));var X=i(T,[["render",function(e,t,a,i,r,l){const s=u("app-type"),o=u("var-image"),d=u("var-row");return n(),p(f,null,[g(s,null,{default:h((()=>[v(m(i.pack.basicUsage),1)])),_:1}),g(o,{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),g(s,null,{default:h((()=>[v(m(i.pack.fitMode),1)])),_:1}),g(d,null,{default:h((()=>[y("div",V,[g(o,{width:"85px",height:"85px",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),D]),y("div",G,[g(o,{width:"85px",height:"85px",fit:"cover",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),H]),y("div",J,[g(o,{width:"85px",height:"85px",fit:"contain",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),K]),y("div",O,[g(o,{width:"85px",height:"85px",fit:"none",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),P]),y("div",Q,[g(o,{width:"85px",height:"85px",fit:"scale-down",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),W])])),_:1}),g(s,null,{default:h((()=>[v(m(i.pack.setRadius),1)])),_:1}),g(d,null,{default:h((()=>[g(o,{width:"85px",height:"85px",fit:"cover",radius:10,src:"https://varlet.gitee.io/varlet-ui/cat.jpg",style:{"margin-right":"10px"}}),g(o,{width:"85px",height:"85px",fit:"cover",radius:"50%",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})])),_:1}),g(s,null,{default:h((()=>[v(m(i.pack.useRipple),1)])),_:1}),g(o,{ripple:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),g(s,null,{default:h((()=>[v(m(i.pack.useLazyLoad),1)])),_:1}),g(o,{lazy:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})],64)}],["__scopeId","data-v-6ef0d0c6"]]);export{X as default};
