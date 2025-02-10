import{gU as d,I as f,aq as g,gV as l,a1 as i,o as a,bh as u}from"./story-Xt2MKhXr.js";import{V as h}from"./featureConversionUtils-D6hFQ4Af-Il9Z2IsK.js";import{r as m}from"./BoundsStore--N6o1xkF-DdylSrPR.js";import{r as y}from"./timeSupport-jPViR5jn-tWSBeAsN.js";import{s as _}from"./optimizedFeatureQueryEngineAdapter-DFdaawxC-D7COtLgT.js";const c=d();class M{constructor(t){this.geometryInfo=t,this._boundsStore=new m,this._featuresById=new Map,this.events=new f,this.featureAdapter=_}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let t=0;return this._featuresById.forEach(e=>{e.geometry!=null&&e.geometry.coords&&(t+=e.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(t){if(this.fullBounds==null)return null;const[e,s,r,o]=this.fullBounds;return{xmin:e,ymin:s,xmax:r,ymax:o,spatialReference:y(t)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}upsertMany(t){const e=t.map(s=>this._upsert(s));return this._emitChanged(),e.filter(g)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const s=this._featuresById.get(e);s&&this._remove(s)}this._emitChanged()}forEachBounds(t,e){for(const s of t){const r=this._boundsStore.get(s.objectId);r&&e(l(c,r))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach(e=>t(e))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,s=>{e(this._featuresById.get(s))})}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const e=t.objectId;if(e==null)return void i.getLogger("esri.layers.graphics.data.FeatureStore").error(new a("featurestore:invalid-feature","feature id is missing",{feature:t}));const s=this._featuresById.get(e);let r;if(s?(t.displayId=s.displayId,r=this._boundsStore.get(e),this._boundsStore.delete(e)):this.onFeatureAdd!=null&&this.onFeatureAdd(t),!t.geometry?.coords?.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);r=h(r??u(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),r!=null&&this._boundsStore.set(e,r),this._featuresById.set(e,t)}_upsert(t){const e=t?.objectId;if(e==null)return i.getLogger("esri.layers.graphics.data.FeatureStore").error(new a("featurestore:invalid-feature","feature id is missing",{feature:t})),null;const s=this._featuresById.get(e);if(!s)return this._add(t),t;const{geometry:r,attributes:o}=t;for(const n in o)s.attributes[n]=o[n];return r&&(s.geometry=r,this._boundsStore.set(e,h(u(),r,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),s}_remove(t){this.onFeatureRemove!=null&&this.onFeatureRemove(t);const e=t.objectId;return this._boundsStore.delete(e),this._featuresById.delete(e),t}}export{M as I};
