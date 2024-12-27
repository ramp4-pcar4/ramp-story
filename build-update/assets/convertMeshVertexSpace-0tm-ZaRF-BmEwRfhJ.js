import{D as s,q as m,am as p}from"./story-DE9AooAy.js";import{o as n}from"./MeshVertexAttributes-D9RxS-0O-Be7jDKKw.js";import{L as c}from"./vertexSpaceConversion-J1a6a3Ka-duDw22SV.js";import"./main-CsLUkpBy.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./spatialReferenceEllipsoidUtils-a1l2O8Wm-BqZpajjp.js";import"./computeTranslationToOriginAndRotation-DlPeD1c9-DkmbPYZb.js";import"./projectPointToVector-D1BQGAFG-DEE3wd5g.js";import"./meshVertexSpaceUtils-VVkhP71b-NRpHG3pF.js";import"./MeshLocalVertexSpace-DkOk3052-q6-F4gvG.js";import"./vec3-DeYubiaN-CS4a6ERP.js";import"./BufferView-BDYk8Sh_-Cv8PXz9Y.js";import"./vec4-DamUQeRS-BB_OMEQZ.js";async function L(r,t,o){await Promise.resolve(),s(o);const e=c(r,t,{useEllipsoid:o?.useEllipsoid});if(!e)throw new m("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=r.cloneAndModifyVertexAttributes(new n({...e,uv:p(r.vertexAttributes.uv),color:p(r.vertexAttributes.color)}),t);return i.transform=null,i}export{L as convertMeshVertexSpace};
