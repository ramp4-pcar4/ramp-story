import{a as s,P as u}from"./story-DULt3Rma.js";function a(n,i){return i?{...i,query:{...n??{},...i.query}}:{query:n}}function l(n){return typeof n=="string"?s(n):u(n)}function c(n,i,f){const t={};for(const e in n){if(e==="declaredClass")continue;const r=n[e];if(r!=null&&typeof r!="function")if(Array.isArray(r))t[e]=r.map(o=>c(o));else if(typeof r=="object")if(r.toJSON){const o=r.toJSON(f?.[e]);t[e]=JSON.stringify(o)}else t[e]=JSON.stringify(r);else t[e]=r}return t}export{a,c as n,l as y};
