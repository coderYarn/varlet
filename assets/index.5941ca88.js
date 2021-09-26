import{I as e}from"./index.7b1ee4f9.js";import{M as l}from"./index.56d9b85d.js";import{C as a}from"./index.617a1bda.js";import{F as o,u as s}from"./provide.23310c81.js";import{q as n,r,b as t,y as d,d as i,o as u,c,a as v,m as p,O as m,g as f,w as b,n as y,F as h,i as C,j as g,k as _,t as F,V as k,f as V,z as w}from"./vendor.613212a8.js";import{l as x,b as S}from"./shared.6d6b25a1.js";import{b as j}from"./components.7c010433.js";import{u as B}from"./index.dc76ecd9.js";import{d as M}from"./elements.f945da86.js";import{_ as D}from"./IconSfc.7d4b9349.js";const U={modelValue:{default:void 0},placeholder:{type:String},multiple:{type:Boolean,default:!1},chip:{type:Boolean,default:!1},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},separator:{type:String,default:","},textAlign:{type:String,default:"left",validator:function(e){return["left","right","center"].includes(e)}},validateTrigger:{type:Array,default:()=>["onChange","onClear","onClose"]},rules:{type:Array},onFocus:{type:Function},onBlur:{type:Function},onClick:{type:Function},onClear:{type:Function},onClose:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const A=n({name:"VarSelect",components:{[e.name]:e,[l.name]:l,[a.name]:a,[o.name]:o},props:U,setup(e){const l=r(null),a=r(!1),o=t((()=>e.multiple)),n=t((()=>e.focusColor)),i=r(""),u=r([]),c=t((()=>l.value&&window.getComputedStyle(l.value).width||"0px")),v=t((()=>{const e=l.value&&window.getComputedStyle(l.value).paddingTop||"0px";return 1.5*M(e)})),{bindForm:p,form:m}=s(),{length:f,options:b,bindOptions:y}=B(),{errorMessage:h,validateWithTrigger:C,validate:g,resetValidation:_}=j(),F=l=>{w((()=>{const{validateTrigger:a,rules:o,modelValue:s}=e;C(a,l,o,s)}))},k=({value:e,label:l})=>null!=e.value?e.value:l.value,V=e=>{let l=b.find((({value:l})=>l.value===e));return l||(l=b.find((({label:l})=>l.value===e))),l.label.value},D=()=>{const{multiple:l,modelValue:a}=e;if(l){const e=a;b.forEach((l=>l.sync(e.includes(k(l)))))}else b.forEach((e=>e.sync(a===k(e))));(()=>{const{multiple:l,modelValue:a}=e;if(l){const e=a;u.value=e.map(V)}l||x(a)||(i.value=V(a)),!l&&x(a)&&(i.value="")})()},U=()=>g(e.rules,e.modelValue),A=()=>{var l;null==(l=e["onUpdate:modelValue"])||l.call(e,e.multiple?[]:void 0),_()};d((()=>e.multiple),(()=>{const{multiple:l,modelValue:a}=e;if(l&&!S(a))throw Error("The modelValue must be an array when multiple is true")})),d((()=>e.modelValue),D,{deep:!0}),d((()=>f.value),D);const E={wrapWidth:c,multiple:o,focusColor:n,onSelect:l=>{var o;const{disabled:s,readonly:n,multiple:r,onChange:t}=e;if((null==m?void 0:m.disabled.value)||(null==m?void 0:m.readonly.value)||s||n)return;const d=r?b.filter((({selected:e})=>e.value)).map(k):k(l);null==(o=e["onUpdate:modelValue"])||o.call(e,d),null==t||t(d),F("onChange"),!r&&(a.value=!1)},reset:A,validate:U,resetValidation:_};return y(E),null==p||p(E),{wrapEl:l,offsetY:v,isFocus:a,errorMessage:h,formDisabled:null==m?void 0:m.disabled,label:i,labels:u,computePlaceholderState:()=>{const{hint:l,modelValue:o}=e;return l||x(o)?!l||x(o)&&!a.value?void 0:"var-select--placeholder-hint":"var-select--placeholder-hidden"},handleFocus:l=>{const{disabled:o,readonly:s,onFocus:n}=e;(null==m?void 0:m.disabled.value)||(null==m?void 0:m.readonly.value)||o||s||(a.value=!0,null==n||n(l),F("onFocus"))},handleBlur:l=>{const{disabled:a,readonly:o,onBlur:s}=e;(null==m?void 0:m.disabled.value)||(null==m?void 0:m.readonly.value)||a||o||(null==s||s(l),F("onBlur"))},handleClear:()=>{var l;const{disabled:a,readonly:o,multiple:s,clearable:n,onClear:r}=e;if((null==m?void 0:m.disabled.value)||(null==m?void 0:m.readonly.value)||a||o||!n)return;const t=s?[]:void 0;null==(l=e["onUpdate:modelValue"])||l.call(e,t),null==r||r(t),F("onClear")},handleClick:l=>{const{disabled:a,onClick:o}=e;(null==m?void 0:m.disabled.value)||a||(null==o||o(l),F("onClick"))},handleClose:l=>{var a;const{disabled:o,readonly:s,modelValue:n,onClose:r}=e;if((null==m?void 0:m.disabled.value)||(null==m?void 0:m.readonly.value)||o||s)return;const t=n,d=b.find((({label:e})=>e.value===l)),i=t.filter((e=>{var l;return e!==(null!=(l=d.value.value)?l:d.label.value)}));null==(a=e["onUpdate:modelValue"])||a.call(e,i),null==r||r(i),F("onClose")},reset:A,validate:U,resetValidation:_,focus:()=>{a.value=!0},blur:()=>{a.value=!1}}}}),E={key:0},T={key:0,class:"var-select__chips"},$={key:1,class:"var-select__values"},z={key:1},I={class:"var-select__scroller"};var O=D(A,[["render",function(e,l,a,o,s,n){const r=i("var-chip"),t=i("var-icon"),d=i("var-menu"),w=i("var-form-details");return u(),c("div",{class:p(["var-select var--box",[e.formDisabled||e.disabled?"var-select--disabled":null]]),onClick:l[3]||(l[3]=(...l)=>e.handleClick&&e.handleClick(...l))},[v("div",{class:p(["var-select__controller",[e.isFocus?"var-select--focus":null,e.errorMessage?"var-select--error":null,e.formDisabled||e.disabled?"var-select--disabled":null]]),style:y({color:e.errorMessage?null:e.isFocus?e.focusColor:e.blurColor})},[v("div",{class:p(["var-select__icon",[e.hint?null:"var-select--non-hint"]])},[m(e.$slots,"prepend-icon")],2),f(d,{class:"var-select__menu","var-select-cover":"","offset-y":e.offsetY,show:e.isFocus,"onUpdate:show":l[2]||(l[2]=l=>e.isFocus=l),onClose:e.handleBlur},{menu:b((()=>[v("div",I,[m(e.$slots,"default")])])),default:b((()=>[v("div",{class:p(["var-select__wrap",[e.hint?null:"var-select--non-hint"]]),ref:"wrapEl",onClick:l[1]||(l[1]=(...l)=>e.handleFocus&&e.handleFocus(...l))},[v("div",{class:p(["var-select__select",[e.errorMessage?"var-select--error":null,e.formDisabled||e.disabled?"var-select--disabled":null]]),style:y({textAlign:e.textAlign,color:e.textColor})},[e.multiple?(u(),c("div",E,[e.chip?(u(),c("div",T,[(u(!0),c(h,null,C(e.labels,(a=>(u(),g(r,{class:"var-select__chip","var-select-cover":"",closable:"",type:e.errorMessage?"danger":null,key:a,onClick:l[0]||(l[0]=k((()=>{}),["stop"])),onClose:l=>e.handleClose(a)},{default:b((()=>[_(F(a),1)])),_:2},1032,["type","onClose"])))),128))])):(u(),c("div",$,F(e.labels.join(e.separator)),1))])):(u(),c("span",z,F(e.label),1)),f(t,{class:p(["var-select__arrow",[e.isFocus?"var-select--arrow-rotate":null]]),"var-select-cover":"",name:"menu-down",transition:300},null,8,["class"])],6),v("label",{class:p(["var-select__placeholder",[e.computePlaceholderState(),e.hint?null:"var-select--placeholder-non-hint"]])},F(e.placeholder),3)],2)])),_:3},8,["offset-y","show","onClose"]),v("div",{class:p(["var-select__icon",[e.hint?null:"var-select--non-hint"]])},[m(e.$slots,"append-icon",{},(()=>[e.clearable?(u(),g(t,{key:0,class:"var-select__clear-icon",name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["onClick"])):V("v-if",!0)]))],2)],6),e.line?(u(),c("div",{key:0,class:p(["var-select__line",[e.formDisabled||e.disabled?"var-select--line-disabled":null,e.errorMessage?"var-select--line-error":null]]),style:y({background:e.errorMessage?null:e.blurColor})},[v("div",{class:p(["var-select__dot",[e.isFocus?"var-select--spread":null,e.formDisabled||e.disabled?"var-select--line-disabled":null,e.errorMessage?"var-select--line-error":null]]),style:y({background:e.errorMessage?null:e.focusColor})},null,6)],6)):V("v-if",!0),f(w,{"error-message":e.errorMessage},null,8,["error-message"])],2)}]]);O.install=function(e){e.component(O.name,O)};export{O as S};
