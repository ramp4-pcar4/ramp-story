import{v as e,S as i,i as s}from"./story-DTWQEBUx.js";import{o,u as a}from"./GraphicsCollection-CWTXNZOX-DHtEQNBp.js";import{D as h}from"./Layer-ChoECxvZ-CRoq6dbj.js";import{u as n}from"./BlendLayer-D1WkSmwP-VXEAPI3J.js";import{S as m}from"./ScaleRangeLayer-Bz0DcnvM-CImZNEd-.js";import{q as d}from"./ElevationInfo-yv2-9tj6-D3EqojKU.js";import"./main-NJQ0hvnN.js";import"./TimeExtent-Cn0Jofqr-C3JZPDf4.js";import"./jsonUtils-wIllKWI4-DC6Xtgpp.js";import"./parser-DyDJ-rlI-BVnySHx8.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-j56Jj71V.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./lengthUtils-DKpMe5qR-D28dKO1c.js";let t=class extends n(m(h)){constructor(r){super(r),this.elevationInfo=null,this.graphics=new o,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(r){return this.graphics.add(r),this}addMany(r){return this.graphics.addMany(r),this}removeAll(){return this.graphics.removeAll(),this}remove(r){this.graphics.remove(r)}removeMany(r){this.graphics.removeMany(r)}on(r,p){return super.on(r,p)}graphicChanged(r){this.emit("graphic-update",r)}};e([i({type:d})],t.prototype,"elevationInfo",void 0),e([i(a(o,"graphics"))],t.prototype,"graphics",void 0),e([i({type:["show","hide"]})],t.prototype,"listMode",void 0),e([i()],t.prototype,"screenSizePerspectiveEnabled",void 0),e([i({readOnly:!0})],t.prototype,"type",void 0),e([i({constructOnly:!0})],t.prototype,"internal",void 0),t=e([s("esri.layers.GraphicsLayer")],t);const E=t;export{E as default};
