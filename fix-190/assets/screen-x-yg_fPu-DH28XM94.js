import{eT as C,eU as z,eX as H,fa as V,e$ as c,fb as x,f2 as s,fc as k,f4 as p,fg as L,f3 as q,fo as A,f1 as S,fd as B,gt as G,f5 as R,eY as K,fJ as U,eZ as Z,f6 as g,fi as J,f7 as P,f9 as W,e_ as X,f0 as O,fG as Y,gh as D,gu as F,gc as N,gb as Q,fm as ee,fl as ne,g8 as ae}from"./story-DTWQEBUx.js";import{u as $}from"./marked.esm-DgqJBp_S-CCvGNfAT.js";import"./main-NJQ0hvnN.js";const te={key:0},le=["content"],se={class:"text-lg text-left flex-grow"},oe=["innerHTML"],re=C({__name:"section",props:{helpSection:{type:Object,required:!0}},setup(r){const{t:w}=H();return(b,o)=>{const u=V("tippy");return r.helpSection.drawn?(c(),x("div",te,[s("div",null,[k((c(),x("button",{type:"button",class:"help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",onClick:o[0]||(o[0]=i=>b.$emit("expand")),content:p(w)(r.helpSection.expanded?"help.section.collapse":"help.section.expand")},[s("span",se,L(r.helpSection.header),1),s("div",{class:q(["dropdown-icon",{"transform -rotate-180":r.helpSection.expanded}])},o[1]||(o[1]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[s("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)]),2)],8,le)),[[u,{placement:"top-end",hideOnClick:!1}]]),A(G,{name:"help-item",mode:"out-in"},{default:S(()=>[k(s("div",{innerHTML:r.helpSection.info,class:"ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"},null,8,oe),[[B,r.helpSection.expanded]])]),_:1})])])):R("",!0)}}}),pe=z(re,[["__scopeId","data-v-7dc61532"]]),ie={class:"h-26 mb-8 mx-8"},de=["placeholder","aria-label"],ce={key:0},me=C({__name:"screen",props:{panel:{type:Object,required:!0}},setup(r){const w=K("iApi"),b=U(),{t:o}=H(),u=Z(()=>b.location),i=g([]),y=g([]),_=g([]),E=g(!1);let f,h;function T(e,t){const n=t.info.split(/(<[^>]*>)/);for(const[a,l]of n.entries())if(a%2===0&&l.toLowerCase().indexOf(e.toLowerCase())>-1)return!0;return!1}function j(e,t){const n=y.value[t].split(/(<[^>]*>)/);let a="";for(const[l,d]of n.entries())l%2===0?a+=d.replace(new RegExp(e,"gi"),m=>`<mark>${m}</mark>`):a+=d;i.value[t].info=a}function I(e,t){f=0,t.forEach((n,a)=>{n.info=y.value[a],n.drawn=T(e,n)||n.header.toLowerCase().indexOf(e.toLowerCase())>-1,f=n.drawn?f+1:f,n.expanded=n.drawn&&e.length>2,n.drawn&&e.length>2&&j(e,a)}),E.value=f===0}function M(e){e.expanded=!e.expanded}return J(()=>{_.value.push(P(()=>w.language,(e,t)=>{if(e===t)return;const n=new $.Renderer,a=u.value.slice(-1)==="/"?u.value:`${u.value}/`;n.image=(l,d,m)=>(l.indexOf("http")===-1&&(l=`${a}images/`+l),`<img src="${l}" alt="${m}">`),ae.get(`${a}${e}.md`).then(l=>{const d=/^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm;let m=l.data.replace(new RegExp("\r","g"),"");i.value=[];let v;for(;v=d.exec(m);)i.value.push({header:v[1],info:$(v[0].split(`
`).splice(2).join(`
`),{renderer:n}),drawn:!0,expanded:!1}),y.value.push($(v[0].split(`
`).splice(2).join(`
`),{renderer:n}))})},{immediate:!0}))}),W(()=>{_.value.forEach(e=>e())}),(e,t)=>{const n=X("panel-screen");return c(),O(n,{panel:r.panel},{header:S(()=>[Y(L(p(o)("help.title")),1)]),content:S(()=>[s("div",ie,[k(s("input",{type:"search",class:"rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",placeholder:p(o)("help.search"),"onUpdate:modelValue":t[0]||(t[0]=a=>F(h)?h.value=a:h=a),"aria-label":p(o)("help.search"),onInput:t[1]||(t[1]=a=>I(p(h),i.value)),onKeypress:t[2]||(t[2]=N(Q(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,40,de),[[D,p(h)]])]),E.value?(c(),x("div",ce,[s("p",null,L(p(o)("help.noResults")),1)])):R("",!0),(c(!0),x(ne,null,ee(i.value,(a,l)=>(c(),O(pe,{helpSection:a,key:l,onExpand:d=>M(a)},null,8,["helpSection","onExpand"]))),128))]),_:1},8,["panel"])}}});export{me as default};
