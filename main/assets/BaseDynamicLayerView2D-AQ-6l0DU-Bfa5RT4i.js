import{aU as e,a1 as a,v as o,S as p,i as s}from"./story-B7cfKB3A.js";import{d as n}from"./BitmapContainer-BC8fvmFc-B_SGRSJZ.js";import{X as h,Y as d}from"./LayerView-Bish-E63-CNsR-v-h.js";import{K as g}from"./ExportStrategy-BNE7Gp0u-BJYrun7I.js";import{n as u}from"./RefreshableLayerView-BdQpGYly-CicNXSPQ.js";import"./main-B_fLfUmn.js";import"./WGLContainer-LxgEo4I_-Dl4Yc-j8.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./LabelMetric-BeluzH3o-DkbWzTkx.js";import"./enums-CpSG_SL3-BMD3Tb1v.js";import"./Texture-BCt2hphT-Bdh2hR3n.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Program-DLVwTiPA-2wbNoLhD.js";import"./BufferObject-BM_7mcDb-DMFZt8F3.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./VertexArrayObject-M4iRGGoi-CY-u3vmp.js";import"./ProgramTemplate-DQOm6Omy-BA_2hxRN.js";import"./Tile-D75RMC64-Bh4jBIk6.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TileKey-C5IL-JBr-ALBvV2-e.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./QueueProcessor-DbfV9fLy-Cz0FFhT_.js";import"./workers-PiCjreoO-BND46cKq.js";import"./ReactiveMap-CFk6jPfN-CGaYE3jZ.js";import"./signal-CETehA7D-CWwceJve.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./Query-BrwMGK8U-D1-WS8F0.js";import"./Field-C6hA1tZj-CfaLCW_Y.js";import"./fieldType-CD2CL2hr-uK5sRm5J.js";import"./TimeExtent-Cn0Jofqr-BtO0I_Tt.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./MapView-BGOJJ8ch-DRggMqzq.js";import"./Cyclical-C_9rKUUQ-4F_ld8KR.js";import"./CollectionFlattener-DkHuHn5E-465wMXJq.js";import"./projection-BA9M1R7d-BWdGDS1e.js";import"./projectBuffer-CvCBvJ6W-Ct6cRofy.js";import"./TileInfo-CWIRDhZl-RuEew65P.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-BC2dzCoa.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-tsxRyNL1.js";import"./Map-1zd11DKO-B767E_yd.js";import"./Basemap-BEqqSTw9-BH2kM9Gz.js";import"./loadAll-e978YItg-gBtA9qVT.js";import"./PortalItem-CctGdnxF-BTg59MZJ.js";import"./writeUtils-D5qlLkwk-e1BSlaMv.js";import"./compilerUtils-CV1QYWI8-CnD6P7xU.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-D4lq4bTi.js";import"./TablesMixin-C8RojhYs-BQAXp14v.js";import"./Layer-ChoECxvZ-C8CCyxPY.js";import"./GraphicsCollection-CWTXNZOX-Dqmx4Vnb.js";import"./HeightModelInfo-C5vFqzyF-D1AjqbBp.js";import"./arcgisLayerUrl-HNYh8jvG-CGGCPMBg.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./normalizeUtils-Bxmy9MNI-COFT-q6C.js";import"./normalizeUtilsCommon-CRJlkfEA-BhoKcKyp.js";import"./utils-9sQxfkoa-sJ5OFOoG.js";import"./utils-Bq23Xwmj-DMUVdZCf.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-zBhcfDDP.js";import"./vec32-D9GsKZ1t-CGugoABo.js";import"./imageUtils-BA2D6Uf1-h_3ih8oc.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-CpcxpawI.js";import"./ColorBackground-gVZldRLm-CEY5RgVi.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import"./Container-BcuL1ZEG-CQ4sZjgh.js";import"./parser-DyDJ-rlI-7x1Trx59.js";import"./StyleDefinition-Ct4HIk9T-B82pTf0h.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./featureConversionUtils-D6hFQ4Af-BYwyDrJn.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./layerViewUtils-DURAPenP-CJY7tUMP.js";import"./Bitmap-CcqmzvfR-CQgjuY1v.js";let t=class extends u(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new g({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const jt=t;export{jt as default};
