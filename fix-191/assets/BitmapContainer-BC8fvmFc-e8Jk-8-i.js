import{N as r,s as a}from"./WGLContainer-LxgEo4I_-CsRH2D6t.js";import{E as t}from"./MapView-BGOJJ8ch-D1TWNssr.js";let h=class extends r{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const s=e.registerRenderPass({name:"bitmap",brushes:[a.bitmap],target:()=>this.children,drawPhase:t.MAP});return[...super.prepareRenderPasses(e),s]}_manageFade(){this.children.reduce((e,s)=>e+(s.inFadeTransition?1:0),0)>=2?(this.children.forEach(e=>e.blendFunction="additive"),this._hasCrossfade=!0):(this.children.forEach(e=>e.blendFunction="standard"),this._hasCrossfade=!1)}};export{h as d};
