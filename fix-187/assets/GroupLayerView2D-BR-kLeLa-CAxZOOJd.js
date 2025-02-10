import{v as t,S as s,dA as n,i as h,ag as m,ah as l,av as o,am as d}from"./story-Xt2MKhXr.js";import{X as V,Y as w}from"./LayerView-Bish-E63-DVzujL_f.js";import"./main-DzSgAEEU.js";import"./Container-BcuL1ZEG-BsC8ZEhi.js";import"./MapView-BGOJJ8ch-v2FcqzKv.js";import"./Cyclical-C_9rKUUQ-b4GPoDO5.js";import"./CollectionFlattener-DkHuHn5E-BWckzM3f.js";import"./workers-PiCjreoO-DchvnhoS.js";import"./projection-BA9M1R7d-DL-dPt4S.js";import"./projectBuffer-CvCBvJ6W-C8bSENgY.js";import"./TileInfo-CWIRDhZl-CjwnANPM.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-BBlRt_YH.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-z53-hhYi.js";import"./signal-CETehA7D-BOc9AEvb.js";import"./Map-1zd11DKO-BxD6lpk6.js";import"./Basemap-BEqqSTw9-BOD54-a7.js";import"./loadAll-e978YItg-BGcfJyY7.js";import"./PortalItem-CctGdnxF-vFGoaTOn.js";import"./writeUtils-D5qlLkwk-BmNtK_J5.js";import"./compilerUtils-CV1QYWI8-CIVrilqd.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-BSHrGbDv.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TablesMixin-C8RojhYs-BNN9z7Y4.js";import"./Layer-ChoECxvZ-qKnzWmVV.js";import"./TimeExtent-Cn0Jofqr-CMltjp4l.js";import"./GraphicsCollection-CWTXNZOX-DLudiOY4.js";import"./HeightModelInfo-C5vFqzyF-DfbQtWlo.js";import"./ReactiveMap-CFk6jPfN-OineMK1X.js";import"./Query-BrwMGK8U-BglFOJ3v.js";import"./Field-C6hA1tZj-C3WkmG2o.js";import"./fieldType-CD2CL2hr-DMzGr_yw.js";import"./arcgisLayerUrl-HNYh8jvG-VHy_AyaW.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./Tile-D75RMC64-CBCWuGle.js";import"./TileKey-C5IL-JBr-gVXYEFDD.js";import"./QueueProcessor-DbfV9fLy-RvU9GR8b.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./normalizeUtils-Bxmy9MNI-C3A4YvQz.js";import"./normalizeUtilsCommon-CRJlkfEA-8V-bLTBd.js";import"./utils-9sQxfkoa-DU_hoEko.js";import"./utils-Bq23Xwmj-cNnx7aB9.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-S90g15ep.js";import"./vec32-D9GsKZ1t-BRsjE2a2.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Texture-BCt2hphT-B9yDiZt9.js";import"./imageUtils-BA2D6Uf1-OxbC2rQf.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-Cq_XxsNC.js";import"./ColorBackground-gVZldRLm-1XAg8Nyw.js";import"./parser-DyDJ-rlI-BSsgmrTk.js";import"./layerViewUtils-DURAPenP-nJuv-SOw.js";let r=class extends w{constructor(i){super(i),this.type="group",this.layerViews=new m}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.addHandles([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),l(()=>this.layer?.visibilityMode,()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},o),l(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},o)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer)??!1}set layerViews(i){this._set("layerViews",d(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>!!this._findLayerViewForLayer(e)?.visible);return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){i==null&&(i=this._firstVisibleOnLayerOrder())==null&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map(a=>l(()=>a.visible,y=>this._applyVisibility(()=>{y!==this.visible&&(a.visible=this.visible)},()=>this._applyExclusiveVisibility(y?a:null)),o)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e?.visible?e:null))}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&(this.layer?.visibilityMode==="inherited"?i():this.layer?.visibilityMode==="exclusive"&&e())}};t([s({readOnly:!0})],r.prototype,"creatingLayerViews",null),t([s({cast:n})],r.prototype,"layerViews",null),t([s({readOnly:!0})],r.prototype,"updatingProgress",null),t([s()],r.prototype,"view",void 0),r=t([h("esri.views.layers.GroupLayerView")],r);const v=r;let p=class extends V(v){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};p=t([h("esri.views.2d.layers.GroupLayerView2D")],p);const fi=p;export{fi as default};
