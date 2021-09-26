import{l as e}from"./elements.f945da86.js";import{q as o,M as a,p as t,r,G as l,d as s,o as n,c,g as m,w as p,F as i,k as d,t as u}from"./vendor.613212a8.js";import{R as y}from"./index.528d06be.js";import{S as f}from"./index.806dc982.js";import{B as v}from"./index.6283e704.js";import{A as g}from"./AppType.5a8a2ee0.js";import{c as h}from"./index.642010f1.js";import{_ as k,w as b,f as C}from"./IconSfc.7d4b9349.js";import{u as j,a as T,_ as V,b as w,c as x}from"./en-US.f5da4181.js";import"./shared.6d6b25a1.js";import"./index.7b1ee4f9.js";import"./provide.23310c81.js";import"./components.7c010433.js";import"./index.4d9296d0.js";const S=o({name:"VarStyleProvider",props:{styleVars:{type:Object,default:()=>({})}},setup:(o,{slots:t})=>()=>{var r;return a("div",{class:"var-style-provider",style:e(o.styleVars)},null==(r=t.default)?void 0:r.call(t))}});function R(o={}){const a=e(o);Object.entries(a).forEach((([e,o])=>document.documentElement.style.setProperty(e,o)))}R.Component=S,S.install=function(e){e.component(S.name,S)},R.install=function(e){e.component(S.name,S)};const{add:_,use:F,pack:U,packs:E,merge:P}=j(),A=e=>{x(e),F(e)};T("zh-CN",V),T("en-US",w),_("zh-CN",{componentCall:"组件调用",functionCall:"函数调用",toggleTheme:"切换样式变量",toggleRootTheme:"切换根节点样式变量"}),_("en-US",{componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"});var z=k({name:"StyleProviderExample",components:{[R.Component.name]:R.Component,[y.name]:y,[f.name]:f,[v.name]:v,AppType:g},setup(){const e=t({score:5,license:!0}),o={"--theme-name":"primary","--rate-primary-color":"var(--color-primary)","--button-primary-color":"var(--color-primary)","--switch-handle-active-background":"var(--color-primary)","--switch-track-active-background":"var(--color-primary)"},a={"--theme-name":"success","--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},s=r(o);b(A);const n=h.touchmoveForbid;return C((e=>{"pc"===e&&(h.touchmoveForbid=!1)})),l((()=>{h.touchmoveForbid=n})),l((()=>{R({"--color-primary":"#3a7afe"})})),{pack:U,state:e,styleVars:s,toggleTheme:()=>{s.value="primary"===s.value["--theme-name"]?a:o},toggleRootTheme:()=>{R({"--color-primary":"#3a7afe"===window.getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim()?"#000":"#3a7afe"})}}}},[["render",function(e,o,a,t,r,l){const y=s("app-type"),f=s("var-rate"),v=s("var-switch"),g=s("var-button"),h=s("var-style-provider");return n(),c(i,null,[m(y,null,{default:p((()=>[d(u(t.pack.componentCall),1)])),_:1}),m(h,{"style-vars":t.styleVars},{default:p((()=>[m(f,{modelValue:t.state.score,"onUpdate:modelValue":o[0]||(o[0]=e=>t.state.score=e)},null,8,["modelValue"]),m(v,{modelValue:t.state.license,"onUpdate:modelValue":o[1]||(o[1]=e=>t.state.license=e)},null,8,["modelValue"]),m(g,{style:{"margin-top":"10px"},type:"primary",block:"",onClick:t.toggleTheme},{default:p((()=>[d(u(t.pack.toggleTheme),1)])),_:1},8,["onClick"])])),_:1},8,["style-vars"]),m(y,null,{default:p((()=>[d(u(t.pack.functionCall),1)])),_:1}),m(g,{type:"primary",block:"",onClick:t.toggleRootTheme},{default:p((()=>[d(u(t.pack.toggleRootTheme),1)])),_:1},8,["onClick"])],64)}]]);export{z as default};
