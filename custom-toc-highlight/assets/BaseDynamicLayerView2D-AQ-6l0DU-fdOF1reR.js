import{aU as e,a1 as a,v as o,S as p,i as s}from"./story-BfX8CRfG.js";import{d as n}from"./BitmapContainer-BC8fvmFc-myTzpniv.js";import{X as h,Y as d}from"./LayerView-Bish-E63-rB2WUWF4.js";import{K as g}from"./ExportStrategy-BNE7Gp0u-j76jQ8Ao.js";import{n as u}from"./RefreshableLayerView-BdQpGYly-Bg8to7IY.js";import"./main-ugzBrWNm.js";import"./WGLContainer-LxgEo4I_-C81rKEy3.js";import"./definitions-DJSdSb77-DkoRHaVx.js";import"./LabelMetric-BeluzH3o-C3fDXNzp.js";import"./enums-CpSG_SL3-BMD3Tb1v.js";import"./Texture-BCt2hphT-hC4XzHg_.js";import"./enums-DBi1-Mm2-CUS1pvQe.js";import"./Program-DLVwTiPA-C1hIaFuM.js";import"./BufferObject-BM_7mcDb-Dq7c9k7y.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./vec2f32-CVhmN3Me-DxoqVD7C.js";import"./VertexArrayObject-M4iRGGoi-THP-veuo.js";import"./ProgramTemplate-DQOm6Omy-Qewg1YCG.js";import"./Tile-D75RMC64-Dj1SOP3K.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TileKey-C5IL-JBr-CJMvJ-lJ.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./QueueProcessor-DbfV9fLy-CxiRQqTa.js";import"./workers-PiCjreoO-idkDTJa3.js";import"./ReactiveMap-CFk6jPfN-Du1XE-2a.js";import"./signal-CETehA7D-DhpyJ8yp.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./Query-BrwMGK8U-DoFNfkjX.js";import"./Field-C6hA1tZj-CpGOU6Y4.js";import"./fieldType-CD2CL2hr-CMChCO5s.js";import"./TimeExtent-Cn0Jofqr-D2z4zFxu.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./MapView-BGOJJ8ch-DcHA1w96.js";import"./Cyclical-C_9rKUUQ-Dl9v9oo8.js";import"./CollectionFlattener-DkHuHn5E-BKutaakg.js";import"./projection-BA9M1R7d-BYoCXVXt.js";import"./projectBuffer-CvCBvJ6W-dLD7ajBt.js";import"./TileInfo-CWIRDhZl-BkCC-9e9.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./themeUtils-YjM7iIiX-3_GiOEs2.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./UpdatingHandles-CUu3u1ms-CruZWJRY.js";import"./Map-1zd11DKO-D2wK6924.js";import"./Basemap-BEqqSTw9-B5O9ub1-.js";import"./loadAll-e978YItg-CdtGGDtb.js";import"./PortalItem-CctGdnxF-C7IJrZYq.js";import"./writeUtils-D5qlLkwk-xd5TEmf9.js";import"./compilerUtils-CV1QYWI8-C9dYdAV0.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-DVqdGrVU.js";import"./TablesMixin-C8RojhYs-AdFcW_TR.js";import"./Layer-ChoECxvZ-CQTFmFQa.js";import"./GraphicsCollection-CWTXNZOX-Bo9O0MYR.js";import"./HeightModelInfo-C5vFqzyF-CupKpfDx.js";import"./arcgisLayerUrl-HNYh8jvG-CxSAVuJD.js";import"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import"./vec2f64-CeODonrJ-CkkJCdRC.js";import"./normalizeUtils-Bxmy9MNI-BT8FD-bF.js";import"./normalizeUtilsCommon-CRJlkfEA-D0uk_F2q.js";import"./utils-9sQxfkoa-KicvrT8N.js";import"./utils-Bq23Xwmj--_SaacS5.js";import"./unitBezier-CGtWxaCq-BRwEDigF.js";import"./Scheduler-B7UX7Wr5-DQCcMKpm.js";import"./vec32-D9GsKZ1t-BjayBdwt.js";import"./imageUtils-BA2D6Uf1-DgLNtmEY.js";import"./capabilities-agoTWNzb-CtsNgRyk.js";import"./Version-CoKzbupV-9-gg6ENz.js";import"./ColorBackground-gVZldRLm-C2pKGijH.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import"./Container-BcuL1ZEG-DxXVQv25.js";import"./parser-DyDJ-rlI-C9jRH52J.js";import"./StyleDefinition-Ct4HIk9T-B82pTf0h.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./featureConversionUtils-D6hFQ4Af-C2GV38KQ.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./layerViewUtils-DURAPenP-CfS78eqb.js";import"./Bitmap-CcqmzvfR-Bqft9oF3.js";let t=class extends u(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new g({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const jt=t;export{jt as default};
