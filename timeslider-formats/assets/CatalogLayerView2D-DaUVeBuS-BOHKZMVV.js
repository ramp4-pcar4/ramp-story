import{ag as a,v as i,S as o,i as m}from"./story-Dq2tniu4.js";import{X as n,Y as s}from"./LayerView-Bish-E63-BnNFMCpz.js";import"./main-RVXD5CrG.js";import"./Container-BcuL1ZEG-q38UVb-0.js";import"./MapView-BGOJJ8ch-DrkFCL45.js";import"./Cyclical-C_9rKUUQ-BL1M7T8R.js";import"./CollectionFlattener-DkHuHn5E-B_E-gUDc.js";import"./workers-PiCjreoO-BGOXuS0J.js";import"./projection-BA9M1R7d-hooNzZZS.js";import"./projectBuffer-CvCBvJ6W-C5UBYuzO.js";import"./TileInfo-CWIRDhZl-DqYhDcWR.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-BNIBEhJY.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-CopuQ6YI.js";import"./signal-CETehA7D-bBhL9I9o.js";import"./Map-1zd11DKO-xuf-tSsN.js";import"./Basemap-BEqqSTw9-DbSgwihB.js";import"./loadAll-e978YItg-DT_2zsJg.js";import"./PortalItem-CctGdnxF-GeosZogc.js";import"./writeUtils-D5qlLkwk-C1KX4C8O.js";import"./compilerUtils-CV1QYWI8-BSmsehXa.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-zpOyuXtX.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TablesMixin-C8RojhYs-D6zNTH27.js";import"./Layer-ChoECxvZ-C778p8-A.js";import"./TimeExtent-Cn0Jofqr-BL3C0H-F.js";import"./GraphicsCollection-CWTXNZOX-DrQAb31l.js";import"./HeightModelInfo-C5vFqzyF-Dz7fCO8l.js";import"./ReactiveMap-CFk6jPfN-DzmEj7K0.js";import"./Query-BrwMGK8U-B0VOa46b.js";import"./Field-C6hA1tZj-BE7jRBWl.js";import"./fieldType-CD2CL2hr-VCrZfrIv.js";import"./arcgisLayerUrl-HNYh8jvG-BsfJ5MvL.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./Tile-D75RMC64-BHiE6xXi.js";import"./TileKey-C5IL-JBr-DEhFulto.js";import"./QueueProcessor-DbfV9fLy-B0eMOSU9.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./normalizeUtils-Bxmy9MNI-C8og3Via.js";import"./normalizeUtilsCommon-CRJlkfEA-Bc53Zlhc.js";import"./utils-9sQxfkoa-BATNHyW6.js";import"./utils-Bq23Xwmj-B3FSINg1.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-DYVo_t8s.js";import"./vec32-D9GsKZ1t-BqDEqGvI.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Texture-BCt2hphT-DiSCDq4i.js";import"./imageUtils-BA2D6Uf1-BPqQeqKa.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV--FLn_qnp.js";import"./ColorBackground-gVZldRLm-CvnoexU8.js";import"./parser-DyDJ-rlI-BzVP3bXI.js";import"./layerViewUtils-DURAPenP-BZLnevPV.js";const l=e=>{let t=class extends e{constructor(...r){super(...r),this.layerViews=new a}get dynamicGroupLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.dynamicGroupLayer)}get footprintLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.footprintLayer)}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return i([o()],t.prototype,"layer",void 0),i([o()],t.prototype,"layerViews",void 0),i([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),i([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=i([m("esri.views.layers.CatalogLayerView")],t),t};let p=class extends l(n(s)){constructor(){super(...arguments),this.layerViews=new a}update(e){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};i([o()],p.prototype,"layerViews",void 0),p=i([m("esri.views.2d.layers.CatalogLayerView2D")],p);const Vt=p;export{Vt as default};
