import{gL as G,aG as z,w as A,cn as J,dW as L,J as O,et as P}from"./story-Xt2MKhXr.js";import{h as C}from"./TimeExtent-Cn0Jofqr-CMltjp4l.js";import{k as V}from"./quantizationUtils-bJy1cRwp-CsEktmVt.js";import{A as D,M as R}from"./heatmapUtils-seiMkkkR-WmaRiHWJ.js";import{b as S}from"./utils-DyydRFHu-B9_QeG2J.js";import{x as T,f as U}from"./utils-tNxq3jkf-CzTTFlr8.js";let c=null;const W=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function Y(t,e,a){return t.x<0?t.x+=e:t.x>a&&(t.x-=e),t}function B(t,e,a,r){const o=G(a)?z(a):null,m=o?Math.round((o.valid[1]-o.valid[0])/e.scale[0]):null;return t.map(i=>{const s=new A(i.geometry);return V(e,s,s),i.geometry=o?Y(s,m??0,r[0]):s,i})}function H(t,e=18,a,r,o){const m=new Float64Array(r*o);e=Math.round(P(e));let i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;const N=R(a);for(const{geometry:p,attributes:g}of t){const{x,y:u}=p,I=Math.max(0,x-e),$=Math.max(0,u-e),F=Math.min(o,u+e),M=Math.min(r,x+e),h=+N(g);for(let f=$;f<F;f++)for(let d=I;d<M;d++){const y=f*r+d,b=D(d-x,f-u,e)*h,l=m[y]+=b;i=Math.min(i,l),s=Math.max(s,l)}}return{min:i,max:s}}function Z(t){const e=W.exec(t);if(!e)return null;const{hh:a,mm:r,ss:o,ms:m}=e.groups;return Number(a)*C.hours+Number(r)*C.minutes+Number(o)*C.seconds+Number(m||0)}async function K(t,e,a=!0){if(!e)return[];const{field:r,field2:o,field3:m,fieldDelimiter:i,fieldInfos:s,timeZone:N}=t,p=r&&s?.find(l=>l.name.toLowerCase()===r.toLowerCase()),g=!!p&&J(p),x=!!p&&S(p),u=t.valueExpression,I=t.normalizationType,$=t.normalizationField,F=t.normalizationTotal,M=[],h=t.viewInfoParams;let f=null,d=null;if(u){if(!c){const{arcadeUtils:l}=await L();c=l}c.hasGeometryOperations(u)&&await c.enableGeometryOperations(),f=c.createFunction(u),d=h?c.getViewInfo({viewingMode:h.viewingMode,scale:h.scale,spatialReference:new O(h.spatialReference)}):null}const y=t.fieldInfos,b=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&y?{fields:y}:null;return e.forEach(l=>{const w=l.attributes;let n;if(u){const v=b?{...l,layer:b}:l,E=c.createExecContext(v,d,N);n=c.executeFunction(f,E)}else w&&(n=w[r],o?(n=`${T(n)}${i}${T(w[o])}`,m&&(n=`${n}${i}${T(w[m])}`)):typeof n=="string"&&a&&(x?n=n?new Date(n).getTime():null:g&&(n=n?Z(n):null)));if(I&&typeof n=="number"&&isFinite(n)){const v=w&&parseFloat(w[$]);n=U(n,I,v,F)}M.push(n)}),M}export{Z as C,B as Q,H as W,K as X};
