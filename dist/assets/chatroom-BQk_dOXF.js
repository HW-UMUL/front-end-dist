import{i as V,r as p,G as H,ab as q,o as l,c as d,a as n,t as h,u as c,b as s,w as o,j as B,F as S,L as D,N as C,M as _,P as L}from"./index-Csy_03Ik.js";import{a as Y}from"./avatar-1-BeeGmpGQ.js";import{s as u}from"./index-HbZBgYMg.js";import{V as M,a as T,b as N,c as K,d as Q,e as W}from"./VCard-Dn6rlqdV.js";import{V as X}from"./VDialog-Dlc5bKtd.js";import{V as Z}from"./VTextarea-CQUp357K.js";import{V as ee}from"./VTextField-C2KP5el_.js";import"./VGrid-CkWBtd8r.js";import"./VImg-AgknyUsB.js";import"./dialog-transition-BELgG3Ok.js";import"./index-Duozb8DO.js";import"./VInput-D2rLtPSR.js";const te={style:{display:"none"}},ae={class:"chat-board"},se={key:0,class:"d-flex flex-row-reverse"},oe={id:"my-chat",class:"ma-2 pa-2 my-chat-box"},ne={class:"chat-date"},re={key:1},ie={class:"d-flex"},le=["src"],de={class:"flex-column",style:{width:"100%"}},ce={style:{"margin-left":"8px"}},ue={class:"d-flex"},me={id:"other-chat",class:"other-chat-box ma-2 pa-2"},pe={class:"align-self-end other-chat-date"},he={class:"input-message"},Ie={__name:"chatroom",props:{roomId:String},setup(O){V("profileAddress");const f=V("chatAddress"),x=V("userAddress"),i=V("auth");async function v(){const a=await fetch(`http://${x}/api/getuserid`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},credentials:"include"});if(!a.ok)alert("인증에 실패하였습니다.");else return a.json()}const z=sessionStorage.getItem("myname"),b=p(!0);u.setConnectionString(`ws://${f}/ws`),u.connect(),u.onOpen(()=>{const a={auth:i};u.socket.value.send(JSON.stringify(a))}),u.onMessage(async a=>{const e=JSON.parse(a.data);e.date=new Date(e.date);const t=await j(e.userId);e.username=t.username,$.value.push(e),b.value=!b.value}),u.onClose(()=>{u.connect()});const w=O,k=p([{email:""}]),E=p([]),$=p([]);async function G(){const a=await v(),e={userIds:[]};await Promise.all(k.value.map(async function(r){const g=await F(r.email);e.userIds.push(g.userId)})),(await fetch(`http://${f}/api/chatroomuser/create/${w.roomId}/${a}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify(e),credentials:"include"})).ok?(U(),m.value=!1):alert("실패!")}async function U(){const a=await v(),e=await fetch(`http://${f}/api/chatroomuser/read/${w.roomId}/${a}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},credentials:"include"});e.ok?E.value=await e.json():alert("실패!")}const J=()=>{k.value.push({email:""})},y=p("");async function P(){const a={content:y.value},e=await v();if(!(await fetch(`http://${f}/api/chat/create/${w.roomId}/${e}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},credentials:"include",body:JSON.stringify(a)})).ok)alert("실패!");else{y.value="";const r=document.querySelector(".chat-board");r.scrollTop=r.scrollHeight,I()}}async function R(){const a=await v(),e=await fetch(`http://${f}/api/chat/read/${w.roomId}/${a}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},credentials:"include"});e.ok?($.value=await e.json(),$.value.forEach(async function(t){const r=await j(t.userId);t.username=r.username})):alert("실패!")}function I(){const a=document.querySelector(".chat-board");a.scrollTop=a.scrollHeight+200}H(()=>{R().then(()=>{I()})}),q(a=>{I()}),U();const m=p(!1);function A(a){const e=new Date(a);let t=e.getHours();const r=t>=12?"오후":"오전";t%=12,t=t||12;const g=String(e.getMinutes()).padStart(2,"0");return`${r} ${t}:${g}`}async function j(a){const e=await fetch(`http://${x}/api/whoAreYou/${a}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},credentials:"include"});if(!e.ok)alert("인증에 실패하였습니다.");else return e.json()}async function F(a){const e={email:a},t=await fetch(`http://${x}/api/whoAreYou/email`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},credentials:"include",body:JSON.stringify(e)});if(!t.ok)alert("인증에 실패하였습니다.");else return t.json()}return(a,e)=>(l(),d(S,null,[n("div",te,h(c(b)),1),s(M,null,{default:o(()=>[s(T,{cols:"12",md:"8",class:"mb-4"},{default:o(()=>[n("div",ae,[(l(!0),d(S,null,D(c($),(t,r)=>(l(),d("div",{key:r},[t.username===c(z)?(l(),d("div",se,[n("div",oe,h(t.chatContent),1),n("div",ne,h(A(t.chatCreateDt)),1)])):(l(),d("div",re,[n("div",ie,[n("img",{class:"other-propile-img",src:c(Y)},null,8,le),n("div",de,[n("div",ce,h(t.username),1),n("div",ue,[n("div",me,h(t.chatContent),1),n("div",pe,h(A(t.chatCreateDt)),1)])])])]))]))),128))]),n("div",he,[s(M,{class:"align-self-end",style:{"max-width":"100%"}},{default:o(()=>[s(T,{style:{"min-width":"77%"}},{default:o(()=>[s(Z,{id:"message",placeholder:"Message",label:"Message",modelValue:c(y),"onUpdate:modelValue":e[0]||(e[0]=t=>B(y)?y.value=t:null),rows:"1","no-resize":"true",style:{"margin-left":"10px"}},null,8,["modelValue"])]),_:1}),s(T,null,{default:o(()=>[s(C,{onClick:P,style:{"margin-left":"10px",width:"100%"}},{default:o(()=>[_("Submit")]),_:1})]),_:1})]),_:1})])]),_:1}),s(T,{cols:"12",md:"4"},{default:o(()=>[s(N,{title:"Invite",onClick:e[1]||(e[1]=t=>m.value=!0),style:{"margin-bottom":"20px"}})]),_:1})]),_:1}),s(X,{modelValue:c(m),"onUpdate:modelValue":e[3]||(e[3]=t=>B(m)?m.value=t:null),"max-width":"50%"},{default:o(()=>[s(N,null,{default:o(()=>[s(K,null,{default:o(()=>[_("Invite")]),_:1}),s(Q,null,{default:o(()=>[n("form",{onSubmit:L(G,["prevent"])},[(l(!0),d(S,null,D(c(k),(t,r)=>(l(),d("div",{key:r},[s(ee,{id:"email",modelValue:t.email,"onUpdate:modelValue":g=>t.email=g,placeholder:"email",label:"email",style:{"margin-bottom":"5px"}},null,8,["modelValue","onUpdate:modelValue"])]))),128)),s(C,{type:"button",onClick:J,style:{"margin-right":"5px"}},{default:o(()=>[_("Add User")]),_:1}),s(C,{type:"submit"},{default:o(()=>[_("Submit")]),_:1})],32)]),_:1}),s(W,null,{default:o(()=>[s(C,{color:"primary",onClick:e[2]||(e[2]=t=>m.value=!1)},{default:o(()=>[_("Close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};export{Ie as default};
