import{eT as C,eX as L,fh as M,fC as $,eZ as h,e_ as E,fa as j,fc as B,e$ as p,f0 as z,f1 as v,f2 as e,fb as S,fm as G,f3 as k,fg as g,f4 as n,fl as I,eY as R,f6 as b,ga as Z,fZ as A,fi as F,f7 as H,f8 as K,f9 as P,fG as T,f5 as V}from"./story-BfX8CRfG.js";import"./main-ugzBrWNm.js";const W=["onClick","aria-label"],X={class:"md-icon-small inline"},Y=C({__name:"settings-button",props:{componentSelectedState:{type:Object,required:!0}},setup(d){const{t:m}=L(),o=M(),i=$(),w=h(()=>o.mobileView?"top-end":"left-end"),a=c=>{c.selectable&&i.toggleSelected({name:c.name})};return(c,s)=>{const x=E("dropdown-menu"),u=j("focus-item");return B((p(),z(x,{position:w.value,tooltip:n(m)("export.menu"),tooltipPlacement:"top"},{header:v(()=>s[0]||(s[0]=[e("div",{class:"flex items-center text-gray-400 w-full h-full hover:text-black p-4 sm:p-8"},[e("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("g",null,[e("path",{d:"M0,0h24v24H0V0z",fill:"none"}),e("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})])])],-1)])),default:v(()=>[(p(!0),S(I,null,G(d.componentSelectedState,l=>(p(),S("a",{key:l.name,onClick:y=>a(l),href:"javascript:;",class:k(`text-left text-sm sm:text-base ${l.selectable?"cursor-pointer":"cursor-default"}`),"aria-label":l.name},[e("div",X,[(p(),S("svg",{height:"20",width:"20",viewBox:"0 0 24 24",class:k(`inline mx-8 ${l.selected?"":"invisible"}`)},s[1]||(s[1]=[e("g",null,[e("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1)]),2)),e("span",{class:k(`inline ${l.selectable?"":"text-gray-300"}
                    `)},g(n(m)(`export.menu.component.${l.name}`)),3)])],10,W))),128))]),_:1},8,["position","tooltip"])),[[u]])}}}),D={class:"overflow-hidden border border-gray-200",ref:"componentEl"},J={class:"flex"},U=["aria-label"],N=["aria-label"],te=C({__name:"screen",props:{panel:{type:Object,required:!0}},setup(d){const m=d,{t:o}=L(),i=R("iApi"),w=$(),a=b(),c=b(void 0),s=b(void 0),x=b([]),u=Z("componentEl"),l=h(()=>w.componentSelectedState),y=h(()=>{let r={};return a.value&&Object.keys(l.value).forEach(t=>{r[t]={name:t,selected:l.value[t]??!1,selectable:(a.value?.config)[t]?.selectable??!0}}),r}),O=h(()=>!!a.value?.customRendererFunc),f=A(300,()=>{if(!a.value||!u.value)return;const r=u.value.querySelector(".export-canvas");a.value.make(r,u.value.clientWidth)});return F(()=>{m.panel.exportMake=f,x.value.push(H(y,()=>{f()}))}),K(()=>{a.value=i.fixture.get("export"),c.value=new ResizeObserver(f),s.value=new ResizeObserver(f),c.value.observe(i.$rootEl),s.value.observe(i.$rootEl.querySelector('[data-cy="export"]'))}),P(()=>{c.value.disconnect(),s.value.disconnect(),x.value.forEach(r=>r())}),(r,t)=>{const _=E("panel-screen");return p(),z(_,{panel:d.panel,footer:!0},{header:v(()=>[T(g(n(o)("export.title")),1)]),content:v(()=>[e("div",D,t[2]||(t[2]=[e("canvas",{class:"export-canvas !w-[100%]"},null,-1)]),512)]),footer:v(()=>[e("div",J,[e("button",{type:"button",onClick:t[0]||(t[0]=q=>a.value?.export()),class:"bg-green-700 hover:bg-green-800 text-white font-bold py-8 px-4 sm:px-16 mr-8 sm:mr-16","aria-label":n(o)("export.download")},g(n(o)("export.download")),9,U),e("button",{type:"button",onClick:t[1]||(t[1]=q=>n(f)()),class:"py-8 px-4 sm:px-16","aria-label":n(o)("export.refresh")},g(n(o)("export.refresh")),9,N),O.value?V("",!0):(p(),z(Y,{key:0,componentSelectedState:y.value,class:"ml-auto flex px-4 sm:px-8"},null,8,["componentSelectedState"]))])]),_:1},8,["panel"])}}});export{te as default};
