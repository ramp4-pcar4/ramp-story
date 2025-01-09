import{v as d,S as v,eD as h,i as x,e as U,P as k,aq as Y}from"./story-BfX8CRfG.js";var y;let c=y=class extends U{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new y({variableName:this.variableName,dimensionName:this.dimensionName,values:k(this.values),isSlice:this.isSlice})}};d([v({type:String,json:{write:!0}})],c.prototype,"variableName",void 0),d([v({type:String,json:{write:!0}})],c.prototype,"dimensionName",void 0),d([v({type:h.array(h.oneOf([h.native(Number),h.array(h.native(Number))])),json:{write:!0}})],c.prototype,"values",void 0),d([v({type:Boolean,json:{write:!0}})],c.prototype,"isSlice",void 0),c=y=d([x("esri.layers.support.DimensionalDefinition")],c);const D=c;function p(e,n,i){const s=n.shift();if(i.length===0){const t=[];i.push({sliceId:-1,multidimensionalDefinition:t})}const a=i.length;for(let t=0;t<a;t++){const r=i.shift().multidimensionalDefinition;s.values?.forEach(l=>{i.push({sliceId:-1,multidimensionalDefinition:[...r,{variableName:e,dimensionName:s.name,values:[l]}]})})}n.length&&p(e,n,i)}function j(e,n){const i=[];let s=0;return(n?e.variables.filter(a=>a.name.toLowerCase()===n.toLowerCase()):[...e.variables].sort((a,t)=>a.name>t.name?1:-1)).forEach(a=>{const t=[],r=[...a.dimensions].sort((l,m)=>l.name>m.name?-1:1);p(a.name,r,t),t.forEach(l=>{i.push({...l,sliceId:s++})})}),i}function L(e,n,i){let s=e;if(n&&(n=[...n].sort((a,t)=>a.dimensionName<t.dimensionName?-1:1)).forEach(({dimensionName:a,values:t,isSlice:r})=>{t.length&&(s=s.filter(l=>{const m=l.multidimensionalDefinition.find(o=>o.dimensionName===a);if(m==null)return!1;const u=m.values[0];return typeof u=="number"?typeof t[0]=="number"?t.includes(u):t.some(o=>o[0]<=u&&o[1]>=u):typeof t[0]=="number"?t.some(o=>u[0]<=o&&u[1]>=o):r?t.some(o=>o[0]===u[0]&&o[0]===u[1]):t.some(o=>o[0]>=u[0]&&o[0]<=u[1]||o[1]>=u[0]&&o[1]<=u[1]||o[0]<u[0]&&o[1]>u[1])}))}),s.length&&i?.start!=null&&i.end!=null){const a=i.start.getTime(),t=i.end.getTime(),r=s[0].multidimensionalDefinition.findIndex(l=>l.dimensionName==="StdTime");r>-1&&(s=s.filter(l=>{const m=l.multidimensionalDefinition[r].values[0];return a<=m&&t>=m}))}return s.map(a=>a.sliceId)}function w(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function A(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function M(e){return e.length===1?[e[0],e[0]]:[e[0],e[e.length-1]]}function S(e,n,i){if(!n?.subsetDefinitions?.length)return e;let s;if(i){const{variables:r}=n;if(r.length&&!r.includes(i))return null;const l=n.subsetDefinitions.find(m=>m.dimensionName===e.name&&m.variableName===i);if(!l?.values?.length)return e;s=M(l.values)}else s=n.dimensions.find(({name:r})=>r===e.name)?.extent;const a=s;if(!a?.length)return e;const t=e.values.filter(r=>w(r,a));return{...e,extent:[...a],values:t}}function C(e,n,i){if(!n?.subsetDefinitions?.length)return!1;const{variables:s}=n;if(s.length&&e.some(({variableName:a})=>a&&!s.includes(a)))return!0;for(let a=0;a<e.length;a++){const t=e[a],r=n.subsetDefinitions.find(l=>(t.variableName===""||l.variableName===t.variableName)&&l.dimensionName===t.dimensionName);if(r?.values.length){const l=M(r.values);if(!t.isSlice&&t.values.length===2&&!Array.isArray(t.values[0])&&t.values[0]!==t.values[1]&&i){if(!A(t.values,l))return!0}else if(t.values.some(m=>!w(m,l)))return!0}}return!1}function R(e,n){if(e==null)return{isOutside:!1};const{geometry:i,timeExtent:s,multidimensionalDefinition:a}=n;let t=null;if(s!=null&&(t=F(e,s),t==null))return{isOutside:!0};const{areaOfInterest:r}=e;if(r&&i){const l=i.type==="point"?i:i.type==="extent"?i.center:i.type==="polygon"?i.centroid:null;if(l&&!r.contains(l))return{isOutside:!0}}return a!=null&&a.length&&C(a,e,!0)?{isOutside:!0}:{isOutside:!1,intersection:{geometry:i,timeExtent:t,multidimensionalDefinition:a}}}function F(e,n){const i=e.dimensions.find(({name:r})=>r==="StdTime");if(i==null||n.start==null&&n.end==null)return n;n=n.clone();const{start:s,end:a}=n.toJSON(),t=s===a?[s]:s!=null&&a!=null?[s,a]:[s??a];return t.length===2&&i?.extent.length&&(t[0]=Math.max(t[0],i.extent[0]),t[1]=Math.min(t[1],i.extent[1]??i.extent[0]),t[1]<t[0])||C([new D({variableName:"",dimensionName:"StdTime",isSlice:t.length===1,values:t})],e,!0)?null:(n.start=new Date(t[0]),n.end=new Date(t[1]??t[0]),n)}function I(e,n={}){const{multidimensionalInfo:i,keyProperties:s}=e;if(i==null)return null;const{variableName:a,multidimensionalSubset:t,multidimensionalDefinition:r}=n,l=r!=null?r[0]?.variableName:null,m=a||l||s?.DefaultVariable;let{variables:u}=i;return t?.variables?.length&&(u=u.filter(({name:o})=>t.variables.includes(o))),m?u.find(({name:o})=>o===m)??u[0]:u[0]}function z(e,n={}){const i=I(e,n);if(!i)return null;const s=[],{dimensions:a,name:t}=i;if(a.length===0)return[new D({variableName:t,dimensionName:"",values:[],isSlice:!0})];for(let r=0;r<a.length;r++){const l=S(a[r],n.multidimensionalSubset,t);if(!l)return null;const{values:m,extent:u}=l;let o=m?.[0]??u?.[0];l.name.toLowerCase()==="stdz"&&!l.hasRanges&&u&&Math.abs(u[1])<=Math.abs(u[0])&&(o=m?.length?m[m.length-1]:u[1]),s.push(new D({variableName:t,dimensionName:l.name,values:[o],isSlice:!n.useRangeForRangedDimensionInfo||!!l.hasRanges}))}return s}function B(e){return!!e?.length&&e.some(n=>{if(n.values==null)return!0;const i=n.values.length;return i===0||i>1||!n.isSlice&&Array.isArray(n.values[0])})}function J(e,n){if(n==null||e==null)return null;let i=n.variables.map(s=>({...s}));return e?.variables?.length&&(i=i.filter(({name:s})=>e.variables.includes(s)),i.forEach(s=>{s.dimensions=s.dimensions.map(a=>S(a,e,s.name)).filter(Y)})),i}function O(e,n){const{values:i}=n;if(i?.length){const l=Array.isArray(i[0]),m=Array.isArray(e);return l!==m?-1:l&&m?i.findIndex(u=>u[0]===e[0]&&u[1]===e[1]):i.indexOf(e)}const{extent:s}=n;if(Array.isArray(e)||!s||e<s[0]||e>s[1])return-1;const a=n.interval||1;if(n.unit!=="ISO8601")return Math.round((e-s[0])/a);const t=s[0];let r=-1;switch(n.intervalUnit?.toLowerCase()||"days"){case"seconds":r=Math.round((e-t)/1e3/a);break;case"minutes":r=Math.round((e-t)/6e4/a);break;case"hours":r=Math.round((e-t)/36e5/a);break;case"days":r=Math.round((e-t)/864e5/a);break;case"months":{const l=new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear(),m=new Date(t).getUTCMonth(),u=new Date(e).getUTCMonth();r=l===0?u-m:u+11-m+12*(l-1)}break;case"years":r=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/a);break;case"decades":r=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/10/a)}return r}function N(e){let n=e.values?.length;if(n)return n;const{extent:i,unit:s}=e,a=e.interval||1,t=i?i[1]-i[0]:0;if(s!=="ISO8601")return Math.round(t/a);switch(e.intervalUnit?.toLowerCase()??"seconds"){case"seconds":n=Math.round(t/1e3/a);break;case"minutes":n=Math.round(t/6e4/a);break;case"hours":n=Math.round(t/36e5/a);break;case"days":n=Math.round(t/864e5/a);break;case"months":if(i){const r=new Date(i[1]).getUTCFullYear()-new Date(i[0]).getUTCFullYear(),l=new Date(i[0]).getUTCMonth(),m=new Date(i[1]).getUTCMonth();n=r===0?m-l+1:m+11-l+12*(r-1)+1}else n=0;break;case"years":n=i?Math.round((new Date(i[1]).getUTCFullYear()-new Date(i[0]).getUTCFullYear())/a):0;break;case"decades":n=i?Math.round((new Date(i[1]).getUTCFullYear()-new Date(i[0]).getUTCFullYear())/10/a):0;break;default:n=0}return n}function P(e,n){let i=0;const s=e[0].variableName,a=[...n.variables].sort((t,r)=>t.name>r.name?1:-1);for(let t=0;t<a.length;t++){const r=a[t],l=[...r.dimensions].sort((o,f)=>o.name>f.name?-1:1);if(r.name!==s){i+=l.map(o=>N(o)).reduce((o,f)=>o*f);continue}const m=l.map(o=>N(o)),u=l.length;for(let o=0;o<u;o++){const f=e.find(b=>b.dimensionName===l[o].name);if(f==null)return null;const g=O(f.values[0],l[o]);if(g===-1)return null;m.shift(),i+=o===u-1?g:g*m.reduce((b,T)=>b*T)}break}return i}export{R as E,L as I,P as J,B as R,I as T,j as Y,D as g,z as j,C as p,J as z};
