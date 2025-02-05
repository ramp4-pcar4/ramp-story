import{o as g,a1 as U,hm as b}from"./story-DULt3Rma.js";import"./enums-CpSG_SL3-BMD3Tb1v.js";import{v as Y,H as L,V as B}from"./Texture-BCt2hphT-Tabr9F2Q.js";import{F as f,I as c}from"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Program-DLVwTiPA-DnEcW3oW.js";import{n as P}from"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import{e as R,o as k}from"./vec2f32-CVhmN3Me-DxoqVD7C.js";let m=class p{constructor(t,e,n,i,r,o,a){this.instanceId=t,this.textureKey=e,this.indexStart=n,this.indexCount=i,this.vertexStart=r,this.vertexCount=o,this.overlaps=a}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new p(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,e,n,i,r,o,a,h){t.push(e),t.push(n),t.push(i),t.push(r),t.push(o),t.push(a),t.push(h)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const e=t.readInt32(),n=t.readInt32(),i=t.readInt32(),r=t.readInt32(),o=t.readInt32(),a=t.readInt32(),h=t.readInt32();return new p(e,n,i,r,o,a,h)}};m.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;function I(s,t){if(t!==null){s.push(t.length);for(const e of t)e.serialize(s);return s}s.push(0)}function M(s,t,e){const n=s.readInt32(),i=new Array(n);for(let r=0;r<i.length;r++)i[r]=t.deserialize(s,e);return i}let H=class S{constructor(t,e){this.id=t,this.sortKey=e,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),I(t,this.records),t}static deserialize(t){const e=t.readInt32(),n=t.readF32(),i=new S(e,n);return i.records=M(t,m)??[],i}};H.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+m.byteSizeHint;const x=()=>U.getLogger("esri.views.2d.engine.webgl.Utils");function Q(s){switch(s){case f.UNSIGNED_BYTE:return 1;case f.UNSIGNED_SHORT_4_4_4_4:return 2;case f.FLOAT:return 4;default:return void x().error(new g("webgl-utils",`Unable to handle type ${s}`))}}function Z(s){switch(s){case f.UNSIGNED_BYTE:return Uint8Array;case f.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case f.FLOAT:return Float32Array;default:return void x().error(new g("webgl-utils",`Unable to handle type ${s}`))}}function v(s){const t=new Map;for(const e in s){const n=s[e];let i=0;t.set(e,n.map(r=>{const o=new P(r.name,r.count,r.type,i,0,r.normalized||!1);return i+=r.count*Y(r.type),o})),t.get(e).forEach(r=>r.stride=i)}return t}const C=s=>{const t=new Map;for(const e in s)for(const n of s[e])t.set(n.name,n.location);return t},z=s=>{const t={};return s.forEach((e,n)=>t[n]=e?.length?e[0].stride:0),t},d=new Map,tt=(s,t)=>{if(!d.has(s)){const e=v(t),n={strides:z(e),bufferLayouts:e,attributes:C(t)};d.set(s,n)}return d.get(s)},et=s=>s.includes("data:image/svg+xml");function nt(s){const t=[];for(let e=0;e<s.length;e++)t.push(s.charCodeAt(e));return t}function st(s,t,e){const n=new L(t.width,t.height);return n.dataType=t.dataType,t.depth&&(n.depth=t.depth),t.flipped&&(n.flipped=t.flipped),t.hasMipmap&&(n.hasMipmap=t.hasMipmap),n.internalFormat=t.internalFormat,t.isImmutable&&(n.isImmutable=t.isImmutable),t.isOpaque&&(n.isOpaque=t.isOpaque),t.maxAnisotropy&&(n.maxAnisotropy=t.maxAnisotropy),n.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(n.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(n.samplingMode=t.samplingMode),t.target&&(n.target=t.target),n.uniform=t.uniform,t.unpackAlignment&&(n.unpackAlignment=t.unpackAlignment),t.wrapMode&&(n.wrapMode=t.wrapMode),new B(s,n,e)}function it(s){return"url"in s&&"urlHash"in s?{...s,url:""}:s}class l{constructor(t,e,n,i){this.transformedX=0,this.transformedY=0,this.center=R(t,e),this.centerT=k(),this.halfWidth=n/2,this.halfHeight=i/2,this.width=n,this.height=i}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new l(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,e=4){const n=Math.abs(t.centerT[0]-this.centerT[0]),i=Math.abs(t.centerT[1]-this.centerT[1]),r=(t.halfWidth+this.halfWidth+e)/n,o=(t.halfHeight+this.halfHeight+e)/i,a=Math.min(r,o);return Math.log2(a)}extend(t){const e=Math.min(this.xmin,t.xmin),n=Math.min(this.ymin,t.ymin),i=Math.max(this.xmax,t.xmax)-e,r=Math.max(this.ymax,t.ymax)-n,o=e+i/2,a=n+r/2;this.width=i,this.height=r,this.halfWidth=i/2,this.halfHeight=r/2,this.x=o,this.y=a}static deserialize(t){const e=t.readF32(),n=t.readF32(),i=t.readInt32(),r=t.readInt32();return new l(e,n,i,r)}}const F=new Float32Array(1),O=new Uint32Array(F.buffer);function D(s){return F[0]=s,O[0]}function rt(s,t){return 65535&s|t<<16}function y(s){const t=D(s),e=t>>>31;let n=t>>>23&255,i=8388607&t;return n-=127,n>15?e<<15|31744:n<-25?0:(n<-14&&(i+=8388608,i/=2**(-14-n),n=-15),n+=15,i/=8192,i=G(i,1023),e<<15|n<<10|i)}function G(s,t){const e=Math.floor(s),n=s-e;return e<t&&(n>.5||n===.5&&e%2==1)?e+1:e}function T(s){let t=s>>>15,e=s>>10&31,n=1023&s;return t=t?-1:1,e-=15,n/=1024,e>-15?n+=1:e=-14,t*2**e*n}function ot(s){const t=s.map(({name:e,count:n,type:i})=>`${e}.${n}.${i}`).join(",");return b(t)}function u(s,t,e,n,i,r,o){if(s.primitiveName===t){let a=n?.readWithDefault(i,r,s[e]&&o);return s.type==="text"&&(a=a.toString()),void(s[e]=a)}if("type"in s&&s.type!=null){if(s.effects)for(const a of s.effects)u(a,t,e,n,i,r,o);switch(s.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(s.symbolLayers)for(const a of s.symbolLayers)u(a,t,e,n,i,r,o);break;case"CIMTextSymbol":s.symbol&&u(s.symbol,t,e,n,i,r,o);break;case"CIMHatchFill":s.lineSymbol&&u(s.lineSymbol,t,e,n,i,r,o);break;case"CIMPictureMarker":case"CIMCharacterMarker":case"CIMVectorMarker":if(s.markerPlacement&&u(s.markerPlacement,t,e,n,i,r,o),s.type==="CIMVectorMarker"&&s.markerGraphics)for(const a of s.markerGraphics)u(a,t,e,n,i,r,o),u(a.symbol,t,e,n,i,r,o)}}}const W=400;function at(s){const t=s.width;return s.effects!=null?W:Math.max(1.25*t,8)}function ct(s,t,e,n){const i=e.packPrecisionFactor??1;switch(e.type){case c.BYTE:if(e.count===1)s.setInt8(n+e.offset,t*i);else for(let r=0;r<e.count;r++){const o=r*Int8Array.BYTES_PER_ELEMENT;s.setInt8(n+e.offset+o,t[r]*i)}break;case c.UNSIGNED_BYTE:if(e.count===1)s.setUint8(n+e.offset,t*i);else for(let r=0;r<e.count;r++){const o=r*Uint8Array.BYTES_PER_ELEMENT;s.setUint8(n+e.offset+o,t[r]*i)}break;case c.SHORT:if(e.count===1)s.setInt16(n+e.offset,t*i,!0);else for(let r=0;r<e.count;r++){const o=r*Int16Array.BYTES_PER_ELEMENT;s.setInt16(n+e.offset+o,t[r]*i,!0)}break;case c.UNSIGNED_SHORT:if(e.count===1)s.setUint16(n+e.offset,t*i,!0);else for(let r=0;r<e.count;r++){const o=r*Uint16Array.BYTES_PER_ELEMENT;s.setUint16(n+e.offset+o,t[r]*i,!0)}break;case c.INT:if(e.count===1)s.setInt32(n+e.offset,t*i,!0);else for(let r=0;r<e.count;r++){const o=r*Int32Array.BYTES_PER_ELEMENT;s.setInt32(n+e.offset+o,t[r]*i,!0)}break;case c.UNSIGNED_INT:if(e.count===1)s.setUint32(n+e.offset,t*i,!0);else for(let r=0;r<e.count;r++){const o=r*Uint32Array.BYTES_PER_ELEMENT;s.setUint32(n+e.offset+o,t[r]*i,!0)}break;case c.FLOAT:if(e.count===1)s.setFloat32(n+e.offset,t*i,!0);else for(let r=0;r<e.count;r++){const o=r*Float32Array.BYTES_PER_ELEMENT;s.setFloat32(n+e.offset+o,t[r]*i,!0)}break;case c.HALF_FLOAT:if(e.count===1)s.setUint16(n+e.offset,y(t*i),!0);else for(let r=0;r<e.count;r++){const o=r*Uint16Array.BYTES_PER_ELEMENT;s.setUint16(n+e.offset+o,y(t[r]*i),!0)}}}function ht(s,t,e){switch(t.type){case c.BYTE:{if(t.count===1)return s.getInt8(e+t.offset);const n=[];for(let i=0;i<t.count;i++){const r=i*Int8Array.BYTES_PER_ELEMENT;n.push(s.getInt8(e+t.offset+r))}return n}case c.UNSIGNED_BYTE:{if(t.count===1)return s.getUint8(e+t.offset);const n=[];for(let i=0;i<t.count;i++){const r=i*Uint8Array.BYTES_PER_ELEMENT;n.push(s.getUint8(e+t.offset+r))}return n}case c.SHORT:{if(t.count===1)return s.getInt16(e+t.offset,!0);const n=[];for(let i=0;i<t.count;i++){const r=i*Int16Array.BYTES_PER_ELEMENT;n.push(s.getInt16(e+t.offset+r,!0))}return n}case c.UNSIGNED_SHORT:{if(t.count===1)return s.getUint16(e+t.offset,!0);const n=[];for(let i=0;i<t.count;i++){const r=i*Uint16Array.BYTES_PER_ELEMENT;n.push(s.getUint16(e+t.offset+r,!0))}return n}case c.INT:{if(t.count===1)return s.getInt32(e+t.offset,!0);const n=[];for(let i=0;i<t.count;i++){const r=i*Int32Array.BYTES_PER_ELEMENT;n.push(s.getInt32(e+t.offset+r,!0))}return n}case c.UNSIGNED_INT:{if(t.count===1)return s.getUint32(e+t.offset,!0);const n=[];for(let i=0;i<t.count;i++){const r=i*Uint32Array.BYTES_PER_ELEMENT;n.push(s.getUint32(e+t.offset+r,!0))}return n}case c.FLOAT:{if(t.count===1)return s.getFloat32(e+t.offset,!0);const n=[];for(let i=0;i<t.count;i++){const r=i*Float32Array.BYTES_PER_ELEMENT;n.push(s.getFloat32(e+t.offset+r,!0))}return n}case c.HALF_FLOAT:{if(t.count===1)return T(s.getUint16(e+t.offset,!0));const n=[];for(let i=0;i<t.count;i++){const r=i*Uint16Array.BYTES_PER_ELEMENT;n.push(T(s.getUint16(e+t.offset+r,!0)))}return n}}}class w{constructor(t,e,n,i,r,o,a,h,E=[]){this.entityTexel=t,this.anchorX=e,this.anchorY=n,this.directionX=i,this.directionY=r,this.maxScale=o,this.minScale=a,this.referenceBounds=h,this.bounds=E}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),this.referenceBounds===null?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),I(t,this.bounds)}static deserialize(t){const e=t.readInt32(),n=t.readF32(),i=t.readF32(),r=t.readF32(),o=t.readF32(),a=t.readF32(),h=t.readF32(),E=t.readF32(),_=t.readF32(),N=t.readF32(),A=M(t,l)??[];return new w(e,n,i,r,o,a,h,{size:E,offsetX:_,offsetY:N},A)}}export{it as $,Q as C,m as E,tt as G,st as K,H as M,w as T,rt as V,et as W,nt as X,ot as Z,ct as e,u as h,l,M as p,ht as s,at as t,Z as v};
