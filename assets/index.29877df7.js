import{_ as t}from"./IconSfc.7d4b9349.js";import{q as a,o as e,c as o,O as r,f as s,a as i,m as l,n,k as p,t as c}from"./vendor.613212a8.js";const f=a({name:"VarAppBar",props:{color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:function(t){return["left","center","right"].includes(t)}},elevation:{type:Boolean,default:!0}}}),v={key:0,class:"var-app-bar__left"},d={key:1,class:"var-app-bar__right"};var g=t(f,[["render",function(t,a,f,g,u,y){return e(),o("div",{class:l(["var-app-bar",{"var-elevation--3":t.elevation}]),style:n({background:t.color,color:t.textColor})},[t.$slots.left?(e(),o("div",v,[r(t.$slots,"left")])):s("v-if",!0),i("div",{class:l(["var-app-bar__title",`var-app-bar__title-${t.titlePosition}`]),style:n({paddingLeft:t.$slots.left&&"center"!==t.titlePosition?"30px":"10px",paddingRight:t.$slots.right&&"center"!==t.titlePosition?"30px":"10px"})},[r(t.$slots,"default",{},(()=>[p(c(t.title),1)]))],6),t.$slots.right?(e(),o("div",d,[r(t.$slots,"right")])):s("v-if",!0)],6)}]]);g.install=function(t){t.component(g.name,g)};export{g as A};
