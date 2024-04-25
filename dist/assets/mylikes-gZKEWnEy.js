import{_ as ue,a as de,b as ce}from"./ViewWikiStarRank-DHqijTNx.js";import{_ as pe}from"./PostSort-C8CHrn04.js";import{_ as ve}from"./Post-C260Llot.js";import{_ as he,i as k,H as fe,r as o,l as X,o as n,e as x,w as g,a as e,b as v,M as Y,I as Z,O as ee,c as m,F as V,L as z,t as L,n as P,u as c,P as T,Q as _e,R as ge,h as $}from"./index-Csy_03Ik.js";import{_ as me}from"./GetName-ChMEjk5Y.js";import{a as te}from"./axios-DkDr-_XN.js";import{c as ke,b as N,V as se,a as ae}from"./VCard-Dn6rlqdV.js";import"./VTable-CVQIvV2I.js";import"./PostModal-DYxFwaA8.js";import"./Reply-DcX9_dpw.js";import"./avatar-1-BeeGmpGQ.js";import"./VSpacer-B8EKNrvY.js";import"./index-Duozb8DO.js";import"./VImg-AgknyUsB.js";import"./VGrid-CkWBtd8r.js";import"./VDivider-COcjAoGG.js";import"./dialog-transition-BELgG3Ok.js";import"./VTextarea-CQUp357K.js";import"./VInput-D2rLtPSR.js";const h=C=>(_e("data-v-35928d06"),C=C(),ge(),C),ye={style:{"margin-bottom":"20px"}},we=h(()=>e("option",{value:"5",selected:""}," 5개씩 보기 ",-1)),be=h(()=>e("option",{value:"10"},"10개씩 보기",-1)),$e=h(()=>e("option",{value:"20"},"20개씩 보기",-1)),xe=[we,be,$e],Ce=h(()=>e("option",{value:"",selected:""}," 카테고리 선택 ",-1)),Ie=["value"],Ae=h(()=>e("br",null,null,-1)),Be=h(()=>e("br",null,null,-1)),Le={class:"wikititle",border:"0",style:{"border-spacing":"5px",width:"100%","max-height":"300px","overflow-y":"auto"}},Pe=h(()=>e("tr",{style:{"font-weight":"bold"}},[e("td",{width:"10%",style:{"padding-left":"10px"}}," 번호 "),e("td",{style:{"padding-left":"10px"},width:"55%"}," 제목 "),e("td",{align:"center",width:"10%"}," 사용자 "),e("td",{align:"center",width:"25%"}," 작성일 ")],-1)),Te=h(()=>e("tr",null,[e("td",{colspan:"6"},[e("hr")])],-1)),Ve={height:"40"},je={style:{"padding-left":"20px"},width:"10%"},Me={width:"50%"},Se=["onClick"],We={width:"20%",align:"center"},ze={width:"20%",align:"center"},Ne=h(()=>e("tr",null,[e("td",{colspan:"4"},[e("hr")])],-1)),De=h(()=>e("br",null,null,-1)),Ee={style:{display:"flex",gap:"5px","justify-content":"center"}},Ue={class:"pagination"},Fe=["onClick"],Ge={__name:"MyLikeWikiList",setup(C){k("serverAddress");const j=k("wikiAddress"),D=k("userAddress"),I=k("auth");async function E(){const s=await fetch(`http://${D}/api/getuserid`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${I}`},credentials:"include"});if(!s.ok)alert("인증에 실패하였습니다.");else return s.json()}let y="Bearer ";y=y+I;const p=fe(),f=o([]),l=o([]),w=o([]),d=o([]),r=o("10");let i=o(0),M=10;const A=o([]);let u=o(0),O=o(!0),H=o(!0),K=o(!0),Q=o(!0);const S=()=>Math.floor(i.value/M)*M,le=()=>{A.value=[],d.value.length%r.value==0?u.value=d.value.length/r.value-1:u.value=Math.ceil(d.value.length/r.value)-1;let s=S();for(let t=0;t<M;t++)u.value>=s&&(A.value.push(s),s++)},ie=()=>{A.value=[],d.value.length%r.value==0?u.value=d.value.length/r.value-1:u.value=Math.ceil(l.value.length/r.value)-1;let s=S();for(let t=0;t<M;t++)u.value>=s&&(A.value.push(s),s++)},U=async()=>{var s;try{const t=await E(),a=await te.get(`http://${j}/api/wikilike/read/my/${t}`,{headers:{Authorization:y}});d.value=a.data,w.value=a.data,l.value=[],f.value=[];const _=r.value*i.value,G=Math.min(_+r.value,d.value.length),J=[];for(let b=_;b<G;b++){const re=await te.get(`http://${j}/api/wikilog/readall/${d.value[b].wiki.wikiId}/${t}`,{headers:{Authorization:y},withCredentials:!0});J.push((s=re.data[0])==null?void 0:s.date.substring(0,10)),l.value.push(d.value[b])}await Promise.all(J).then(b=>{f.value=b}),le(),F()}catch(t){console.error("Error fetching data:",t)}};U();const q=s=>{i.value=s,U()};X(r,(s,t)=>{i.value=0,U()});const F=()=>{O.value=i.value==0,H.value=i.value==0,K.value=i.value==u.value,Q.value=i.value==u.value};X(i,(s,t)=>{F()});const W=s=>{let t=parseInt(i.value);s=="first"?t=0:s=="last"?t=u.value:s=="prev"?(t=S()-1,t<0&&(t=0)):(t=S()+10,t>=u.value&&(t=u.value)),q(t)};function oe(s){p.push({name:"readwiki",params:{id:s}})}const B=o(""),ne=()=>{console.log("Selected Category ID:",B.value),B.value===""?l.value=d.value.slice(0,r.value):l.value=d.value.filter(s=>s.category.id===B.value).slice(0,r.value),u.value=Math.ceil(l.value.length/r.value)-1,i.value=0,i.value>u.value&&(i.value=u.value),ie(),F()};return(s,t)=>(n(),x(N,null,{default:g(()=>[e("div",ye,[v(ke,{color:""},{default:g(()=>[Y("Wiki List")]),_:1})]),Z(e("select",{"onUpdate:modelValue":t[0]||(t[0]=a=>r.value=a),style:{"margin-left":"10px"}},xe,512),[[ee,r.value]]),Y("  "),Z(e("select",{"onUpdate:modelValue":t[1]||(t[1]=a=>B.value=a),onChange:ne},[Ce,(n(!0),m(V,null,z(w.value,(a,_)=>(n(),m("option",{key:_,value:a.wiki.category.id},L(a.wiki.category.name),9,Ie))),128))],544),[[ee,B.value]]),Ae,Be,e("table",Le,[Pe,Te,(n(!0),m(V,null,z(l.value,(a,_)=>(n(),m(V,{key:_},[e("tr",Ve,[e("td",je,L(a.wiki.wikiId),1),e("td",Me,[e("button",{type:"button",onClick:G=>oe(a.wiki.wikiId),style:{color:"#905dff"}},L(a.wiki.wikiTitle),9,Se)]),e("td",We,[v(me,{userId:a.wiki.userId},null,8,["userId"])]),e("td",ze,L(f.value[_]),1)]),Ne],64))),128))]),De,e("div",Ee,[e("ul",Ue,[e("li",{class:P(["page-item",{disabled:c(O)}])},[e("a",{class:"page-link",href:"#",onClick:t[2]||(t[2]=T(a=>W("first"),["prevent"]))},"처음")],2),e("li",{class:P(["page-item",{disabled:c(H)}])},[e("a",{class:"page-link",href:"#",onClick:t[3]||(t[3]=T(a=>W("prev"),["prevent"]))}," < 이전 ")],2),(n(!0),m(V,null,z(A.value,(a,_)=>(n(),m("li",{key:`list-${_}`,class:P(["page-item",{active:a==c(i),bold:a==c(i)}])},[e("a",{class:"page-link",href:"#",onClick:T(G=>q(a),["prevent"])},L(a+1),9,Fe)],2))),128)),e("li",{class:P(["page-item",{disabled:c(K)}])},[e("a",{class:"page-link",href:"#",onClick:t[4]||(t[4]=T(a=>W("next"),["prevent"]))}," 다음 > ")],2),e("li",{class:P(["page-item",{disabled:c(Q)}])},[e("a",{class:"page-link",href:"#",onClick:t[5]||(t[5]=T(a=>W("last"),["prevent"]))},"마지막")],2)])])]),_:1}))}},Re=he(Ge,[["__scopeId","data-v-35928d06"]]),Oe=e("div",{class:"bar"},null,-1),He={key:1},pt={__name:"mylikes",setup(C){k("serverAddress");const j=k("postAddress"),D=k("userAddress"),I=k("auth");async function E(){const f=await fetch(`http://${D}/api/getuserid`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${I}`},credentials:"include"});if(!f.ok)alert("인증에 실패하였습니다.");else return f.json()}const y=o([]);async function R(){const f=await E(),l=await fetch(`http://${j}/api/postlike/read/my/${f}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${I}`},credentials:"include"});l.ok?y.value=await l.json():alert("실패!")}R();const p=o(!0);return(f,l)=>(n(),x(se,null,{default:g(()=>[v(ae,{cols:"12",md:"8",class:"mb-4"},{default:g(()=>[v(se,{style:{height:"30px","margin-bottom":"20px"}},{default:g(()=>[e("div",{class:"selectPostWiki",onClick:l[0]||(l[0]=w=>p.value=!0)},"POST"),Oe,e("div",{class:"selectPostWiki",onClick:l[1]||(l[1]=w=>p.value=!1)},"WIKI")]),_:1}),c(p)?(n(!0),m(V,{key:0},z(c(y),(w,d)=>(n(),m("div",{key:d},[v(ve,{post:w.post,style:{"margin-bottom":"20px"}},null,8,["post"])]))),128)):$("",!0),c(p)?$("",!0):(n(),m("div",He,[v(Re)]))]),_:1}),v(ae,{cols:"12",md:"4"},{default:g(()=>[c(p)?(n(),x(pe,{key:0})):$("",!0),c(p)?$("",!0):(n(),x(N,{key:1,title:"추천순",style:{"margin-bottom":"20px"}},{default:g(()=>[v(ue,{style:{"margin-bottom":"20px"}})]),_:1})),c(p)?$("",!0):(n(),x(N,{key:2,title:"즐겨찾기순",style:{"margin-bottom":"20px"}},{default:g(()=>[v(de,{style:{"margin-bottom":"20px"}})]),_:1})),c(p)?$("",!0):(n(),x(N,{key:3,title:"최신순",style:{"margin-bottom":"20px"}},{default:g(()=>[v(ce,{style:{"margin-bottom":"20px"}})]),_:1}))]),_:1})]),_:1}))}};export{pt as default};
