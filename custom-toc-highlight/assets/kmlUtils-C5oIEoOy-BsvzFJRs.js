import{P as m,V as I,y as b,C as w,f as k,gU as G,gX as S,j9 as p,gY as d,ja as x,J as v,bL as E}from"./story-BfX8CRfG.js";import{t as O}from"./jsonUtils-C64Zfu7c-CitE8NjK.js";import{O as M}from"./FeatureSet-BkVNthuN-CwS44--W.js";const j={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function T(r){const s=r.folders||[],t=s.slice(),e=new Map,n=new Map,i=new Map,f=new Map,c=new Map,u={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:f};(r.featureCollection?.layers||[]).forEach(o=>{const y=m(o);y.featureSet.features=[];const a=o.featureSet.geometryType;e.set(a,y);const g=o.layerDefinition.objectIdField;a==="esriGeometryPoint"?h(n,g,o.featureSet.features):a==="esriGeometryPolyline"?h(i,g,o.featureSet.features):a==="esriGeometryPolygon"&&h(f,g,o.featureSet.features)}),r.groundOverlays&&r.groundOverlays.forEach(o=>{c.set(o.id,o)}),s.forEach(o=>{o.networkLinkIds.forEach(y=>{const a=F(y,o.id,r.networkLinks);a&&t.push(a)})}),t.forEach(o=>{if(o.featureInfos){o.points=m(e.get("esriGeometryPoint")),o.polylines=m(e.get("esriGeometryPolyline")),o.polygons=m(e.get("esriGeometryPolygon")),o.mapImages=[];for(const y of o.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const a=u[y.type].get(y.id);a&&o[j[y.type]]?.featureSet.features.push(a);break}case"GroundOverlay":{const a=c.get(y.id);a&&o.mapImages.push(a);break}}o.fullExtent=P([o])}});const l=P(t);return{folders:s,sublayers:t,extent:l}}function q(r,s,t,e){const n=I?.findCredential(r);r=b(r,{token:n?.token});const i=w.kmlServiceUrl;return k(i,{query:{url:r,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:e})}function U(r,s,t=null,e=[]){const n=[],i={},f=s.sublayers,c=new Set(s.folders.map(u=>u.id));return f.forEach(u=>{const l=new r;if(t?l.read(u,t):l.read(u),e.length&&c.has(l.id)&&(l.visible=e.includes(l.id)),i[u.id]=l,u.parentFolderId!=null&&u.parentFolderId!==-1){const o=i[u.parentFolderId];o.sublayers||(o.sublayers=[]),o.sublayers?.unshift(l)}else n.unshift(l)}),n}function h(r,s,t){t.forEach(e=>{r.set(e.attributes[s],e)})}function C(r,s){let t;return s.some(e=>e.id===r&&(t=e,!0)),t}function F(r,s,t){const e=C(r,t);return e&&(e.parentFolderId=s,e.networkLink=e),e}async function z(r){const s=M.fromJSON(r.featureSet).features,t=r.layerDefinition,e=O(t.drawingInfo.renderer),n=E.fromJSON(r.popupInfo),i=[];for(const f of s){const c=await e.getSymbolAsync(f);f.symbol=c,f.popupTemplate=n,f.visible=!0,i.push(f)}return i}function P(r){const s=G(S),t=G(S);for(const e of r){if(e.polygons?.featureSet?.features)for(const n of e.polygons.featureSet.features)p(s,n.geometry),d(t,s);if(e.polylines?.featureSet?.features)for(const n of e.polylines.featureSet.features)p(s,n.geometry),d(t,s);if(e.points?.featureSet?.features)for(const n of e.points.featureSet.features)p(s,n.geometry),d(t,s);if(e.mapImages)for(const n of e.mapImages)p(s,n.extent),d(t,s)}return x(t,S)?void 0:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:v.WGS84}}export{P as G,z as L,U as N,T,q as j};
