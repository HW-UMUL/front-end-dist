import{_ as C}from"./PostSort-C8CHrn04.js";import{_ as E}from"./Post-C260Llot.js";import{V as T,a as v}from"./VCard-Dn6rlqdV.js";import{i,r as p,a9 as V,o as n,e as x,w as u,b as c,u as d,c as a,F as B,L as H,h as L,a as y}from"./index-Csy_03Ik.js";import"./PostModal-DYxFwaA8.js";import"./Reply-DcX9_dpw.js";import"./avatar-1-BeeGmpGQ.js";import"./VSpacer-B8EKNrvY.js";import"./index-Duozb8DO.js";import"./VImg-AgknyUsB.js";import"./VGrid-CkWBtd8r.js";import"./VDivider-COcjAoGG.js";import"./dialog-transition-BELgG3Ok.js";import"./VTextarea-CQUp357K.js";import"./VInput-D2rLtPSR.js";import"./axios-DkDr-_XN.js";import"./VTable-CVQIvV2I.js";const N={key:0},z={key:1},G=y("p",null,"No posts found",-1),I=[G],F={key:2},P=y("p",null,"Loading...",-1),S=[P],Y=10,ae={__name:"dashboard",props:{keyword:String},setup(k){i("serverAddress");const m=i("postAddress"),$=i("userAddress"),j=i("auth"),h=k,t=p([]);let f=0;const r=p(!1),l=p(!0);V(()=>{h.keyword==null?w():b()});async function _(){const e=await fetch(`http://${$}/api/getuserid`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${j}`},credentials:"include"});if(!e.ok)alert("인증에 실패하였습니다.");else return e.json()}async function w(){if(!l.value)return;const e=await _(),o=await(await fetch(`http://${m}/api/post/read/publics/1/${e}?page=${f}&size=${Y}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"})).json();o.content.length===0?l.value=!1:(t.value=[...t.value,...o.content],f++)}async function b(){const e=await _(),s=await fetch(`http://${m}/api/post/search/${h.keyword}/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});s.ok&&(t.value=await s.json())}window.addEventListener("scroll",A);async function A(){if(r.value||!l.value)return;const e=window.scrollY,s=window.innerHeight,o=document.body.scrollHeight;e+s>=o&&(r.value=!0,await w(),r.value=!1)}return(e,s)=>(n(),x(T,{class:"position-relatives"},{default:u(()=>[c(v,{cols:"12",md:"8",class:"mb-4"},{default:u(()=>[d(t)&&d(t).length?(n(),a("div",N,[(n(!0),a(B,null,H(d(t),(o,g)=>(n(),a("div",{key:g},[c(E,{post:o,index:g,style:{"margin-bottom":"20px"}},null,8,["post","index"])]))),128))])):(n(),a("div",z,I)),d(r)?(n(),a("div",F,S)):L("",!0)]),_:1}),c(v,{cols:"12",md:"4"},{default:u(()=>[c(C)]),_:1})]),_:1}))}};export{ae as default};
