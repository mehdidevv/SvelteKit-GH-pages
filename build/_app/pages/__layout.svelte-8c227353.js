import{D as ne,S as se,i as ae,s as le,e as u,k as y,E as V,t as K,c as f,a as c,d as l,n as H,F as j,g as z,G as ve,b as e,H as N,f as T,I as s,J as re,K as ue,L as fe,j as _e,m as de,o as he,M as pe,N as ge,O as me,x as oe,u as ie,v as be}from"../chunks/vendor-356027b4.js";const Ee=()=>{const o=ne("__svelte__");return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},session:o.session}},we={subscribe(o){return Ee().page.subscribe(o)}};var $e="/_app/assets/svelte-logo-87df40b8.svg";function qe(o){let a,d,i,n,g,w,p,_,q,S,v,b,r,t,h,$,m,M,x,A,L,F,G,I,B,R,O;return{c(){a=u("header"),d=u("div"),i=u("a"),n=u("img"),w=y(),p=u("nav"),_=V("svg"),q=V("path"),S=y(),v=u("ul"),b=u("li"),r=u("a"),t=K("Home"),h=y(),$=u("li"),m=u("a"),M=K("About"),x=y(),A=u("li"),L=u("a"),F=K("Todos"),G=y(),I=V("svg"),B=V("path"),R=y(),O=u("div"),this.h()},l(k){a=f(k,"HEADER",{class:!0});var E=c(a);d=f(E,"DIV",{class:!0});var Z=c(d);i=f(Z,"A",{href:!0,class:!0});var J=c(i);n=f(J,"IMG",{src:!0,alt:!0,class:!0}),J.forEach(l),Z.forEach(l),w=H(E),p=f(E,"NAV",{class:!0});var C=c(p);_=j(C,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var P=c(_);q=j(P,"path",{d:!0,class:!0}),c(q).forEach(l),P.forEach(l),S=H(C),v=f(C,"UL",{class:!0});var D=c(v);b=f(D,"LI",{class:!0});var U=c(b);r=f(U,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Q=c(r);t=z(Q,"Home"),Q.forEach(l),U.forEach(l),h=H(D),$=f(D,"LI",{class:!0});var W=c($);m=f(W,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var X=c(m);M=z(X,"About"),X.forEach(l),W.forEach(l),x=H(D),A=f(D,"LI",{class:!0});var Y=c(A);L=f(Y,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var ee=c(L);F=z(ee,"Todos"),ee.forEach(l),Y.forEach(l),D.forEach(l),G=H(C),I=j(C,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var te=c(I);B=j(te,"path",{d:!0,class:!0}),c(B).forEach(l),te.forEach(l),C.forEach(l),R=H(E),O=f(E,"DIV",{class:!0});var ce=c(O);ce.forEach(l),E.forEach(l),this.h()},h(){ve(n.src,g=$e)||e(n,"src",g),e(n,"alt","SvelteKit"),e(n,"class","svelte-t2wq17"),e(i,"href","https://kit.svelte.dev"),e(i,"class","svelte-t2wq17"),e(d,"class","corner svelte-t2wq17"),e(q,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e(q,"class","svelte-t2wq17"),e(_,"viewBox","0 0 2 3"),e(_,"aria-hidden","true"),e(_,"class","svelte-t2wq17"),e(r,"sveltekit:prefetch",""),e(r,"href","/"),e(r,"class","svelte-t2wq17"),e(b,"class","svelte-t2wq17"),N(b,"active",o[0].path==="/"),e(m,"sveltekit:prefetch",""),e(m,"href","/about"),e(m,"class","svelte-t2wq17"),e($,"class","svelte-t2wq17"),N($,"active",o[0].path==="/about"),e(L,"sveltekit:prefetch",""),e(L,"href","/todos"),e(L,"class","svelte-t2wq17"),e(A,"class","svelte-t2wq17"),N(A,"active",o[0].path==="/todos"),e(v,"class","svelte-t2wq17"),e(B,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(B,"class","svelte-t2wq17"),e(I,"viewBox","0 0 2 3"),e(I,"aria-hidden","true"),e(I,"class","svelte-t2wq17"),e(p,"class","svelte-t2wq17"),e(O,"class","corner svelte-t2wq17"),e(a,"class","svelte-t2wq17")},m(k,E){T(k,a,E),s(a,d),s(d,i),s(i,n),s(a,w),s(a,p),s(p,_),s(_,q),s(p,S),s(p,v),s(v,b),s(b,r),s(r,t),s(v,h),s(v,$),s($,m),s(m,M),s(v,x),s(v,A),s(A,L),s(L,F),s(p,G),s(p,I),s(I,B),s(a,R),s(a,O)},p(k,[E]){E&1&&N(b,"active",k[0].path==="/"),E&1&&N($,"active",k[0].path==="/about"),E&1&&N(A,"active",k[0].path==="/todos")},i:re,o:re,d(k){k&&l(a)}}}function ke(o,a,d){let i;return ue(o,we,n=>d(0,i=n)),[i]}class Ae extends se{constructor(a){super();ae(this,a,ke,qe,le,{})}}function Le(o){let a,d,i,n,g,w,p,_,q,S,v;a=new Ae({});const b=o[1].default,r=fe(b,o,o[0],null);return{c(){_e(a.$$.fragment),d=y(),i=u("main"),r&&r.c(),n=y(),g=u("footer"),w=u("p"),p=K("visit "),_=u("a"),q=K("kit.svelte.dev"),S=K(" to learn SvelteKit"),this.h()},l(t){de(a.$$.fragment,t),d=H(t),i=f(t,"MAIN",{class:!0});var h=c(i);r&&r.l(h),h.forEach(l),n=H(t),g=f(t,"FOOTER",{class:!0});var $=c(g);w=f($,"P",{});var m=c(w);p=z(m,"visit "),_=f(m,"A",{href:!0,class:!0});var M=c(_);q=z(M,"kit.svelte.dev"),M.forEach(l),S=z(m," to learn SvelteKit"),m.forEach(l),$.forEach(l),this.h()},h(){e(i,"class","svelte-1izrdc8"),e(_,"href","https://kit.svelte.dev"),e(_,"class","svelte-1izrdc8"),e(g,"class","svelte-1izrdc8")},m(t,h){he(a,t,h),T(t,d,h),T(t,i,h),r&&r.m(i,null),T(t,n,h),T(t,g,h),s(g,w),s(w,p),s(w,_),s(_,q),s(w,S),v=!0},p(t,[h]){r&&r.p&&(!v||h&1)&&pe(r,b,t,t[0],v?me(b,t[0],h,null):ge(t[0]),null)},i(t){v||(oe(a.$$.fragment,t),oe(r,t),v=!0)},o(t){ie(a.$$.fragment,t),ie(r,t),v=!1},d(t){be(a,t),t&&l(d),t&&l(i),r&&r.d(t),t&&l(n),t&&l(g)}}}function Ie(o,a,d){let{$$slots:i={},$$scope:n}=a;return o.$$set=g=>{"$$scope"in g&&d(0,n=g.$$scope)},[n,i]}class He extends se{constructor(a){super();ae(this,a,Ie,Le,le,{})}}export{He as default};
