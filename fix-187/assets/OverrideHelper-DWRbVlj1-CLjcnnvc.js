import{P as d,er as M,ar as C,a1 as b,o as I}from"./story-Xt2MKhXr.js";import{x}from"./colorUtils-Cthpxcks-C3D7fOzw.js";import{b as k,S as v,k as O,d as h,K as S,Z as g,x as N}from"./utils-SPbpQbmm-3vva4Dqy.js";import{q as P,T as w,F as T,v as G}from"./quantizationUtils-bJy1cRwp-CsEktmVt.js";function E(c,e,r,t,s){if(c==null)return null;const i=c.referencesGeometry()&&s?L(e,t,s):e,a=c.repurposeFeature(i);try{return c.evaluate({...r,$feature:a},c.services)}catch(o){return b.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",o),null}}const m=new Map;function L(c,e,r){const{transform:t,hasZ:s,hasM:i}=r;m.has(e)||m.set(e,A(e));const a=m.get(e)(c.geometry,t,s,i);return{...c,geometry:a}}function A(c){const e={};switch(c){case"esriGeometryPoint":return(r,t,s,i)=>G(t,e,r,s,i);case"esriGeometryPolygon":return(r,t,s,i)=>T(t,e,r,s,i);case"esriGeometryPolyline":return(r,t,s,i)=>w(t,e,r,s,i);case"esriGeometryMultipoint":return(r,t,s,i)=>P(t,e,r,s,i);default:return b.getLogger("esri.views.2d.support.arcadeOnDemand").error(new I("mapview-arcade",`Unable to handle geometryType: ${c}`)),r=>r}}const D=c=>{if(!c)return[0,0,0,0];const{r:e,g:r,b:t,a:s}=c;return[e,r,t,255*s]};class n{static findApplicableOverrides(e,r,t){if(e&&r){if(e.primitiveName){let s=!1;for(const i of t)if(i.primitiveName===e.primitiveName){s=!0;break}if(!s)for(const i of r)i.primitiveName===e.primitiveName&&t.push(i)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)n.findApplicableOverrides(s,r,t);if(e.symbolLayers)for(const s of e.symbolLayers)n.findApplicableOverrides(s,r,t);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const s of e.effects)n.findApplicableOverrides(s,r,t);if(e.markerPlacement&&n.findApplicableOverrides(e.markerPlacement,r,t),e.type==="CIMVectorMarker"){if(e.markerGraphics)for(const s of e.markerGraphics)n.findApplicableOverrides(s,r,t),n.findApplicableOverrides(s.symbol,r,t)}else e.type==="CIMCharacterMarker"?n.findApplicableOverrides(e.symbol,r,t):e.type==="CIMHatchFill"?n.findApplicableOverrides(e.lineSymbol,r,t):e.type==="CIMPictureMarker"&&n.findApplicableOverrides(e.animatedSymbolProperties,r,t)}}}static findEffectOverrides(e,r){if(!e)return null;if(e.type==="CIMGeometricEffectDashes"&&k(e),!r||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const t=v(e),s=e.primitiveName,i=[];for(const a of r)a.primitiveName===s&&i.push(v(a));return{type:"cim-effect-param",effect:t,overrides:O(i)}}static async resolveSymbolOverrides(e,r,t,s,i,a,o){if(!e?.symbol)return null;let{symbol:p,primitiveOverrides:l}=e;const y=!!l;if(!y&&!s)return p;p=d(p),l=d(l);let u=!0;if(r||(r={attributes:{}},u=!1),y){if(u||(l=l.filter(f=>!f.valueExpressionInfo?.expression.includes("$feature"))),o||(l=l.filter(f=>!f.valueExpressionInfo?.expression.includes("$view"))),l.length>0){const f={spatialReference:t,fields:h(r.attributes),geometryType:i};await n.createRenderExpressions(l,f),n.evaluateOverrides(l,r,i??"esriGeometryPoint",a,o)}n.applyOverrides(p,l)}return s&&n.applyDictionaryTextOverrides(p,r,s,null),p}static async createRenderExpressions(e,r){const t=[];for(const s of e){const i=s.valueExpressionInfo;if(!i||n._expressionToRenderExpression.has(i.expression))continue;const a=M(i.expression,r.spatialReference,r.fields);t.push(a),a.then(o=>n._expressionToRenderExpression.set(i.expression,o))}t.length>0&&await Promise.all(t)}static evaluateOverrides(e,r,t,s,i){const a={$view:{scale:i?.scale}};for(const o of e){o.value&&typeof o.value=="object"&&x(o.value)&&(o.propertyName==="Color"||o.propertyName==="StrokeColor")&&(o.value=D(o.value));const p=o.valueExpressionInfo;if(!p)continue;const l=n._expressionToRenderExpression.get(p.expression);l&&(o.value=E(l,r,a,t,s))}}static applyDictionaryTextOverrides(e,r,t,s,i="Normal"){if(e?.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const a=e.symbolLayers;if(!a)return;for(const o of a)o&&o.type==="CIMVectorMarker"&&n.applyDictionaryTextOverrides(o,r,t,s,e.type==="CIMTextSymbol"?e.textCase:i)}break;case"CIMVectorMarker":{const a=e.markerGraphics;if(!a)return;for(const o of a)o&&n.applyDictionaryTextOverrides(o,r,t,s)}break;case"CIMMarkerGraphic":{const a=e.textString;if(a&&a.includes("[")){const o=S(a,t);e.textString=g(r,o,s,i)}}}}static applyOverrides(e,r,t,s){if(e.primitiveName){for(const i of r)if(i.primitiveName===e.primitiveName){const a=N(i.propertyName);if(s&&s.push({cim:e,nocapPropertyName:a,value:e[a]}),t){let o=!1;for(const p of t)p.primitiveName===e.primitiveName&&(o=!0);o||t.push(i)}i.value!=null&&(e[a]=i.value)}}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const i of e.effects)n.applyOverrides(i,r,t,s);if(e.symbolLayers)for(const i of e.symbolLayers)n.applyOverrides(i,r,t,s);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const i of e.effects)n.applyOverrides(i,r,t,s);if(e.type==="CIMVectorMarker"&&e.markerGraphics)for(const i of e.markerGraphics)n.applyOverrides(i,r,t,s),n.applyOverrides(i.symbol,r,t,s)}}static restoreOverrides(e){for(const r of e)r.cim[r.nocapPropertyName]=r.value}static buildOverrideKey(e){let r="";for(const t of e)t.value!==void 0&&(r+=`${t.primitiveName}${t.propertyName}${JSON.stringify(t.value)}`);return r}static toValue(e,r){if(e==="DashTemplate")return r.split(" ").map(t=>Number(t));if(e==="Color"){const t=new C(r).toRgba();return t[3]*=255,t}return r}}n._expressionToRenderExpression=new Map;export{n as c};
