import{C as c,D as y}from"./utils-BVWK2jiA-Btpo3M9u.js";import{i as f}from"./jsonContext-BA8GHqVk-CWQlLGSw.js";import{S as d,l as v,E as x}from"./portalItemUtils-B8bw6SAG-CuS3mZw4.js";import{T as o}from"./resourceUtils-BmW6QqlX-B1DAUGNs.js";import"./story-BfX8CRfG.js";import"./main-ugzBrWNm.js";import"./originUtils-BLsWtgV9-B4sclfuf.js";import"./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js";import"./PortalItem-CctGdnxF-C7IJrZYq.js";import"./saveUtils-CIYk-dsQ-VGcOewby.js";import"./projection-BA9M1R7d-BYoCXVXt.js";import"./projectBuffer-CvCBvJ6W-dLD7ajBt.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./resourceUtils-rTM6Iemx-BROWZCZ1.js";const i="Media Layer",E="media-layer-save",T="media-layer-save-as",s=["media-layer:unsupported-source"];function n(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function m(e){return f(e,"portal-item",!0)}function p(e){return Promise.resolve(e.layerJSON)}async function u(e,r){r.extent=e.fullExtent?await d(e.fullExtent):null}async function I(e,r){r.title||=e.title,await u(e,r),v(r,x.METADATA)}async function b(e,r){return c({layer:e,itemType:i,validateLayer:n,createJSONContext:t=>m(t),createItemData:p,errorNamePrefix:E,supplementalUnsupportedErrors:s,setItemProperties:u,saveResources:(t,a)=>o(e.resourceReferences,a)},r)}async function g(e,r,t){return y({layer:e,itemType:i,validateLayer:n,createJSONContext:a=>m(a),createItemData:p,errorNamePrefix:T,supplementalUnsupportedErrors:s,newItem:r,setItemProperties:I,saveResources:(a,l)=>o(e.resourceReferences,l)},t)}export{b as save,g as saveAs};
