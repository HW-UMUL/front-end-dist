import{_ as A}from"./wikieditor-D8LS6Czb.js";import{a as g}from"./axios-DkDr-_XN.js";import{H as C,a7 as v,i as d,r as j,o as B,e as N,w as e,b as t,a as p,u as i,N as h,M as k}from"./index-Csy_03Ik.js";import{_ as U,a as z,b as F}from"./ViewWikiStarRank-DHqijTNx.js";import{V as I,b as u,d as R,a as n}from"./VCard-Dn6rlqdV.js";import{V as w}from"./VTextField-C2KP5el_.js";import"./VTable-CVQIvV2I.js";import"./VGrid-CkWBtd8r.js";import"./VImg-AgknyUsB.js";import"./VInput-D2rLtPSR.js";import"./index-Duozb8DO.js";const W=p("p",null,"Wiki 작성",-1),X={__name:"wikiupdate",props:{posts:Array},setup(D){const c=C(),m=v();d("serverAddress");const f=d("wikiAddress"),b=d("userAddress"),_=d("auth");async function y(){const s=await fetch(`http://${b}/api/getuserid`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${_}`},credentials:"include"});if(!s.ok)alert("인증에 실패하였습니다.");else return s.json()}let r="Bearer ";r=r+_;const o=j({title:"",content:"",category:""});x();async function x(){if(m.params.id){const s=await y();g.get(`http://${f}/api/wiki/read/${m.params.id}/${s}`,{headers:{Authorization:r}}).then(a=>{o.value.title=a.data.wikiTitle,o.value.content=a.data.wikiContent,o.value.category=a.data.category.name})}}async function $(){const s={"Content-Type":"application/json",Authorization:r},a=JSON.stringify(o.value),l=await y();g.put(`http://${f}/api/wiki/update/${m.params.id}/${l}`,a,{headers:s}).then(V=>{c.push({path:"/wiki"})}).catch(V=>{console.error("에러 발생:",V)})}const T=()=>{c.go(-1)};return(s,a)=>(B(),N(I,null,{default:e(()=>[t(n,{cols:"12",md:"8",class:"mb-4"},{default:e(()=>[t(u,{class:"position-relative"},{default:e(()=>[t(R,null,{default:e(()=>[p("div",null,[W,t(n,null,{default:e(()=>[t(w,{id:"title",modelValue:i(o).title,"onUpdate:modelValue":a[0]||(a[0]=l=>i(o).title=l),placeholder:"제목",label:"제목"},null,8,["modelValue"])]),_:1}),t(n,null,{default:e(()=>[p("div",null,[t(A,{modelValue:i(o).content,"onUpdate:modelValue":a[1]||(a[1]=l=>i(o).content=l)},null,8,["modelValue"])])]),_:1}),t(n,null,{default:e(()=>[t(w,{id:"category",modelValue:i(o).category,"onUpdate:modelValue":a[2]||(a[2]=l=>i(o).category=l),placeholder:"카테고리",label:"카테고리"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:e(()=>[t(h,{onClick:$,type:"submit",class:"me-5"},{default:e(()=>[k(" 작성 ")]),_:1}),t(h,{onClick:T,type:"button"},{default:e(()=>[k("취소")]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}),t(n,{cols:"12",md:"4"},{default:e(()=>[t(u,{title:"추천순",style:{"margin-bottom":"20px"}},{default:e(()=>[t(U,{style:{"margin-bottom":"20px"}})]),_:1}),t(u,{title:"즐겨찾기순",style:{"margin-bottom":"20px"}},{default:e(()=>[t(z,{style:{"margin-bottom":"20px"}})]),_:1}),t(u,{title:"최신순",style:{"margin-bottom":"20px"}},{default:e(()=>[t(F,{style:{"margin-bottom":"20px"}})]),_:1})]),_:1})]),_:1}))}};export{X as default};
