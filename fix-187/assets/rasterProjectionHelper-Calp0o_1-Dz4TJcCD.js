const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngine-CdPoFSE4-CfAzuqmv.js","./story-Xt2MKhXr.js","./main-DzSgAEEU.js","./main-Blpl9308.css","./story-D1FfHn4O.css","./geometryEngineBase-DueYg7ux-CCeespPx.js","./_commonjsHelpers-BITg13Vk-KnjfkSck.js","./hydrated-CplJC1Fs-B4o5-c7v.js"])))=>i.map(i=>d[i]);
import{_ as Nn}from"./main-DzSgAEEU.js";import{n as Y,p as O,aq as En,l as tn,w as N,aG as _n,o as gn,i3 as T,i4 as v,i5 as an,i6 as vn,i7 as Tn,J as yn}from"./story-Xt2MKhXr.js";import{_ as B,W as Cn,K as W,J as Wn,Y as rn}from"./projection-BA9M1R7d-DL-dPt4S.js";var nn;function dn(n,t,i){return!Wn(n,t,i)}function z(n,t,i){const o=dn(n,t,i);if(o&&!B())throw new gn("rasterprojectionhelper-project","projection engine is not loaded");return o}(function(n){n[n.None=0]="None",n[n.North=1]="North",n[n.South=2]="South",n[n.Both=3]="Both"})(nn||(nn={}));const ln=(n,t,i,o=0)=>{if(i[0]===1)return[0,0];let a=1,e=-1,s=1,c=-1;for(let f=0;f<n.length;f+=2)isNaN(n[f])||(a=a>n[f]?n[f]:a,e=e>n[f]?e:n[f],s=s>n[f+1]?n[f+1]:s,c=c>n[f+1]?c:n[f+1]);const{cols:l,rows:r}=t,u=(e-a)/l/i[0],w=(c-s)/r/i[1],g=2*o;let x=0,h=!1,m=[0,0];for(let f=0;f<l-3;f++){for(let M=0;M<r-3;M++){const y=f*r*2+2*M,p=(n[y]+n[y+4]+n[y+4*r]+n[y+4*r+4])/4,d=(n[y+1]+n[y+5]+n[y+4*r+1]+n[y+4*r+5])/4,R=Math.abs((p-n[y+2*r+2])/u),b=Math.abs((d-n[y+2*r+3])/w);if(R+b>x&&(x=R+b,m=[R,b]),g&&x>g){h=!0;break}}if(h)break}return m},zn={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},F=32,J=4,$=J,Z=new Map,H=new Map,K=500;let X=null;async function Dn(){X&&B()||(B()||await Cn(),X=await Nn(()=>import("./geometryEngine-CdPoFSE4-CfAzuqmv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url))}function Ln(n,t,i){return z(n.spatialReference,t),i?rn(t,n.spatialReference,n):rn(n.spatialReference,t,n)}function Qn(n,t,i,o=null){const a=n.spatialReference;if(!a||!t||a.equals(t))return n;z(a,t,o);const e=i.center,s=new Y({xmin:e.x-n.x/2,xmax:e.x+n.x/2,ymin:e.y-n.y/2,ymax:e.y+n.y/2,spatialReference:a}),c=W(s,t,o),l=E(t);return c==null||l!=null&&c.width>=l?q(n,a,t):{x:c.width,y:c.height}}function q(n,t,i){const o=O(t)/O(i);return{x:n.x*o,y:n.y*o}}function cn(n,t,i){const{spatialReference:o}=i;if(!o||!t||o.equals(t))return n;if(o.isGeographic&&t.isGeographic)return q(n,o,t);if(z(o,t),!X)throw new gn("raster-projection-helper:project-dataset-resolution","geometry engine is not loaded");let{x:a,y:e}=n;const s=(a+e)/2*O(o);let c=1;s>30&&(c=30/s,a*=c,e*=c);const l=256,r=a*l/2,u=e*l/2,{x:w,y:g}=i.center,x=[];for(let S=0;S<=l;S++)x.push([w-r,g-u+S*e]);for(let S=1;S<=l;S++)x.push([w-r+S*a,g+u]);for(let S=1;S<=l;S++)x.push([w+r,g+u-S*e]);for(let S=1;S<l;S++)x.push([w+r-S*a,g-u]);x.push(x[0]);const h=new tn({rings:[x],spatialReference:o}),m=W(h,t);if(!m)return q(n,o,t);const f=m.extent,M=E(t);if(f==null||M!=null&&f.width>=M)return q(n,o,t);const y=X.planarArea(m),p=a*e*l*l,d=Math.sqrt(y/p)/c,R={x:f.width/c/l,y:f.height/c/l},b={x:a*d,y:e*d},G=R.x*R.y;return Math.abs(G-b.x*b.y)/G<.1?R:b}function k(n,t=.01){return O(n)?t/O(n):0}function fn(n,t,i=null,o=!0){const a=n.spatialReference;if(a.equals(t))return n;z(a,t,i);const e=W(n,t,i);return o&&e&&wn([n],[e],a,t),e}function wn(n,t,i,o){const a=D(i,!0),e=D(o,!0),s=k(i,K),c=k(o,K);if(s&&a!=null&&e!=null)for(let l=0;l<n.length;l++){const r=t[l];if(!r)continue;const{x:u}=n[l],{x:w}=r;w>=e[1]-c&&Math.abs(u-a[0])<s?r.x-=e[1]-e[0]:w<=e[0]+c&&Math.abs(u-a[1])<s&&(r.x+=e[1]-e[0])}}function On(n){const{inSR:t,outSR:i,datumTransformation:o,preferPE:a}=n;if(t.equals(i)){const{points:e}=en(n,null);return e}return t.isWebMercator&&i.isWGS84||t.isWGS84&&i.isWebMercator?An(n):z(t,i,o)&&a&&(t.isGeographic||I(t)!=null)?jn(n):In(n)}function In(n){const{points:t}=en(n,null),{inSR:i,outSR:o,datumTransformation:a}=n,e=t.map(c=>new N(c[0],c[1],i)),s=W(e,o,a);return a&&wn(e,s,i,o),s.map(c=>c?[c.x,c.y]:[NaN,NaN])}function jn(n){const{inSR:t,outSR:i,datumTransformation:o}=n,a=I(t),{points:e,mask:s}=en(n,a);if(!t.isGeographic){const l=t.wkid?T.coordsys(t.wkid):T.fromString(t.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,t.wkt2||t.wkt);an.projToGeog(l,e.length,e)}if(o!=null&&o.steps.length){let l;if(i.isGeographic&&(l=e.map(([r])=>r>179.9955?1:r<-179.9955?-1:0)),o.steps.forEach(r=>{const u=r.wkid?T.geogtran(r.wkid):T.fromString(v.PE_TYPE_GEOGTRAN,r.wkt);vn.geogToGeog(u,e.length,e,null,r.isInverse?v.PE_TRANSFORM_2_TO_1:v.PE_TRANSFORM_1_TO_2)}),l)for(let r=0;r<e.length;r++){const u=l[r],w=e[r][0],g=w>179.9955?1:w<-179.9955?-1:0;u&&g&&u!==g&&(e[r][0]=u>0?w+360:w-360)}}if(!i.isGeographic){const l=I(i,!0),r=l!=null&&l.isEnvelope?[l.bbox[1],l.bbox[3]]:[-90,90];Yn(e,r);const u=i.wkid?T.coordsys(i.wkid):T.fromString(i.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,i.wkt2||i.wkt);an.geogToProj(u,e.length,e)}let c=e;if(s&&e.length!==s.length){c=[];for(let l=0,r=0;l<s.length;l++)s[l]?c.push(e[r++]):c.push([NaN,NaN])}return c}function An(n){const{cols:t,rows:i,xres:o,yres:a,usePixelCenter:e,inSR:s,outSR:c}=n;let{xmin:l,ymax:r}=n;e&&(l+=o/2,r-=a/2);const u=[],w=[],g=Math.max(t,i);for(let h=0;h<g;h++){const m=l+o*Math.min(t,h),f=r-a*Math.min(i,h),M=W(new N({x:m,y:f,spatialReference:s}),c);h<=t&&u.push(M.x),h<=i&&w.push(M.y)}const x=[];for(let h=0;h<t;h++)for(let m=0;m<i;m++)x.push([u[h],w[m]]);return x}function I(n,t=!1){let i=n.wkid||n.wkt2||n.wkt;if(!i||n.isGeographic)return null;if(i=String(i),Z.has(i)){const s=Z.get(i);return t?s?.gcs:s?.pcs}const o=n.wkid?T.coordsys(n.wkid):T.fromString(n.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,n.wkt2||n.wkt),a=un(o,k(n,1e-4)),e=un(o,0,!0);return Z.set(i,{pcs:a,gcs:e}),t?e:a}function un(n,t=0,i=!1){const o=Tn.generate(n),a=i?n.horizonGcsGenerate():n.horizonPcsGenerate();if(!o||!a?.length)return null;let e=!1,s=a.find(f=>f.getInclusive()===1&&f.getKind()===1);if(!s){if(s=a.find(f=>f.getInclusive()===1&&f.getKind()===0),!s)return null;e=!0}const c=i?0:(o.getNorthPoleLocation()===2?1:0)|(o.getSouthPoleLocation()===2?2:0),l=o.isPannableRectangle(),r=s.getCoord();if(e)return{isEnvelope:e,isPannable:l,vertices:r,coef:null,bbox:[r[0][0]-t,r[0][1]-t,r[1][0]+t,r[1][1]+t],poleLocation:c};let u=0;const w=[];let[g,x]=r[0],[h,m]=r[0];for(let f=0,M=r.length;f<M;f++){u++,u===M&&(u=0);const[y,p]=r[f],[d,R]=r[u];if(R===p)w.push([y,d,p,R,2]);else{const b=(d-y)/(R-p||1e-4),G=y-b*p;p<R?w.push([b,G,p,R,0]):w.push([b,G,R,p,1])}g=g<y?g:y,x=x<p?x:p,h=h>y?h:y,m=m>p?m:p}return{isEnvelope:!1,isPannable:l,vertices:r,coef:w,bbox:[g,x,h,m],poleLocation:c}}function en(n,t){const i=[],{cols:o,rows:a,xres:e,yres:s,usePixelCenter:c}=n;let{xmin:l,ymax:r}=n;if(c&&(l+=e/2,r-=s/2),t==null){for(let x=0;x<o;x++)for(let h=0;h<a;h++)i.push([l+e*x,r-s*h]);return{points:i}}const u=new Uint8Array(o*a);if(t.isEnvelope){const{bbox:[x,h,m,f]}=t;for(let M=0,y=0;M<o;M++){const p=l+e*M,d=t.isPannable||p>=x&&p<=m;for(let R=0;R<a;R++,y++){const b=r-s*R;d&&b>=h&&b<=f&&(i.push([p,b]),u[y]=1)}}return{points:i,mask:u}}const w=t.coef,g=[];for(let x=0;x<a;x++){const h=r-s*x,m=[],f=[];for(let y=0;y<w.length;y++){const[p,d,R,b,G]=w[y];if(h===R&&R===b)m.push(p),m.push(d),f.push(2),f.push(2);else if(h>=R&&h<=b){const S=p*h+d;m.push(S),f.push(G)}}let M=m;if(m.length>2){let y=f[0]===2?0:f[0],p=m[0];M=[];for(let d=1;d<f.length;d++)f[d]===2&&d!==f.length-1||(f[d]!==y&&(M.push(y===0?Math.min(p,m[d-1]):Math.max(p,m[d-1])),y=f[d],p=m[d]),d===f.length-1&&M.push(f[d]===0?Math.min(p,m[d]):Math.max(p,m[d])));M.sort((d,R)=>d-R)}else m[0]>m[1]&&(M=[m[1],m[0]]);g.push(M)}for(let x=0,h=0;x<o;x++){const m=l+e*x;for(let f=0;f<a;f++,h++){const M=r-s*f,y=g[f];if(y.length===2)m>=y[0]&&m<=y[1]&&(i.push([m,M]),u[h]=1);else if(y.length>2){let p=!1;for(let d=0;d<y.length;d+=2)if(m>=y[d]&&m<=y[d+1]){p=!0;break}p&&(i.push([m,M]),u[h]=1)}}}return{points:i,mask:u}}function Yn(n,t){const[i,o]=t;for(let a=0;a<n.length;a++){const e=n[a][1];(e<i||e>o)&&(n[a]=[NaN,NaN])}}function Mn(n,t){const i=E(n[0].spatialReference);if(n.length<2||i==null||(t=t??k(n[0].spatialReference),(n=n.filter(c=>c.width>t)).length===1))return n[0];let{xmin:o,xmax:a,ymin:e,ymax:s}=n[0];for(let c=1;c<n.length;c++){const l=n[c];a=l.xmax+i*c,e=Math.min(e,l.ymin),s=Math.max(s,l.ymax)}return new Y({xmin:o,xmax:a,ymin:e,ymax:s,spatialReference:n[0].spatialReference})}function Rn(n,t,i=null,o=!0){const a=n.spatialReference;if(a.equals(t))return n;const e=Sn(n),s=E(a,!0),c=E(t);if(e===0||s==null||c==null){const r=xn(n,t,i,o);if(s==null&&c!=null&&Math.abs(r.width-c)<k(t)&&B()){const u=I(a);if(u!=null&&u.poleLocation===nn.None&&n.width<(u.bbox[2]-u.bbox[0])/2)return qn(n,t)||r}return r}const l=n.clone().normalize();if(l.length===1&&n.xmax<s&&n.xmax-s/2>k(a)){const{xmin:r,xmax:u}=n;for(let w=0;w<=e;w++){const g=w===0?r:-s/2,x=w===e?u-s*w:s/2;l[w]=new Y({xmin:g,xmax:x,ymin:n.ymin,ymax:n.ymax,spatialReference:a})}}return Mn(l.map(r=>xn(r,t,i,o)).filter(En))}function Un(n,t,i){if(n.type==="extent"){const{xmin:o,ymin:a,xmax:e,ymax:s,spatialReference:c}=n;n=new tn({rings:[[[o,s],[e,s],[e,a],[o,a],[o,s]]],spatialReference:c})}return n.spatialReference.equals(t)?n:(z(n.spatialReference,t,i),W(n,t,i))}function qn(n,t){const i=E(t);if(i==null)return null;let{xmin:o,ymin:a,xmax:e,ymax:s}=n;const c=n.spatialReference,l=new tn({spatialReference:c,rings:[[[o,a],[e,a],[e,s],[o,s],[o,a]]]}),r=W(l,t);if(r.rings.length!==2||!r.rings[0].length||!r.rings[1].length)return null;const{rings:u}=r,w=k(c),g=new Y({spatialReference:t});for(let x=0;x<2;x++){o=e=u[x][0][0],a=s=u[x][0][1];for(let h=0;h<u[x].length;h++)o=o>u[x][h][0]?u[x][h][0]:o,e=e<u[x][h][0]?u[x][h][0]:e,a=a>u[x][h][1]?u[x][h][1]:a,s=s<u[x][h][1]?u[x][h][1]:s;if(x===0)g.ymin=a,g.ymax=s,g.xmin=o,g.xmax=e;else if(g.ymin=Math.min(g.ymin,a),g.ymax=Math.max(g.ymax,s),Math.abs(e-i/2)<w)g.xmin=o,g.xmax=g.xmax+i;else{if(!(Math.abs(o+i/2)<w))return null;g.xmax=e+i}}return g}function xn(n,t,i=null,o=!0,a=!0){const e=n.spatialReference;if(e.equals(t)||!t)return n;z(e,t,i);const s=W(n,t,i);if(a&&t.isWebMercator&&s&&(s.ymax=Math.min(20037508342787e-6,s.ymax),s.ymin=Math.max(-20037508342787e-6,s.ymin),s.ymin>=s.ymax))return null;if(!o||!s)return s;const c=D(e,!0),l=D(t,!0);if(c==null||l==null)return s;const r=k(e,.001),u=k(e,K),w=k(t,.001);if(Math.abs(s.xmin-l[0])<w&&Math.abs(s.xmax-l[1])<w){const g=Math.abs(n.xmin-c[0]),x=Math.abs(c[1]-n.xmax);if(g<r&&x>u){s.xmin=l[0];const h=[];h.push(new N(n.xmax,n.ymin,e)),h.push(new N(n.xmax,(n.ymin+n.ymax)/2,e)),h.push(new N(n.xmax,n.ymax,e));const m=h.map(f=>fn(f,t,i)).filter(f=>!isNaN(f?.x)).map(f=>f.x);s.xmax=Math.max.apply(null,m)}if(x<r&&g>u){s.xmax=l[1];const h=[];h.push(new N(n.xmin,n.ymin,e)),h.push(new N(n.xmin,(n.ymin+n.ymax)/2,e)),h.push(new N(n.xmin,n.ymax,e));const m=h.map(f=>fn(f,t,i)).filter(f=>!isNaN(f?.x)).map(f=>f.x);s.xmin=Math.min.apply(null,m)}}else{const g=k(t,.001);Math.abs(s.xmin-l[0])<g&&(s.xmin=l[0]),Math.abs(s.xmax-l[1])<g&&(s.xmax=l[1])}return s}function E(n,t=!1){if(!n)return null;const i=t?20037508342787e-6:20037508342788905e-9;return n.isWebMercator?2*i:n.wkid&&n.isGeographic?360:2*zn[n.wkid]||null}function D(n,t=!1){if(n.isGeographic)return[-180,180];const i=E(n,t);return i!=null?[-i/2,i/2]:null}function hn(n,t,i,o){let a=(n-t)/i;return a-Math.floor(a)!=0?a=Math.floor(a):o&&(a-=1),a}function Sn(n,t=!1){const i=E(n.spatialReference);if(i==null)return 0;const o=t?0:-(i/2),a=k(n.spatialReference),e=!t&&Math.abs(n.xmax-i/2)<a?i/2:n.xmax,s=!t&&Math.abs(n.xmin+i/2)<a?-i/2:n.xmin;return hn(e,o,i,!0)-hn(s,o,i,!1)}function $n(n){const t=n.storageInfo.origin.x,i=E(n.spatialReference,!0);if(i==null)return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const o=i/2,{nativePixelSize:a,storageInfo:e,extent:s}=n,{maximumPyramidLevel:c,blockWidth:l,pyramidScalingFactor:r}=e;let u=a.x;const w=[],g=n.transform!=null&&n.transform.type==="gcs-shift",x=t+(g?0:o),h=g?i-t:o-t;for(let m=0;m<=c;m++){const f=(s.xmax-t)/u/l,M=f-Math.floor(f)==0?f:Math.ceil(f),y=h/u/l,p=y-Math.floor(y)==0?y:Math.ceil(y),d=Math.floor(x/u/l),R=Math.round(x/u)%l,b=(l-Math.round(h/u)%l)%l;w.push({resolutionX:u,blockWidth:l,datasetColumnCount:M,worldColumnCountFromOrigin:p,leftMargin:R,rightPadding:b,originColumnOffset:d}),u*=r}return{originX:t,halfWorldWidth:o,pyramidsInfo:w,hasGCSSShiftTransform:g}}function Bn(n){if(!n||n.isGeographic)return n;const t=String(n.wkid||n.wkt2||n.wkt);let i;return H.has(t)?i=H.get(t):(i=(n.wkid?T.coordsys(n.wkid):T.fromString(v.PE_TYPE_PROJCS,n.wkt2||n.wkt)).getGeogcs().getCode(),H.set(t,i)),new yn({wkid:i})}function Zn(n){const t=n.isAdaptive&&n.spacing==null;let i=n.spacing||[F,F],o=V(n),a={cols:o.size[0]+1,rows:o.size[1]+1};const e=o.outofBoundPointCount>0&&o.outofBoundPointCount<o.offsets.length/2;let s=o.outofBoundPointCount===o.offsets.length/2||t&&e?[0,0]:ln(o.offsets,a,i,$);const c=(s[0]+s[1])/2,l=n.projectedExtent.spatialReference,r=n.srcBufferExtent.spatialReference;if(t&&(e||c>$)&&(dn(l,r,n.datumTransformation)&&(l.isGeographic||I(l)),i=[J,J],o=V({...n,spacing:i}),a={cols:o.size[0]+1,rows:o.size[1]+1},s=ln(o.offsets,a,i,$)),o.error=s,i[0]>1&&(o.coefficients=mn(o.offsets,a,e)),n.includeGCSGrid&&!l.isGeographic&&!l.isWebMercator)if(r.isGeographic)o.gcsGrid={offsets:o.offsets,coefficients:o.coefficients,spacing:i};else{const u=I(l);if(u!=null&&!u.isEnvelope){const w=Bn(l),g=Rn(n.projectedExtent,w),{offsets:x}=V({...n,srcBufferExtent:g,spacing:i}),h=mn(x,a,e);o.gcsGrid={offsets:x,coefficients:h,spacing:i}}}return o}function V(n){const{projectedExtent:t,srcBufferExtent:i,pixelSize:o,datumTransformation:a,rasterTransform:e}=n,s=t.spatialReference,c=i.spatialReference,l=z(s,c),{xmin:r,ymin:u,xmax:w,ymax:g}=t,x=E(c),h=x!=null&&(n.hasWrapAround||e?.type==="gcs-shift"),m=n.spacing||[F,F],f=m[0]*o.x,M=m[1]*o.y,y=m[0]===1,p=Math.ceil((w-r)/f-.1/m[0])+(y?0:1),d=Math.ceil((g-u)/M-.1/m[1])+(y?0:1),R=On({cols:p,rows:d,xmin:r,ymax:g,xres:f,yres:M,inSR:s,outSR:c,datumTransformation:a,preferPE:m[0]<=J,usePixelCenter:y}),b=[];let G,S=0;const _=y?-1:NaN,{xmin:L,xmax:j,ymax:Q,width:bn,height:Pn}=i,Gn=k(c,K),kn=x!=null&&L>0&&j>x/2;let on=!1;if(l){const C=I(s);on=C!=null&&C.poleLocation>0}for(let C=0;C<p;C++){const U=[];for(let A=0;A<d;A++){let P=R[C*d+A];if(h&&P[0]>j&&P[0]>x/2-Gn?P[0]-=x:h&&C===0&&P[0]<0&&kn&&!e&&(P[0]+=x),!P||isNaN(P[0])||isNaN(P[1]))b.push(_),b.push(_),U.push(null),S++;else{if(e){const sn=e.inverseTransform(new N({x:P[0],y:P[1],spatialReference:c}));P=[sn.x,sn.y]}U.push(P),C>0&&h&&G[A]&&P[0]<G[A][0]&&(P[0]+=x,on&&P[0]>j&&P[0]>x&&(P[0]-=x)),b.push((P[0]-L)/bn),b.push((Q-P[1])/Pn)}}G=U}return{offsets:b,error:null,coefficients:null,outofBoundPointCount:S,spacing:m,size:y?[p,d]:[p-1,d-1]}}function mn(n,t,i){const{cols:o,rows:a}=t,e=new Float32Array((o-1)*(a-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),c=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let l=0;l<o-1;l++){for(let r=0;r<a-1;r++){let u=l*a*2+2*r;const w=n[u],g=n[u+1],x=n[u+2],h=n[u+3];u+=2*a;const m=n[u],f=n[u+1],M=n[u+2],y=n[u+3];let p=0,d=12*(r*(o-1)+l);for(let R=0;R<3;R++)e[d++]=s[p++]*w+s[p++]*x+s[p++]*M;p=0;for(let R=0;R<3;R++)e[d++]=s[p++]*g+s[p++]*h+s[p++]*y;p=0;for(let R=0;R<3;R++)e[d++]=c[p++]*w+c[p++]*m+c[p++]*M;p=0;for(let R=0;R<3;R++)e[d++]=c[p++]*g+c[p++]*f+c[p++]*y}if(i)for(let r=0;r<e.length;r++)isNaN(e[r])&&(e[r]=-1)}return e}function Fn(n,t){const i=n.clone().normalize();return i.length===1?i[0]:Mn(i,t)}function Hn(n){const{spatialReference:t}=n,i=_n(t);if(!i)return n;const[o,a]=i.valid,e=a-o;let s=0;if(n.xmin<o){const c=o-n.xmin;s=Math.ceil(c/e)}else if(n.xmin>a){const c=n.xmin-a;s=-Math.ceil(c/e)}return new Y({spatialReference:n.spatialReference,xmin:n.xmin+s*e,ymin:n.ymin,xmax:n.xmax+s*e,ymax:n.ymax})}function Vn(n,t,i){const{storageInfo:o,pixelSize:a}=t;let e=0,s=!1;const{pyramidResolutions:c}=o,l=o.tileInfo.format?.toLowerCase()==="mixed"?Math.max(1,Math.min(3,o.tileInfo.dpi/96)):1,r=(n.x+n.y)/2/l;if(c!=null&&c.length){const h=c[c.length-1],m=(h.x+h.y)/2,f=(a.x+a.y)/2;if(r<=f)e=0;else if(r>=m)e=c.length,s=r/m>8;else{let y,p=f;for(let d=1;d<=c.length;d++){if(y=(c[d-1].x+c[d-1].y)/2,r<=y){r===y?e=d:i==="down"?(e=d-1,s=r/p>8):e=i==="up"||r-p>y-r||r/p>2?d:d-1;break}p=y}}const M=e===0?a:c[e-1];return s&&Math.min(M.x,M.y)*O(t.spatialReference)>19567&&(s=!1),{pyramidLevel:e,pyramidResolution:new N({x:M.x,y:M.y,spatialReference:t.spatialReference}),excessiveReading:s}}const u=Math.log(n.x/a.x)/Math.LN2,w=Math.log(n.y/a.y)/Math.LN2,g=t.storageInfo.maximumPyramidLevel||0;e=i==="down"?Math.floor(Math.min(u,w)):i==="up"?Math.ceil(Math.max(u,w)):Math.round((u+w)/2),e<0?e=0:e>g&&(s=e>g+3,e=g);const x=2**e;return{pyramidLevel:e,pyramidResolution:new N({x:x*t.nativePixelSize.x,y:x*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:s}}function pn(n,t){const{pixelSize:i,extent:o}=n,a=Ln(o,t,!1);return Rn(Fn(o,(i.x+i.y)/16),t,a)}function nt(n,t,i){const o=i?.tileSize,a=i?.alignGlobalDatasetWithAGOL,{extent:e,spatialReference:s,pixelSize:c}=n,l=cn(c,t,e);if(l==null)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const r=(l.x+l.y)/2,u=O(t),w=r*u*96*39.37,g=t.isGeographic?256/o*2958287637958547e-7:256/o*591657527591555e-6;let x=n.dataType==="vector-magdir"||n.dataType==="vector-uv";const h=pn(n,t),m=Math.min(Math.ceil(Math.log(Math.min(n.width,n.height)/32)/Math.LN2),Math.ceil(Math.log(g/2/w)/Math.LN2));if(!x&&a&&(t.isGeographic||t.isWebMercator)){const S=E(t);if(x=Sn(h)>0||S!=null&&h.width>S/4,!x&&S!=null){let _=-1;if(m<3)_=2**m*r*o;else if(n.storageInfo){const{maximumPyramidLevel:j=0,pyramidScalingFactor:Q=2}=n.storageInfo;_=Q**j*r*o}const L=Math.ceil(S/_);x=L===1||L===2&&S/2-h.xmax<_}}let f,M=w;const y=1.001,p=Math.min(2,Math.max(1.414,n.storageInfo?.pyramidScalingFactor||2));if(x){M=g;const S=t.isGeographic?1341104507446289e-21:.29858214164761665,_=S*(96*u*39.37),L=t.isGeographic?4326:3857;f=cn({x:S,y:S},s,pn(n,new yn({wkid:L}))),f.x*=M/_,f.y*=M/_}else{f={x:c.x,y:c.y};let S=0;for(;M<g*(y/2)&&S<m;)S++,M*=p,f.x*=p,f.y*=p;Math.max(M,g)/Math.min(M,g)<=y&&(M=g)}const d=[M],R=[{x:f.x,y:f.y}],b=70.5310735,G=Math.min(b,w)/y;for(;M>=G;)M/=p,f.x/=p,f.y/=p,d.push(M),R.push({x:f.x,y:f.y});return{projectedPixelSize:l,scales:d,srcResolutions:R,isCustomTilingScheme:!x}}export{dn as $,Un as F,Zn as K,Dn as L,Vn as Q,nt as U,Qn as W,Hn as X,$n as Y,E as k,fn as n,Rn as o,Ln as p,pn as r,Sn as s};
