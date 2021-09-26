import{B as t}from"./index.7650b131.js";import{I as a}from"./index.565310a0.js";import{A as o}from"./AppType.08a99ced.js";import{S as e}from"./index.9bc36046.js";import{c as n}from"./index.7f242a26.js";import{u,a as l,_ as c,b as s,c as r}from"./en-US.97fca002.js";import{_ as d,w as i,f as p}from"./IconSfc.22678cb1.js";import{G as f,d as m,o as B,c as k,h as g,w as _,F as y,l as S,t as b}from"./vendor.85536c59.js";import"./index.6e856e8f.js";import"./components.0481fe69.js";import"./shared.6d6b25a1.js";import"./elements.f945da86.js";import"./zIndex.ff962109.js";import"./lock.65f2d11c.js";const{add:h,use:x,pack:C,packs:T,merge:v}=u(),j=t=>{r(t),x(t)};l("zh-CN",c),l("en-US",s),h("zh-CN",{themeColorButton:"主题色按钮",defaultButton:"默认按钮",primaryButton:"主要按钮",infoButton:"信息按钮",successButton:"成功按钮",warningButton:"警告按钮",dangerButton:"危险按钮",textButton:"文字按钮",plainTextButton:"纯文字按钮",outlineButton:"外边框按钮",disabledStatus:"禁用状态",loadingStatus:"加载状态",buttonSize:"按钮尺寸",normalButton:"常规按钮",smallButton:"小型按钮",miniButton:"迷你按钮",largeButton:"大型按钮",blockButton:"块级按钮",customColor:"自定义颜色",backgroundTextColor:"背景/文字",linearGradientColor:"使用渐变",roundButton:"圆形按钮",event:"注册事件",click:"点击",touchstart:"触摸",clickSuccess:"点击成功",touchstartSuccess:"触摸成功"}),h("en-US",{themeColorButton:"Theme Color Button",defaultButton:"Default Button",primaryButton:"Primary Button",infoButton:"Info Button",successButton:"Success Button",warningButton:"Warning Button",dangerButton:"Danger Button",textButton:"Text Button",plainTextButton:"Plain Text Button",outlineButton:"Outline Button",disabledStatus:"Disabled Status",loadingStatus:"Loading Status",buttonSize:"Button Size",normalButton:"Normal Button",smallButton:"Small Button",miniButton:"Mini Button",largeButton:"Large Button",blockButton:"Block Button",customColor:"Custom Color",textColor:"Text Color",backgroundTextColor:"Background/Text Color",linearGradientColor:"LinearGradient Color",roundButton:"Round Button",event:"Event",click:"Click",touchstart:"Touchstart",clickSuccess:"Click Success",touchstartSuccess:"Touchstart Success"});var w=d({components:{[t.name]:t,[a.name]:a,AppType:o},setup(){i(j);const t=n.touchmoveForbid;return p((t=>{"pc"===t&&(n.touchmoveForbid=!1)})),f((()=>{n.touchmoveForbid=t})),{pack:C,handleClick:()=>{e.success(C.value.clickSuccess)},handleTouchstart:()=>{e.success(C.value.touchstartSuccess)}}}},[["render",function(t,a,o,e,n,u){const l=m("app-type"),c=m("var-button"),s=m("var-icon");return B(),k(y,null,[g(l,null,{default:_((()=>[S(b(e.pack.themeColorButton),1)])),_:1}),g(c,null,{default:_((()=>[S(b(e.pack.defaultButton),1)])),_:1}),g(c,{type:"primary"},{default:_((()=>[S(b(e.pack.primaryButton),1)])),_:1}),g(c,{type:"info"},{default:_((()=>[S(b(e.pack.infoButton),1)])),_:1}),g(c,{type:"success"},{default:_((()=>[S(b(e.pack.successButton),1)])),_:1}),g(c,{type:"warning"},{default:_((()=>[S(b(e.pack.warningButton),1)])),_:1}),g(c,{type:"danger"},{default:_((()=>[S(b(e.pack.dangerButton),1)])),_:1}),g(l,null,{default:_((()=>[S(b(e.pack.textButton),1)])),_:1}),g(c,{text:"",outline:"",type:"primary"},{default:_((()=>[S(b(e.pack.outlineButton),1)])),_:1}),g(c,{text:"",type:"primary"},{default:_((()=>[S(b(e.pack.plainTextButton),1)])),_:1}),g(l,null,{default:_((()=>[S(b(e.pack.disabledStatus),1)])),_:1}),g(c,{disabled:""},{default:_((()=>[S(b(e.pack.disabledStatus),1)])),_:1}),g(c,{disabled:"",text:"",outline:""},{default:_((()=>[S(b(e.pack.disabledStatus),1)])),_:1}),g(c,{disabled:"",text:""},{default:_((()=>[S(b(e.pack.disabledStatus),1)])),_:1}),g(l,null,{default:_((()=>[S(b(e.pack.loadingStatus),1)])),_:1}),g(c,{loading:"",type:"primary"},{default:_((()=>[S(b(e.pack.loadingStatus),1)])),_:1}),g(c,{loading:"",type:"info","loading-type":"rect"},{default:_((()=>[S(b(e.pack.loadingStatus),1)])),_:1}),g(c,{loading:"",type:"success","loading-type":"disappear"},{default:_((()=>[S(b(e.pack.loadingStatus),1)])),_:1}),g(c,{loading:"",type:"danger","loading-type":"cube"},{default:_((()=>[S(b(e.pack.loadingStatus),1)])),_:1}),g(c,{loading:"",type:"warning","loading-type":"wave"},{default:_((()=>[S(b(e.pack.loadingStatus),1)])),_:1}),g(l,null,{default:_((()=>[S(b(e.pack.buttonSize),1)])),_:1}),g(c,{type:"primary"},{default:_((()=>[S(b(e.pack.normalButton),1)])),_:1}),g(c,{type:"success",size:"small"},{default:_((()=>[S(b(e.pack.smallButton),1)])),_:1}),g(c,{type:"warning",size:"mini"},{default:_((()=>[S(b(e.pack.miniButton),1)])),_:1}),g(c,{type:"danger",size:"large"},{default:_((()=>[S(b(e.pack.largeButton),1)])),_:1}),g(l,null,{default:_((()=>[S(b(e.pack.blockButton),1)])),_:1}),g(c,{block:"",type:"primary"},{default:_((()=>[S(b(e.pack.blockButton),1)])),_:1}),g(l,null,{default:_((()=>[S(b(e.pack.customColor),1)])),_:1}),g(c,{color:"#69dbaa","text-color":"#eee"},{default:_((()=>[S(b(e.pack.backgroundTextColor),1)])),_:1}),g(c,{color:"linear-gradient(to right, #69dbaa, #3a7afe)","text-color":"#fff"},{default:_((()=>[S(b(e.pack.linearGradientColor),1)])),_:1}),g(l,null,{default:_((()=>[S(b(e.pack.roundButton),1)])),_:1}),g(c,{type:"primary",round:""},{default:_((()=>[g(s,{name:"plus"})])),_:1}),g(c,{type:"info",round:""},{default:_((()=>[g(s,{name:"information"})])),_:1}),g(c,{type:"success",round:""},{default:_((()=>[g(s,{name:"check"})])),_:1}),g(c,{type:"warning",round:""},{default:_((()=>[g(s,{name:"warning"})])),_:1}),g(c,{type:"danger",round:""},{default:_((()=>[g(s,{name:"window-close"})])),_:1}),g(l,null,{default:_((()=>[S(b(e.pack.event),1)])),_:1}),g(c,{type:"success",onClick:e.handleClick},{default:_((()=>[S(b(e.pack.click),1)])),_:1},8,["onClick"]),g(c,{type:"success",onTouchstart:e.handleTouchstart},{default:_((()=>[S(b(e.pack.touchstart),1)])),_:1},8,["onTouchstart"])],64)}],["__scopeId","data-v-2bf140fc"]]);export{w as default};
