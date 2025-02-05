import{n as $}from"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import{e as I}from"./quatf64-C16JxGFv-BKWK1F8U.js";import{dg as v,hZ as _}from"./story-DTWQEBUx.js";import{n as E,o as z}from"./common-CYWrYyJl-E8-sukrT.js";import{y as T,S as x,F as X,l as Y}from"./vec32-D9GsKZ1t-wPAEwM9p.js";import{p as Z,y as w,g as F,o as N,w as R,A as W,x as k,q as B,L as C,E as D,O as G}from"./vec42-D8CJyqHG-DnfLTeQH.js";function H(r){return r[0]=0,r[1]=0,r[2]=0,r[3]=1,r}function L(r,o,a){a*=.5;const s=Math.sin(a);return r[0]=s*o[0],r[1]=s*o[1],r[2]=s*o[2],r[3]=Math.cos(a),r}function J(r,o){const a=2*Math.acos(o[3]),s=Math.sin(a/2);return s>E()?(r[0]=o[0]/s,r[1]=o[1]/s,r[2]=o[2]/s):(r[0]=1,r[1]=0,r[2]=0),a}function O(r,o,a){const s=o[0],t=o[1],c=o[2],i=o[3],u=a[0],n=a[1],e=a[2],h=a[3];return r[0]=s*h+i*u+t*e-c*n,r[1]=t*h+i*n+c*u-s*e,r[2]=c*h+i*e+s*n-t*u,r[3]=i*h-s*u-t*n-c*e,r}function K(r,o,a){a*=.5;const s=o[0],t=o[1],c=o[2],i=o[3],u=Math.sin(a),n=Math.cos(a);return r[0]=s*n+i*u,r[1]=t*n+c*u,r[2]=c*n-t*u,r[3]=i*n-s*u,r}function Q(r,o,a){a*=.5;const s=o[0],t=o[1],c=o[2],i=o[3],u=Math.sin(a),n=Math.cos(a);return r[0]=s*n-c*u,r[1]=t*n+i*u,r[2]=c*n+s*u,r[3]=i*n-t*u,r}function U(r,o,a){a*=.5;const s=o[0],t=o[1],c=o[2],i=o[3],u=Math.sin(a),n=Math.cos(a);return r[0]=s*n+t*u,r[1]=t*n-s*u,r[2]=c*n+i*u,r[3]=i*n-c*u,r}function V(r,o){const a=o[0],s=o[1],t=o[2];return r[0]=a,r[1]=s,r[2]=t,r[3]=Math.sqrt(Math.abs(1-a*a-s*s-t*t)),r}function d(r,o,a,s){const t=o[0],c=o[1],i=o[2],u=o[3];let n,e,h,f,l,m=a[0],p=a[1],q=a[2],g=a[3];return e=t*m+c*p+i*q+u*g,e<0&&(e=-e,m=-m,p=-p,q=-q,g=-g),1-e>E()?(n=Math.acos(e),h=Math.sin(n),f=Math.sin((1-s)*n)/h,l=Math.sin(s*n)/h):(f=1-s,l=s),r[0]=f*t+l*m,r[1]=f*c+l*p,r[2]=f*i+l*q,r[3]=f*u+l*g,r}function rr(r){const o=z,a=o(),s=o(),t=o(),c=Math.sqrt(1-a),i=Math.sqrt(a);return r[0]=c*Math.sin(2*Math.PI*s),r[1]=c*Math.cos(2*Math.PI*s),r[2]=i*Math.sin(2*Math.PI*t),r[3]=i*Math.cos(2*Math.PI*t),r}function or(r,o){const a=o[0],s=o[1],t=o[2],c=o[3],i=a*a+s*s+t*t+c*c,u=i?1/i:0;return r[0]=-a*u,r[1]=-s*u,r[2]=-t*u,r[3]=c*u,r}function sr(r,o){return r[0]=-o[0],r[1]=-o[1],r[2]=-o[2],r[3]=o[3],r}function S(r,o){const a=o[0]+o[4]+o[8];let s;if(a>0)s=Math.sqrt(a+1),r[3]=.5*s,s=.5/s,r[0]=(o[5]-o[7])*s,r[1]=(o[6]-o[2])*s,r[2]=(o[1]-o[3])*s;else{let t=0;o[4]>o[0]&&(t=1),o[8]>o[3*t+t]&&(t=2);const c=(t+1)%3,i=(t+2)%3;s=Math.sqrt(o[3*t+t]-o[3*c+c]-o[3*i+i]+1),r[t]=.5*s,s=.5/s,r[3]=(o[3*c+i]-o[3*i+c])*s,r[c]=(o[3*c+t]+o[3*t+c])*s,r[i]=(o[3*i+t]+o[3*t+i])*s}return r}function tr(r,o,a,s){const t=.5*Math.PI/180;o*=t,a*=t,s*=t;const c=Math.sin(o),i=Math.cos(o),u=Math.sin(a),n=Math.cos(a),e=Math.sin(s),h=Math.cos(s);return r[0]=c*n*h-i*u*e,r[1]=i*u*h+c*n*e,r[2]=i*n*e-c*u*h,r[3]=i*n*h+c*u*e,r}function ar(r){return"quat("+r[0]+", "+r[1]+", "+r[2]+", "+r[3]+")"}const cr=Z,ir=w,ur=F,nr=O,er=N,hr=R,Mr=W,b=k,fr=b,j=B,lr=j,A=C,mr=D,pr=G;function qr(r,o,a){const s=T(o,a);return s<-.999999?(x(M,gr,o),X(M)<1e-6&&x(M,dr,o),Y(M,M),L(r,M,Math.PI),r):s>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(x(M,o,a),r[0]=M[0],r[1]=M[1],r[2]=M[2],r[3]=1+s,A(r,r))}const M=v(),gr=_(1,0,0),dr=_(0,1,0);function xr(r,o,a,s,t,c){return d(P,o,t,c),d(y,a,s,c),d(r,P,y,2*c*(1-c)),r}const P=I(),y=I();function Ar(r,o,a,s){const t=Pr;return t[0]=a[0],t[3]=a[1],t[6]=a[2],t[1]=s[0],t[4]=s[1],t[7]=s[2],t[2]=-o[0],t[5]=-o[1],t[8]=-o[2],A(r,S(r,t))}const Pr=$();Object.freeze(Object.defineProperty({__proto__:null,add:ur,calculateW:V,conjugate:sr,copy:cr,dot:hr,equals:pr,exactEquals:mr,fromEuler:tr,fromMat3:S,getAxisAngle:J,identity:H,invert:or,len:fr,length:b,lerp:Mr,mul:nr,multiply:O,normalize:A,random:rr,rotateX:K,rotateY:Q,rotateZ:U,rotationTo:qr,scale:er,set:ir,setAxes:Ar,setAxisAngle:L,slerp:d,sqlerp:xr,sqrLen:lr,squaredLength:j,str:ar},Symbol.toStringTag,{value:"Module"}));export{L as A,or as L,tr as O,ir as T,mr as X,qr as Y,O as _,J as j,sr as v};
