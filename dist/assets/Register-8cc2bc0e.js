import{d as S,s as N,m as h,q as E,v as I,o as d,b as r,e,w as i,x as u,u as a,C as p,y as V,n as $,F as B,r as R,g as U,t as C,A as D,B as F}from"./index-27d7181d.js";import{d as L}from"./data-84f01471.js";import{u as M}from"./steps-87d8fb35.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const n=c=>(D("data-v-b4386a5d"),c=c(),F(),c),T={class:"step-5 step"},j=n(()=>e("h3",null,"Let's kick off your project!",-1)),q={class:"row"},z={class:"col-md-6 col-xs-12"},A={class:"form-group"},P=n(()=>e("label",{for:"first_name",class:"pull-left"},"First Name",-1)),G={class:"col-md-6 col-xs-12"},H={class:"form-group"},J=n(()=>e("label",{for:"last_name",class:"pull-left"},"Last Name",-1)),K={class:"row"},Q={class:"col-md-6 col-xs-12"},W={class:"form-group"},X=n(()=>e("label",{for:"email",class:"pull-left"},"Company email",-1)),Y={class:"col-md-6 col-xs-12"},Z={class:"form-group"},ee=n(()=>e("label",{for:"number",class:"pull-left"},"Phone Number (Optional)",-1)),se={class:"d-flex"},oe={class:"country-select"},te=["src","srcset"],le={key:0,class:"option d-flex flex-column"},ae=["onClick"],ne=["src","srcset"],ce={class:"country-name"},de={class:"country-dial"},re=S({__name:"Register",setup(c){const k=M(),{firstName:_,lastName:m,email:f,phone:v,dialCode:w}=N(k),t=h(L[0]);w.value=t.value.dial_code;const l=h(!1),g=h(null),y=()=>{l.value=!1};E(()=>{window.addEventListener("click",y)}),I(()=>{window.removeEventListener("click",y)});const b=x=>{var o;t.value=x,w.value=t.value.dial_code,(o=g.value)==null||o.focus()};return(x,o)=>(d(),r("form",T,[j,e("div",q,[e("div",z,[e("div",A,[P,i(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>p(_)?_.value=s:null),type:"text",class:"form-control",placeholder:"Enter your First name",name:"first_name"},null,512),[[u,a(_)]])])]),e("div",G,[e("div",H,[J,i(e("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>p(m)?m.value=s:null),type:"text",class:"form-control",placeholder:"Enter your Last name",name:"first_name"},null,512),[[u,a(m)]])])])]),e("div",K,[e("div",Q,[e("div",W,[X,i(e("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>p(f)?f.value=s:null),type:"email",class:"form-control",placeholder:"Enter your company email",name:"email"},null,512),[[u,a(f)]])])]),e("div",Y,[e("div",Z,[ee,e("div",se,[e("div",oe,[e("div",{class:"selected",onClick:o[3]||(o[3]=V(s=>l.value=!l.value,["stop"]))},[e("img",{src:`https://flagcdn.com/w20/${t.value.code.toLocaleLowerCase()}.png`,srcset:`https://flagcdn.com/w20/${t.value.code.toLocaleLowerCase()}.png 2x`,width:"20"},null,8,te),e("div",{class:$(["arrow",[l.value?"up":"down"]])},null,2)]),l.value?(d(),r("div",le,[(d(!0),r(B,null,R(a(L),s=>(d(),r("div",{key:s.code,class:"dial-option d-flex align-items-center",onClick:ie=>b(s)},[e("img",{src:`https://flagcdn.com/w20/${s.code.toLocaleLowerCase()}.png`,srcset:`https://flagcdn.com/w20/${s.code.toLocaleLowerCase()}.png 2x`,width:"20"},null,8,ne),e("div",ce,C(s.name),1),e("div",de,C(s.dial_code),1)],8,ae))),128))])):U("",!0)]),i(e("input",{"onUpdate:modelValue":o[4]||(o[4]=s=>p(v)?v.value=s:null),type:"text",class:"form-control",placeholder:"72 345 678",name:"number",ref_key:"phoneInput",ref:g},null,512),[[u,a(v)]])])])])])]))}});const fe=O(re,[["__scopeId","data-v-b4386a5d"]]);export{fe as default};