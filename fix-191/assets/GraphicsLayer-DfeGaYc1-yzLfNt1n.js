import{v as e,S as i,i as s}from"./story-DULt3Rma.js";import{o,u as a}from"./GraphicsCollection-CWTXNZOX-DHToCUr-.js";import{D as h}from"./Layer-ChoECxvZ-DQ-28MDL.js";import{u as n}from"./BlendLayer-D1WkSmwP-BHrWqYGA.js";import{S as m}from"./ScaleRangeLayer-Bz0DcnvM-BoX1P84V.js";import{q as d}from"./ElevationInfo-yv2-9tj6-B5v76p2q.js";import"./main-Bm7g2Jde.js";import"./TimeExtent-Cn0Jofqr-DWlRQ-Qn.js";import"./jsonUtils-wIllKWI4-CU3QWWOb.js";import"./parser-DyDJ-rlI-8QTzeGdu.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-DBcL5Ayd.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./lengthUtils-DKpMe5qR-BEdWsC7X.js";let t=class extends n(m(h)){constructor(r){super(r),this.elevationInfo=null,this.graphics=new o,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(r){return this.graphics.add(r),this}addMany(r){return this.graphics.addMany(r),this}removeAll(){return this.graphics.removeAll(),this}remove(r){this.graphics.remove(r)}removeMany(r){this.graphics.removeMany(r)}on(r,p){return super.on(r,p)}graphicChanged(r){this.emit("graphic-update",r)}};e([i({type:d})],t.prototype,"elevationInfo",void 0),e([i(a(o,"graphics"))],t.prototype,"graphics",void 0),e([i({type:["show","hide"]})],t.prototype,"listMode",void 0),e([i()],t.prototype,"screenSizePerspectiveEnabled",void 0),e([i({readOnly:!0})],t.prototype,"type",void 0),e([i({constructOnly:!0})],t.prototype,"internal",void 0),t=e([s("esri.layers.GraphicsLayer")],t);const E=t;export{E as default};
