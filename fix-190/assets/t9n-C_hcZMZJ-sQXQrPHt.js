import{c as r,M as i}from"./themeUtils-YjM7iIiX-UQ4p7p2T.js";import{w as u}from"./locale-Cn_GDVD_-Dc0Nd6sZ.js";const o={};async function g(e,n){const t=`${n}_${e}`;return o[t]||(o[t]=fetch(i(`./assets/${n}/t9n/messages_${e}.json`)).then(s=>(s.ok||c(),s.json())).catch(()=>c())),o[t]}function c(){throw new Error("could not fetch component message bundle")}function a(e){e.messages={...e.defaultMessages,...e.messageOverrides}}function m(){}async function d(e){e.defaultMessages=await f(e,e.effectiveLocale),a(e)}async function f(e,n){if(!r())return{};const{el:t}=e,s=t.tagName.toLowerCase().replace("calcite-","");return g(u(n,"t9n"),s)}async function p(e,n){e.defaultMessages=await f(e,n),a(e)}function w(e){e.onMessagesChange=l}function y(e){e.onMessagesChange=m}function l(){a(this)}export{y as M,w as d,d as h,p as l};
