import{r as a,o as f,c as w,a as l,w as c,F as L,p as $,b as C,d as v,e as u,f as y,g,h as E,i as O,j as P,k as I}from"./vendor.6371fe41.js";const S=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};S();var x=(s,o)=>{const i=s.__vccOpts||s;for(const[r,e]of o)i[r]=e;return i};const N={methods:{push(s){return this.$router.push(s)}}},b=s=>($("data-v-50270b14"),s=s(),C(),s),A=b(()=>v("h2",{class:"title"},"Collections",-1)),V=b(()=>v("span",null,"Navigator One",-1)),B=u("Go to one"),G=u("Go to two"),R=u("Go to three"),F=u("Go to four");function T(s,o,i,r,e,t){const n=a("el-menu-item"),_=a("el-sub-menu"),d=a("el-menu");return f(),w(L,null,[A,l(d,null,{default:c(()=>[l(_,{index:"1"},{title:c(()=>[V]),default:c(()=>[l(n,{index:"1-1",onClick:o[0]||(o[0]=p=>t.push("/one"))},{default:c(()=>[B]),_:1}),l(n,{index:"1-2",onClick:o[1]||(o[1]=p=>t.push("/two"))},{default:c(()=>[G]),_:1})]),_:1}),l(n,{index:"2",onClick:o[2]||(o[2]=p=>t.push("/three"))},{default:c(()=>[R]),_:1}),l(n,{index:"3",onClick:o[3]||(o[3]=p=>t.push("/four"))},{default:c(()=>[F]),_:1})]),_:1})],64)}var q=x(N,[["render",T],["__scopeId","data-v-50270b14"]]);const D=y({setup(s){return(o,i)=>{const r=a("el-scrollbar"),e=a("el-aside"),t=a("router-view"),n=a("el-main"),_=a("el-container");return f(),g(_,{class:"layout-container-demo"},{default:c(()=>[l(e,{style:{"min-height":"100vh","border-right":"1px solid #eee"}},{default:c(()=>[l(r,null,{default:c(()=>[l(q)]),_:1})]),_:1}),l(_,null,{default:c(()=>[l(n,{class:"view"},{default:c(()=>[l(t)]),_:1}),l(e)]),_:1})]),_:1})}}});var H=x(D,[["__scopeId","data-v-1dc9b2f7"]]);const W=y({setup(s){return(o,i)=>(f(),g(H))}}),j="modulepreload",h={},K="",k=function(o,i){return!i||i.length===0?o():Promise.all(i.map(r=>{if(r=`${K}${r}`,r in h)return;h[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":j,e||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),e)return new Promise((_,d)=>{n.addEventListener("load",_),n.addEventListener("error",d)})})).then(()=>o())},z=()=>k(()=>import("./TestPage.2e4dc04c.js"),["assets/TestPage.2e4dc04c.js","assets/vendor.6371fe41.js"]),J=()=>k(()=>import("./TestPage2.7dcd6f45.js"),["assets/TestPage2.7dcd6f45.js","assets/vendor.6371fe41.js"]),M=[{path:"/one",component:z},{path:"/two",component:J}],Q=E({history:O(),routes:M}),m=P(W);m.use(I);m.use(Q);m.mount("#app");export{x as _};
