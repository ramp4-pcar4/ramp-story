import{bh as E,v as d,S as l,i as N,j as H,bp as P,$ as v,aG as I,W as T,iF as $,gI as z}from"./story-DTWQEBUx.js";import{V as q}from"./TileInfo-CWIRDhZl-DzxWbhjW.js";import{I as B}from"./Bitmap-CcqmzvfR-Xd4Ul2D3.js";import{Q as U}from"./Tile-D75RMC64-Bk1z5Wel.js";import{s as V}from"./TileKey-C5IL-JBr-DCfTHjGL.js";const j=Math.PI/180;function C(e){return e*j}function F(e,i){const r=C(i.rotation),t=Math.abs(Math.cos(r)),s=Math.abs(Math.sin(r)),[o,n]=i.size;return e[0]=Math.round(n*s+o*t),e[1]=Math.round(n*t+o*s),e}function G(e,i,r,t){const[s,o]=i,[n,a]=t,m=.5*r;return e[0]=s-m*n,e[1]=o-m*a,e[2]=s+m*n,e[3]=o+m*a,e}const u=E(),c=[0,0],w=new V(0,0,0,0),y={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let h=class extends H{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=y.hidpi,this.imageMaxWidth=y.imageMaxWidth,this.imageMaxHeight=y.imageMaxHeight,this.imageRotationSupported=y.imageRotationSupported,this.imageNormalizationSupported=y.imageNormalizationSupported,this.update=P(async(i,r)=>{if(v(r),!i.stationary||this.destroyed)return;const t=i.state,s=I(t.spatialReference),o=this.hidpi?i.pixelRatio:1,n=t.worldScreenWidth>0,a=n&&this.imageNormalizationSupported&&t.worldScreenWidth<t.size[0],m=Math.round((this.imageMaxWidth??0)/o),f=Math.round((this.imageMaxHeight??0)/o);a?(c[0]=t.worldScreenWidth,c[1]=t.size[1]):this.imageRotationSupported?(c[0]=t.size[0],c[1]=t.size[1]):F(c,t);const M=Math.floor(c[0])>m||Math.floor(c[1])>f,S=s&&(t.extent.xmin<s.valid[0]||t.extent.xmax>s.valid[1]),_=!this.imageNormalizationSupported&&S,x=!M&&!_,W=this.imageRotationSupported?t.rotation:0,b=this.container.children.slice();if(x){const p=a?t.paddedViewState.center:t.center;this._imagePromise=this._singleExport(t,c,p,t.resolution,W,o,r)}else{let p=Math.min(m,f);n&&(p=Math.min(t.worldScreenWidth,p),p=Math.round(t.worldScreenWidth/Math.ceil(t.worldScreenWidth/p))),this._imagePromise=this._tiledExport(t,p,o,r)}try{const p=await this._imagePromise??[];v(r);const R=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=p;for(const g of b)p.includes(g)||R.push(g.fadeOut().then(()=>{g.remove(),g.destroy()}));for(const g of p)R.push(g.fadeIn());await Promise.all(R)}catch(p){this._imagePromise=null,T(p)}},5e3),this.updateExports=P(async i=>{const r=[];for(const t of this.container.children){if(!t.visible||!t.stage)return;r.push(i(t).then(()=>{t.invalidateTexture(),t.requestRender()}))}this._imagePromise=$(r).then(()=>this._imagePromise=null),await this._imagePromise})}destroy(){this.bitmaps.forEach(e=>e.destroy()),this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}async _export(e,i,r,t,s,o){const n=await this.fetchSource(e,Math.floor(i*s),Math.floor(r*s),{rotation:t,pixelRatio:s,signal:o});v(o);const a=new B(null,!0);return a.x=e.xmin,a.y=e.ymax,a.resolution=e.width/i,a.rotation=t,a.pixelRatio=s,a.opacity=0,this.container.addChild(a),await a.setSourceAsync(n,o),v(o),a}async _singleExport(e,i,r,t,s,o,n){G(u,r,t,i);const a=z(u,e.spatialReference);return[await this._export(a,i[0],i[1],s,o,n)]}_tiledExport(e,i,r,t){const s=q.create({size:i,spatialReference:e.spatialReference,scales:[e.scale]}),o=new U(s),n=o.getTileCoverage(e);if(!n)return null;const a=[];return n.forEach((m,f,M,S)=>{w.set(m,f,M,0),o.getTileBounds(u,w);const _=z(u,e.spatialReference);a.push(this._export(_,i,i,0,r,t).then(x=>(S!==0&&(w.set(m,f,M,S),o.getTileBounds(u,w),x.x=u[0],x.y=u[3]),x)))}),Promise.all(a)}};d([l()],h.prototype,"_imagePromise",void 0),d([l()],h.prototype,"bitmaps",void 0),d([l()],h.prototype,"container",void 0),d([l()],h.prototype,"fetchSource",void 0),d([l()],h.prototype,"hidpi",void 0),d([l()],h.prototype,"imageMaxWidth",void 0),d([l()],h.prototype,"imageMaxHeight",void 0),d([l()],h.prototype,"imageRotationSupported",void 0),d([l()],h.prototype,"imageNormalizationSupported",void 0),d([l()],h.prototype,"requestUpdate",void 0),d([l()],h.prototype,"updating",null),h=d([N("esri.views.2d.layers.support.ExportStrategy")],h);const O=h;export{O as K};
