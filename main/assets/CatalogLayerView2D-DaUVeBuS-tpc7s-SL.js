import{ag as a,v as i,S as o,i as m}from"./story-DYUJZqY7.js";import{X as n,Y as s}from"./LayerView-Bish-E63-DsDyjk_-.js";import"./main-yJk-x1BV.js";import"./Container-BcuL1ZEG-Beu8Xc_G.js";import"./MapView-BGOJJ8ch-a1iYhESM.js";import"./Cyclical-C_9rKUUQ-CbefZT84.js";import"./CollectionFlattener-DkHuHn5E-BiELyjYL.js";import"./workers-PiCjreoO-DbP0C5Cu.js";import"./projection-BA9M1R7d-B2decpX5.js";import"./projectBuffer-CvCBvJ6W-BhVrilLT.js";import"./TileInfo-CWIRDhZl-D_l9_NhX.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-Cok0SmtE.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-CUhtYxjy.js";import"./signal-CETehA7D-_H7cq-78.js";import"./Map-1zd11DKO-B1YnT2Ku.js";import"./Basemap-BEqqSTw9-CiTR7WTu.js";import"./loadAll-e978YItg-gy6WTfE7.js";import"./PortalItem-CctGdnxF-BQH0EZnv.js";import"./writeUtils-D5qlLkwk-M3WKnfyf.js";import"./compilerUtils-CV1QYWI8-r6X7S-we.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-BzbGm9jG.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TablesMixin-C8RojhYs-DGAx3huS.js";import"./Layer-ChoECxvZ-C907m40k.js";import"./TimeExtent-Cn0Jofqr-BMzfBI72.js";import"./GraphicsCollection-CWTXNZOX-BAOU4NIE.js";import"./HeightModelInfo-C5vFqzyF-CrRAiovN.js";import"./ReactiveMap-CFk6jPfN-BTAH0Zgv.js";import"./Query-BrwMGK8U-5pkO0saC.js";import"./Field-C6hA1tZj-CS5v4A7y.js";import"./fieldType-CD2CL2hr-CML2lmOi.js";import"./arcgisLayerUrl-HNYh8jvG-R4DtL3gC.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./Tile-D75RMC64-CqXCPk9B.js";import"./TileKey-C5IL-JBr-DEvJuJnk.js";import"./QueueProcessor-DbfV9fLy-DyuKCNyC.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./normalizeUtils-Bxmy9MNI-CP0oGGeJ.js";import"./normalizeUtilsCommon-CRJlkfEA-7uGXSh12.js";import"./utils-9sQxfkoa-BsKx99ey.js";import"./utils-Bq23Xwmj-DTIl_-q8.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-D5aRKG_K.js";import"./vec32-D9GsKZ1t-BNmjVLpx.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Texture-BCt2hphT-CNmDy3Fg.js";import"./imageUtils-BA2D6Uf1-DlOJtFSD.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-j5QeHJiX.js";import"./ColorBackground-gVZldRLm-DprCPlWg.js";import"./parser-DyDJ-rlI-DvsxPmku.js";import"./layerViewUtils-DURAPenP-tXVpksmP.js";const l=e=>{let t=class extends e{constructor(...r){super(...r),this.layerViews=new a}get dynamicGroupLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.dynamicGroupLayer)}get footprintLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.footprintLayer)}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return i([o()],t.prototype,"layer",void 0),i([o()],t.prototype,"layerViews",void 0),i([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),i([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=i([m("esri.views.layers.CatalogLayerView")],t),t};let p=class extends l(n(s)){constructor(){super(...arguments),this.layerViews=new a}update(e){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};i([o()],p.prototype,"layerViews",void 0),p=i([m("esri.views.2d.layers.CatalogLayerView2D")],p);const Vt=p;export{Vt as default};
