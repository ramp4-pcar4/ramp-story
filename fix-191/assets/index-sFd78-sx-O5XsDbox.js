import{eU as _,eT as $,eV as I,fw as u,eX as z,eY as A,fV as d,e_ as O,e$ as r,fb as p,fo as v,f1 as g,f2 as l,f4 as m,f6 as M,f8 as F,f9 as L,eZ as S,fa as b,fc as V,fl as w,fm as Z,f0 as x,fn as B,f5 as H,fq as P}from"./story-DULt3Rma.js";import"./main-Bm7g2Jde.js";const T={},q={class:"border-b p-0 self-center w-2/3"};function N(c,a){return r(),p("span",q)}const k=_(T,[["render",N]]),Y=$({__name:"zoom-nav",setup(c){const{t:a}=z(),t=A("iApi"),e=d(400,!0,()=>t.geo.map.zoomIn()),s=d(400,!0,()=>t.geo.map.zoomOut());return(o,i)=>{const n=O("mapnav-button");return r(),p("div",null,[v(n,{onClickFunction:m(e),tooltip:m(a)("mapnav.zoomIn")},{default:g(()=>i[0]||(i[0]=[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[l("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),l("path",{d:"M0 0h24v24H0z",fill:"none"})],-1)])),_:1},8,["onClickFunction","tooltip"]),v(k),v(n,{onClickFunction:m(s),tooltip:m(a)("mapnav.zoomOut")},{default:g(()=>i[1]||(i[1]=[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[l("path",{d:"M19 13H5v-2h14v2z"}),l("path",{d:"M0 0h24v24H0z",fill:"none"})],-1)])),_:1},8,["onClickFunction","tooltip"])])}}}),j={class:"mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12"},W=["content"],D={class:"mapnav-section bg-white-75 hover:bg-white"},G=$({__name:"mapnav",setup(c){const a=u(),{t}=z(),e=M(),s=()=>{e.value._tippy.hide()},o=n=>{n.key==="Tab"&&e.value?.matches(":focus")&&e.value._tippy.show()};F(()=>{e.value?.addEventListener("blur",s),e.value?.addEventListener("keyup",o)}),L(()=>{e.value?.removeEventListener("blur",s),e.value?.removeEventListener("keyup",o)});const i=S(()=>a.order.map(n=>a.items[n]).filter(n=>n.componentId));return(n,h)=>{const y=b("focus-list"),E=b("tippy");return r(),p("div",j,[V((r(),p("div",{class:"flex flex-col",content:m(t)("panels.controls.items"),ref_key:"el",ref:e},[v(Y,{class:"mapnav-section bg-white-75 hover:bg-white"}),h[0]||(h[0]=l("span",{class:"py-1"},null,-1)),l("div",D,[(r(!0),p(w,null,Z(i.value,(f,C)=>(r(),p(w,{key:f.id+"button"},[(r(),x(B(f.id+"-nav-button"))),C!==i.value.length-1?(r(),x(k,{key:0,class:"mapnav-divider"})):H("",!0)],64))),128))])],8,W)),[[y],[E,{trigger:"manual",placement:"top-end",touch:!1,maxWidth:190}]])])}}}),U=_(G,[["__scopeId","data-v-41a5c7b7"]]);class J extends P{mapnavStore=u(this.$vApp.$pinia);get config(){return super.config}_parseConfig(a){if(!a)return;const t=a.items.map(e=>({id:e}));this.mapnavStore.items=t.reduce((e,s)=>(e[s.id]=s,e),{}),this.mapnavStore.order=t.map(e=>e.id),this._validateItems()}_validateItems(){const a=["geolocator","zoom","home","fullscreen"];this.mapnavStore.order.forEach(t=>{(this.$iApi.fixture.exists(t)||a.includes(t))&&(this.mapnavStore.items[t].componentId=`${t}-nav-button`)})}}const K={en:{"mapnav.zoomIn":"Zoom In","mapnav.zoomOut":"Zoom Out","mapnav.home":"Home","mapnav.fullscreen":"Full Screen","mapnav.geolocator":"Your Location","mapnav.geolocator.error.permission":"The location request was denied. Please check your browser permission settings.","mapnav.geolocator.error.internal":"Your location could not be found."},fr:{"mapnav.zoomIn":"Zoom avant","mapnav.zoomOut":"Zoom arrière","mapnav.home":"Accueil","mapnav.fullscreen":"Plein Écran","mapnav.geolocator":"Votre position","mapnav.geolocator.error.permission":"Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.","mapnav.geolocator.error.internal":"Votre emplacement n'a pu être trouvé."}};class X extends J{async added(){Object.entries(K).forEach(o=>this.$iApi.$i18n.mergeLocaleMessage(...o));const{destroy:a,el:t}=this.mount(U,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,o=>this._parseConfig(o)),s=this.$iApi.event.on(I.COMPONENT,()=>{this._parseConfig(this.config)});this.removed=()=>{e(),this.$iApi.event.off(s);const o=u(this.$vApp.$pinia),i={...o.items};Object.keys(i).forEach(n=>o.removeItem(n)),o.$reset(),a()}}}export{X as default};
