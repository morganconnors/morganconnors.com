import{s as z,n as A}from"../chunks/scheduler.Ce_0Mfso.js";import{S as H,i as M,s as y,e as g,h as T,d as u,c as P,a as j,j as w,g as B,b as v,f as D,l as r,A as U,t as k,k as I,m as S}from"../chunks/index.qNDHVIWh.js";import{e as L}from"../chunks/each.D6YF6ztN.js";import{t as F}from"../chunks/config.BbGRg-J5.js";async function G({fetch:i}){return{posts:await(await i("api/posts")).json()}}const X=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));function O(i,a,t){const o=i.slice();return o[1]=a[t],o}function V(i){let a,t,o=i[1].title+"",_,C,h,b=i[1].date+"",E,f,c,d=i[1].description+"",l,s,p;return{c(){a=g("li"),t=g("a"),_=k(o),C=y(),h=g("p"),E=k(b),f=y(),c=g("p"),l=k(d),p=y(),this.h()},l(e){a=j(e,"LI",{class:!0});var n=w(a);t=j(n,"A",{href:!0,class:!0});var m=w(t);_=I(m,o),C=P(m),h=j(m,"P",{class:!0});var x=w(h);E=I(x,b),x.forEach(u),f=P(m),c=j(m,"P",{class:!0});var q=w(c);l=I(q,d),q.forEach(u),m.forEach(u),p=P(n),n.forEach(u),this.h()},h(){v(h,"class","date svelte-1gs9lmj"),v(c,"class","description svelte-1gs9lmj"),v(t,"href",s=i[1].slug),v(t,"class","title svelte-1gs9lmj"),v(a,"class","post svelte-1gs9lmj")},m(e,n){D(e,a,n),r(a,t),r(t,_),r(t,C),r(t,h),r(h,E),r(t,f),r(t,c),r(c,l),r(a,p)},p(e,n){n&1&&o!==(o=e[1].title+"")&&S(_,o),n&1&&b!==(b=e[1].date+"")&&S(E,b),n&1&&d!==(d=e[1].description+"")&&S(l,d),n&1&&s!==(s=e[1].slug)&&v(t,"href",s)},d(e){e&&u(a)}}}function J(i){let a,t,o,_="Blog",C,h,b="I'll write about software, hardware, hiking, and whatever else holds my interest here.",E,f,c;document.title="Blog "+F;let d=L(i[0].posts),l=[];for(let s=0;s<d.length;s+=1)l[s]=V(O(i,d,s));return{c(){a=y(),t=g("div"),o=g("h1"),o.textContent=_,C=y(),h=g("p"),h.textContent=b,E=y(),f=g("div"),c=g("ul");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){T("svelte-1rjoha8",document.head).forEach(u),a=P(s),t=j(s,"DIV",{class:!0});var e=w(t);o=j(e,"H1",{"data-svelte-h":!0}),B(o)!=="svelte-dbxyy8"&&(o.textContent=_),C=P(e),h=j(e,"P",{"data-svelte-h":!0}),B(h)!=="svelte-7fjqs3"&&(h.textContent=b),E=P(e),f=j(e,"DIV",{id:!0,class:!0});var n=w(f);c=j(n,"UL",{class:!0});var m=w(c);for(let x=0;x<l.length;x+=1)l[x].l(m);m.forEach(u),n.forEach(u),e.forEach(u),this.h()},h(){v(c,"class","posts svelte-1gs9lmj"),v(f,"id","blogPosts"),v(f,"class","svelte-1gs9lmj"),v(t,"class","centeredDiv")},m(s,p){D(s,a,p),D(s,t,p),r(t,o),r(t,C),r(t,h),r(t,E),r(t,f),r(f,c);for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(c,null)},p(s,[p]){if(p&1){d=L(s[0].posts);let e;for(e=0;e<d.length;e+=1){const n=O(s,d,e);l[e]?l[e].p(n,p):(l[e]=V(n),l[e].c(),l[e].m(c,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=d.length}},i:A,o:A,d(s){s&&(u(a),u(t)),U(l,s)}}}function K(i,a,t){let{data:o}=a;return i.$$set=_=>{"data"in _&&t(0,o=_.data)},[o]}class Y extends H{constructor(a){super(),M(this,a,K,J,z,{data:0})}}export{Y as component,X as universal};
