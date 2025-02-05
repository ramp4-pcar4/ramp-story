import{eT as $,eU as D,eX as C,eY as G,fN as j,ga as q,f6 as T,eZ as K,f8 as M,f9 as O,fa as o,e$ as l,fb as t,fc as d,f4 as E,f2 as i,f3 as S,fl as w,fm as k,fg as z,gb as I,gc as P,f5 as Z,e_ as W,f0 as F,f1 as U,fG as B,fo as H}from"./story-DTWQEBUx.js";import"./main-NJQ0hvnN.js";const J={class:"mb-10"},N=["aria-label"],V={key:0,class:"w-full h-30 hidden"},X=["alt","src"],Y=["alt","src"],Q=["alt"],R={class:"pl-5"},ee={class:"ml-auto pr-5"},ae=["content"],le={key:0,class:"rv-basemap-check absolute top-0 right-0"},te=$({__name:"item",props:{basemap:{type:Object,required:!0},tileSchema:{type:Object,required:!0}},setup(a){const{t:h}=C(),_=G("iApi"),n=j(),e=q("basemapInfo"),p=T(!1),v=K(()=>n.activeBasemapConfig),f=u=>{u.id!==v.value.id&&_?.geo.map.setBasemap(u.id)},y=u=>{u.key==="Tab"&&e.value?.matches(":focus")&&(p.value=!0,e.value._tippy.show())},r=()=>{p.value=!1,e.value._tippy.hide()},b=u=>{u.pointerType==="touch"&&(p.value=!p.value,p.value?e.value._tippy.show():e.value._tippy.hide())};return M(()=>{e.value?.addEventListener("mouseenter",()=>e.value._tippy.show()),e.value?.addEventListener("mouseleave",()=>e.value._tippy.hide()),e.value?.addEventListener("click",b),e.value?.addEventListener("keyup",y),e.value?.addEventListener("blur",r)}),O(()=>{e.value?.removeEventListener("mouseenter",()=>e.value._tippy.show()),e.value?.removeEventListener("mouseleave",()=>e.value._tippy.hide()),e.value?.removeEventListener("click",b),e.value?.removeEventListener("focus",()=>y),e.value?.removeEventListener("blur",()=>r)}),(u,s)=>{const x=o("truncate"),L=o("tippy"),c=o("focus-item");return l(),t("div",J,[d((l(),t("button",{class:"basemap-item-button bg-gray-300 w-full h-full",type:"button","aria-label":E(h)("basemap.select"),onClick:s[2]||(s[2]=m=>f(a.basemap))},[i("div",null,[i("div",{class:S(["flex hover:opacity-50 basemap-item-image basemap-item-container",a.basemap.hideThumbnail?"h-30":"h-180"])},[a.basemap.hideThumbnail?(l(),t("div",V)):a.basemap.thumbnailUrl?(l(),t("img",{key:1,class:"w-full h-180",alt:a.basemap.altText,src:a.basemap.thumbnailUrl},null,8,X)):a.tileSchema.thumbnailTileUrls&&a.tileSchema.thumbnailTileUrls.length>0&&a.basemap.layers.every(m=>m.layerType==="esri-tile")?(l(!0),t(w,{key:2},k(a.basemap.layers,m=>(l(),t("div",{key:m.id,class:"flex basemap-item-inner h-180"},[(l(!0),t(w,null,k(a.tileSchema.thumbnailTileUrls,(g,A)=>(l(),t("img",{class:"w-full",alt:a.basemap.altText,src:m.url+g,key:A},null,8,Y))),128))]))),128)):(l(),t("img",{key:3,class:"w-full bg-white h-180",alt:a.basemap.altText,src:"https://openclipart.org/image/800px/275366"},null,8,Q))],2)]),i("div",{class:S(["absolute flex w-full bg-black text-white h-30 bottom-6 items-center",a.basemap.hideThumbnail&&a.basemap.id===v.value.id?"opacity-85":"opacity-75"])},[d((l(),t("div",R,[i("span",null,z(a.basemap.name),1)])),[[x]]),i("div",ee,[d((l(),t("a",{onClick:s[0]||(s[0]=I(()=>{},["stop"])),onKeydown:s[1]||(s[1]=P(I(()=>{},["prevent"]),["enter","space"])),content:a.basemap.description,ref_key:"basemapInfo",ref:e},s[3]||(s[3]=[i("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[i("path",{d:"M0 0h24v24H0z",fill:"none"}),i("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)]),40,ae)),[[L,{placement:"bottom",trigger:"manual"}]])])],2),a.basemap.id===v.value.id&&!a.basemap.hideThumbnail?(l(),t("div",le,s[4]||(s[4]=[i("svg",{class:"fill-current w-25 h-25 relative",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[i("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1)]))):Z("",!0)],8,N)),[[c]])])}}}),se=D(te,[["__scopeId","data-v-b53a4940"]]),ie=["content"],ne={class:"h-600 overflow-y-auto"},re={class:"font-bold text-xl"},pe={key:0,class:"border-t border-b border-gray-600"},ve=$({__name:"screen",props:{panel:{type:Object}},setup(a){const{t:h}=C(),_=j(),n=q("el"),e=T([]),p=T([]),v=r=>{r.key==="Tab"&&n.value?.matches(":focus")&&n.value._tippy.show()},f=()=>{n.value._tippy.hide()};M(()=>{const r=_.config.map;e.value=r.tileSchemas,p.value=r.basemaps,n.value?.addEventListener("blur",f),n.value?.addEventListener("keyup",v)}),O(()=>{n.value?.removeEventListener("blur",f),n.value?.removeEventListener("keyup",v)});const y=r=>p.value.filter(b=>b.tileSchemaId===r);return(r,b)=>{const u=W("panel-screen"),s=o("truncate"),x=o("focus-list"),L=o("tippy");return l(),F(u,{panel:a.panel},{header:U(()=>[B(z(E(h)("basemap.title")),1)]),content:U(()=>[d((l(),t("div",{content:E(h)("panels.controls.items"),ref_key:"el",ref:n},[i("div",ne,[(l(!0),t(w,null,k(e.value,(c,m)=>(l(),t("div",{class:"mx-5",key:c.id},[i("div",{class:S((m===0?"mt-5":"mt-36")+" flex mb-5")},[d((l(),t("h3",re,[B(z(c.name),1)])),[[s]])],2),p.value.length>0?(l(),t("ul",pe,[(l(!0),t(w,null,k(y(c.id),g=>(l(),t("li",{key:g.id},[H(se,{basemap:g,tileSchema:c,class:"block relative overflow-hidden"},null,8,["basemap","tileSchema"])]))),128))])):Z("",!0)]))),128))])],8,ie)),[[x],[L,{trigger:"manual",placement:"top-end",touch:!1,maxWidth:190}]])]),_:1},8,["panel"])}}});export{ve as default};
