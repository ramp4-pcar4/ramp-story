import{G as g}from"./ByteSizeUnit-DL8UhsB0-B2-AmVRx.js";import{c as x}from"./Cyclical-C_9rKUUQ-b4GPoDO5.js";import{iO as b,cU as T,cV as a,di as o,c3 as l,c2 as z,ae as B,iP as p,iQ as v,iR as d,iS as S,iT as V,iU as M}from"./story-Xt2MKhXr.js";function $(r,t){return{type:b(t),value:r,unit:t}}function Z(r){return{value:r}}function w(r,t){return{type:b(t),value:r,unit:t}}function G(r,t){return{type:b(t),value:r,unit:t}}function h(r,t,e="arithmetic"){return{type:b(t),value:r,unit:t,rotationType:e}}function q(r,t){const e=N(r,t);return r.type==="angle"?h(e,t,r.rotationType):$(e,t)}function N(r,t){return o(r.value,r.unit,t)}function O(r,t,e){if(t===e)return r;switch(e){case"arithmetic":case"geographic":return 90-r}}const K=w(0,"meters"),P=G(0,"square-meters");h(0,"radians");const Y=h(0,"degrees"),J=h(0,"degrees","geographic");function D(r,t,e){return r.units[t][e]}function u(r,t,e,n=2,s="abbr"){return`${l(t,{minimumFractionDigits:n,maximumFractionDigits:n,signDisplay:t>0?"never":"exceptZero"})} ${D(r,e,s)}`}function m(r,t,e,n=2,s="abbr"){return`${l(t,{minimumFractionDigits:n,maximumFractionDigits:n,signDisplay:"exceptZero"})} ${D(r,e,s)}`}function Q(r,t,e,n=2,s="abbr"){const i=p(t,e);return u(r,o(t,e,i),i,n,s)}function R(r,t,e,n=2,s="abbr"){const i=p(t,e);return m(r,o(t,e,i),i,n,s)}function X(r,t,e,n=2,s="abbr"){const i=v(t,e);return u(r,o(t,e,i),i,n,s)}function j(r,t,e,n=2,s="abbr"){const i=v(t,e);return m(r,o(t,e,i),i,n,s)}function A(r,t,e,n=2,s="abbr"){const i=d(t,e);return u(r,o(t,e,i),i,n,s)}function C(r,t,e,n=2,s="abbr"){const i=d(t,e);return m(r,o(t,e,i),i,n,s)}function H(r,t,e,n=2,s="abbr"){const i=S(t,e);return u(r,o(t,e,i),i,n,s)}function W(r,t,e,n=2,s="abbr"){const i=S(t,e);return m(r,o(t,e,i),i,n,s)}function tt(r,t,e,n=2,s="abbr"){const i=V(t,e);return u(r,o(t,e,i),i,n,s)}function et(r,t,e,n=2,s="abbr"){const i=M(t,e);return u(r,o(t,e,i),i,n,s)}const k=(r,t)=>({style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:t,minimumFractionDigits:t,signDisplay:r>0?"never":"exceptZero"});function rt(r,t,e,n,s,i=x,F=!0){let c=i.normalize(O(o(r,t,"degrees"),e,n),0,F);const f=k(c,s??2);return c=E(c,f),l(c,f)}const _=new Map;function E(r,t){const e=JSON.stringify(t);let n=_.get(e);return n||(n=new Intl.NumberFormat("en-US",t),_.set(e,n)),/^[-+]?360\.?0*°?$/.test(n.format(r))?0:r}const y=["B","kB","MB","GB","TB"];function nt(r,t){let e=(t=Math.round(t))===0?0:Math.floor(Math.log(t)/Math.log(g.KILOBYTES));e=B(e,0,y.length-1);const n=l(t/g.KILOBYTES**e,{maximumFractionDigits:2});return z(r.units.bytes[y[e]],{fileSize:n})}class it{constructor(t){this._observable=new T,this._set=new Set(t)}get size(){return a(this._observable),this._set.size}add(t){const e=this._set.size;return this._set.add(t),this._set.size!==e&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify())}delete(t){const e=this._set.delete(t);return e&&this._observable.notify(),e}entries(){return a(this._observable),this._set.entries()}forEach(t,e){a(this._observable),this._set.forEach((n,s)=>t.call(e,n,s,this),e)}has(t){return a(this._observable),this._set.has(t)}keys(){return a(this._observable),this._set.keys()}values(){return a(this._observable),this._set.values()}[Symbol.iterator](){return a(this._observable),this._set[Symbol.iterator]()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}export{H as A,W as C,w as D,O as F,tt as G,et as H,A as J,q as K,K as L,P as N,Y as P,J as Q,Q as R,G as S,Z as U,rt as W,R as Y,X as Z,m as b,h as c,C as j,D as m,j as q,it as s,nt as t,u,N as x};
