import{C as y,D as n}from"./utils-BVWK2jiA-D_Oj_AG8.js";import{S as p,l as c,L as u,E as i}from"./portalItemUtils-B8bw6SAG-CEVZt8QT.js";import"./story-DULt3Rma.js";import"./main-Bm7g2Jde.js";import"./originUtils-BLsWtgV9-B4sclfuf.js";import"./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js";import"./PortalItem-CctGdnxF-Dbw3pVTD.js";import"./jsonContext-BA8GHqVk-DqGWyE2_.js";import"./saveUtils-CIYk-dsQ-CKT8D_08.js";import"./projection-BA9M1R7d-DvHr0GeG.js";import"./projectBuffer-CvCBvJ6W-Cc8J4MEJ.js";const s="Image Service",g="imagery-layer-save",v="imagery-layer-save-as",f="imagery-tile-layer-save",d="imagery-tile-layer-save-as";function m(t){if(t.type==="imagery")return{isValid:!0};const{raster:e}=t,r=e?.datasetFormat==="Function"?e.primaryRasters?.rasters[0]:e;return{isValid:r?.datasetFormat==="RasterTileServer"&&(r.tileType==="Raster"||r.tileType==="Map"),errorMessage:"imagery tile layer should be created from a tiled image service."}}function o(t){const e=t.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function T(t,e){const{parsedUrl:r,title:a,fullExtent:l}=t;e.url=r.path,e.title||=a;try{e.extent=await p(l)}catch{e.extent=void 0}c(e,i.METADATA),u(e,i.TILED_IMAGERY,t.type==="imagery-tile")}async function F(t,e){const r=t.type==="imagery"?g:f;return y({layer:t,itemType:s,validateLayer:m,createItemData:o,errorNamePrefix:r},e)}async function N(t,e,r){const a=t.type==="imagery"?v:d;return n({layer:t,itemType:s,validateLayer:m,createItemData:o,errorNamePrefix:a,newItem:e,setItemProperties:T},r)}export{F as save,N as saveAs};
