var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(a,l,o)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o;import{I as p}from"./index.87706d5b.js";import{B as r}from"./index.7650b131.js";import{I as c}from"./index.565310a0.js";import{A as s}from"./AppType.08a99ced.js";import{u as t,a as n,_ as u,b as m,c as i}from"./en-US.97fca002.js";import{_ as h,w as v}from"./IconSfc.22678cb1.js";import{p as b,a2 as f,d as V,o as x,c as k,h as y,w as g,F as j,S as U,U as _,l as I,t as M,a as T}from"./vendor.85536c59.js";import"./provide.04a164f5.js";import"./components.0481fe69.js";import"./shared.6d6b25a1.js";import"./index.7f242a26.js";import"./index.6e856e8f.js";import"./elements.f945da86.js";const{add:O,use:S,pack:w,packs:P,merge:C}=t();n("zh-CN",u),n("en-US",m),O("zh-CN",{basicUsage:"基本使用",plainMode:"朴素模式",textarea:"文本域",maxlength:"最大长度",disabled:"禁用",readonly:"只读",clearable:"可清除",displayIcon:"显示图标",validate:"字段校验",placeholder:"请输入文本",maxMessage:"文本长度必须大于6",clearableText:"可清除文本"}),O("en-US",{basicUsage:"Basic Usage",plainMode:"Plain Mode",textarea:"Textarea",maxlength:"Maxlength",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",displayIcon:"Display Icon",validate:"Validate",placeholder:"Please enter text",maxMessage:"Text length must be greater than 6",clearableText:"Clearable Text"});const A={name:"InputExample",components:{[p.name]:p,[r.name]:r,[c.name]:c,AppType:s},setup(){const e=b({value:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:""});return v((a=>{(e=>{i(e),S(e)})(a),e.value5=w.value.clearableText})),((e,p)=>{for(var r in p||(p={}))l.call(p,r)&&d(e,r,p[r]);if(a)for(var r of a(p))o.call(p,r)&&d(e,r,p[r]);return e})({pack:w},f(e))}},z=(e=>(U("data-v-0c54bd30"),e=e(),_(),e))((()=>T("div",{style:{height:"40px"}},null,-1)));var B=h(A,[["render",function(e,a,l,o,d,p){const r=V("app-type"),c=V("var-input"),s=V("var-icon");return x(),k(j,null,[y(r,{class:"pb"},{default:g((()=>[I(M(o.pack.basicUsage),1)])),_:1}),y(c,{placeholder:o.pack.placeholder,modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=a=>e.value=a)},null,8,["placeholder","modelValue"]),y(r,{class:"pb"},{default:g((()=>[I(M(o.pack.plainMode),1)])),_:1}),y(c,{hint:!1,line:!1,placeholder:o.pack.placeholder,modelValue:e.value7,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value7=a)},null,8,["placeholder","modelValue"]),y(r,{class:"pb"},{default:g((()=>[I(M(o.pack.textarea),1)])),_:1}),y(c,{placeholder:o.pack.placeholder,textarea:"",modelValue:e.value2,"onUpdate:modelValue":a[2]||(a[2]=a=>e.value2=a)},null,8,["placeholder","modelValue"]),y(r,{class:"pb"},{default:g((()=>[I(M(o.pack.maxlength),1)])),_:1}),y(c,{placeholder:o.pack.placeholder,maxlength:10,modelValue:e.value8,"onUpdate:modelValue":a[3]||(a[3]=a=>e.value8=a)},null,8,["placeholder","modelValue"]),y(r,{class:"pb"},{default:g((()=>[I(M(o.pack.disabled),1)])),_:1}),y(c,{placeholder:o.pack.placeholder,disabled:"",modelValue:e.value3,"onUpdate:modelValue":a[4]||(a[4]=a=>e.value3=a)},null,8,["placeholder","modelValue"]),y(r,{class:"pb"},{default:g((()=>[I(M(o.pack.readonly),1)])),_:1}),y(c,{placeholder:o.pack.placeholder,readonly:"",modelValue:e.value4,"onUpdate:modelValue":a[5]||(a[5]=a=>e.value4=a)},null,8,["placeholder","modelValue"]),y(r,{class:"pb"},{default:g((()=>[I(M(o.pack.clearable),1)])),_:1}),y(c,{placeholder:o.pack.placeholder,clearable:"",modelValue:e.value5,"onUpdate:modelValue":a[6]||(a[6]=a=>e.value5=a)},null,8,["placeholder","modelValue"]),y(r,{class:"pb"},{default:g((()=>[I(M(o.pack.displayIcon),1)])),_:1}),y(c,{placeholder:o.pack.placeholder,modelValue:e.value6,"onUpdate:modelValue":a[7]||(a[7]=a=>e.value6=a)},{"prepend-icon":g((()=>[y(s,{class:"prepend-icon",name:"plus"})])),"append-icon":g((()=>[y(s,{class:"append-icon",name:"minus"})])),_:1},8,["placeholder","modelValue"]),y(r,null,{default:g((()=>[I(M(o.pack.validate),1)])),_:1}),y(c,{placeholder:o.pack.placeholder,rules:[e=>e.length>6||o.pack.maxMessage],modelValue:e.value9,"onUpdate:modelValue":a[8]||(a[8]=a=>e.value9=a)},null,8,["placeholder","rules","modelValue"]),z],64)}],["__scopeId","data-v-0c54bd30"]]);export{B as default};
