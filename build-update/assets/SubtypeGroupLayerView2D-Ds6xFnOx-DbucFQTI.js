import{c as a,j as d,aU as n,iB as l,ak as u}from"./story-DE9AooAy.js";import{r as g}from"./FeatureLayerView2D-BuwByqi6-Mm6-4Jhk.js";import"./main-CsLUkpBy.js";import"./Container-C-rqKhNk-Dyxae02C.js";import"./timeSupport-m80hv0JM-aOU1dVtS.js";import"./LayerView-DONYuvqR-D1uYbtvo.js";import"./layerViewUtils-DyE3oc1e-CYjDhqwq.js";import"./TechniqueInstance-DBGJNG3B-28gQqNgE.js";import"./UpdateTracking2D-swFQJIjy-DrSp7uUZ.js";import"./BidiEngine-Bdqv5H5j-Dyqh9XG-.js";import"./GeometryUtils-v59R1Z6F-CHOfVRFe.js";import"./Rect-DD6XS68q-D_hsV3ag.js";import"./LabelMetric-DpMX58iW-IB5VzNkd.js";import"./Program-1XjJitsM-EcoGUBaj.js";import"./BufferObject-DqJSjWFs-BhAkLLcP.js";import"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import"./BindType-9iOk18Ed-CRW1cdX4.js";import"./Util-cAlFLh9R-CyPLXCS2.js";import"./TileContainer-C5yGwaDr-CIMkIbQf.js";import"./WGLContainer-whJgsi2t-CGq78sXN.js";import"./VertexArrayObject-C4kjI814-BP6Di09J.js";import"./ProgramTemplate-B_NcbdFz-Q2ML1liD.js";import"./vec3f32-BS0cezmI-B_madU1n.js";import"./StyleDefinition-CovmM7Ch-Cdj37yeO.js";import"./config-nuMERBvb-MDUrh2eL.js";import"./earcut-XDcq3zAf-BcwyrT7l.js";import"./FeatureCommandQueue-F8dH-mVd-P46-EUD1.js";import"./constants-Bqe1QJ4u-F8oTIn7N.js";import"./CircularArray-DaQg3PQl-BXS52LZy.js";import"./SDFHelper-DaBS7X2--lClFpq42.js";import"./floatRGBA-CNeCgBBY-DcNNIP7E.js";import"./HighlightCounter-DFWq7PnG-L3ompOf4.js";import"./popupUtils-CGEHI2En-BRqaMOQD.js";import"./RefreshableLayerView-D30wcOhz-CVoYFm4S.js";let i=class extends g{initialize(){this.addHandles([n(()=>this.view.scale,()=>this._update(),l)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,e=this.dataUpdating,m=t&&(r||o||p||e);return u("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${m}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${e}
`),m}};i=a([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const N=i;export{N as default};
