const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/0-new-website.ys5iyDm5.js","../chunks/scheduler.Ce_0Mfso.js","../chunks/index.BjMbYGD8.js"])))=>i.map(i=>d[i]);
import{_ as ae}from"../chunks/preload-helper.C1FmrZbK.js";import{H as ne}from"../chunks/control.CYgJF_JY.js";import{s as oe}from"../chunks/scheduler.Ce_0Mfso.js";import{S as re,i as le,u as K,e as h,s as S,t as H,v as Q,A as se,c as p,d as _,f as j,h as E,j as I,w as ie,a as d,k as u,b as U,x as W,l as G,n as X,o as ce,p as Y,z as ue,y as Z,r as me}from"../chunks/index.BjMbYGD8.js";import{e as x}from"../chunks/each.D6YF6ztN.js";const fe=(o,t,i)=>{const n=o[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((f,m)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(m.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==i?". Note that variables only represent file names one level deep.":""))))})};function _e(o,t){throw new ne(o,t)}new TextEncoder;async function de({params:o}){try{const t=await fe(Object.assign({"../../posts/0-new-website.md":()=>ae(()=>import("../chunks/0-new-website.ys5iyDm5.js"),__vite__mapDeps([0,1,2]),import.meta.url)}),`../../posts/${o.slug}.md`,4);return{content:t.default,meta:t.metadata}}catch{_e(404,`Could not find ${o.slug}`)}}const Ee=Object.freeze(Object.defineProperty({__proto__:null,load:de},Symbol.toStringTag,{value:"Module"}));function ee(o,t,i){const n=o.slice();return n[1]=t[i],n}function te(o){let t,i,n=o[1]+"",f;return{c(){t=h("span"),i=H("#"),f=H(n),this.h()},l(m){t=p(m,"SPAN",{class:!0});var l=E(t);i=I(l,"#"),f=I(l,n),l.forEach(_),this.h()},h(){d(t,"class","categories svelte-1nfqkf9")},m(m,l){U(m,t,l),u(t,i),u(t,f)},p(m,l){l&1&&n!==(n=m[1]+"")&&G(f,n)},d(m){m&&_(t)}}}function he(o){let t,i,n,f,m,l,v,D,T=o[0].meta.title+"",M,q,w,V,A=o[0].meta.date+"",O,R,y,z,b,r,g;document.title=t=o[0].meta.title;let P=x(o[0].meta.categories),s=[];for(let e=0;e<P.length;e+=1)s[e]=te(ee(o,P,e));var k=o[0].content;function L(e,c){return{}}return k&&(r=K(k,L())),{c(){i=h("meta"),n=h("meta"),m=S(),l=h("div"),v=h("hgroup"),D=h("h1"),M=H(T),q=S(),w=h("p"),V=H("Published at "),O=H(A),R=S(),y=h("div");for(let e=0;e<s.length;e+=1)s[e].c();z=S(),b=h("div"),r&&Q(r.$$.fragment),this.h()},l(e){const c=se("svelte-ylbs26",document.head);i=p(c,"META",{property:!0,content:!0}),n=p(c,"META",{property:!0,content:!0}),c.forEach(_),m=j(e),l=p(e,"DIV",{class:!0});var a=E(l);v=p(a,"HGROUP",{class:!0});var $=E(v);D=p($,"H1",{});var B=E(D);M=I(B,T),B.forEach(_),q=j($),w=p($,"P",{});var C=E(w);V=I(C,"Published at "),O=I(C,A),C.forEach(_),$.forEach(_),R=j(a),y=p(a,"DIV",{class:!0});var F=E(y);for(let N=0;N<s.length;N+=1)s[N].l(F);F.forEach(_),z=j(a),b=p(a,"DIV",{class:!0});var J=E(b);r&&ie(r.$$.fragment,J),J.forEach(_),a.forEach(_),this.h()},h(){d(i,"property","og:type"),d(i,"content","article"),d(n,"property","og:title"),d(n,"content",f=o[0].meta.title),d(v,"class","title-date"),d(y,"class","tags"),d(b,"class","body"),d(l,"class","centeredDiv")},m(e,c){u(document.head,i),u(document.head,n),U(e,m,c),U(e,l,c),u(l,v),u(v,D),u(D,M),u(v,q),u(v,w),u(w,V),u(w,O),u(l,R),u(l,y);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(y,null);u(l,z),u(l,b),r&&W(r,b,null),g=!0},p(e,[c]){if((!g||c&1)&&t!==(t=e[0].meta.title)&&(document.title=t),(!g||c&1&&f!==(f=e[0].meta.title))&&d(n,"content",f),(!g||c&1)&&T!==(T=e[0].meta.title+"")&&G(M,T),(!g||c&1)&&A!==(A=e[0].meta.date+"")&&G(O,A),c&1){P=x(e[0].meta.categories);let a;for(a=0;a<P.length;a+=1){const $=ee(e,P,a);s[a]?s[a].p($,c):(s[a]=te($),s[a].c(),s[a].m(y,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=P.length}if(c&1&&k!==(k=e[0].content)){if(r){me();const a=r;X(a.$$.fragment,1,0,()=>{Z(a,1)}),ce()}k?(r=K(k,L()),Q(r.$$.fragment),Y(r.$$.fragment,1),W(r,b,null)):r=null}},i(e){g||(r&&Y(r.$$.fragment,e),g=!0)},o(e){r&&X(r.$$.fragment,e),g=!1},d(e){e&&(_(m),_(l)),_(i),_(n),ue(s,e),r&&Z(r)}}}function pe(o,t,i){let{data:n}=t;return o.$$set=f=>{"data"in f&&i(0,n=f.data)},[n]}class we extends re{constructor(t){super(),le(this,t,pe,he,oe,{data:0})}}export{we as component,Ee as universal};
