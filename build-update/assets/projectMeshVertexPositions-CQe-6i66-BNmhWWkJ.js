import{aH as p,ck as e}from"./story-DE9AooAy.js";import{u as m}from"./MeshLocalVertexSpace-DkOk3052-q6-F4gvG.js";import{L as n}from"./vertexSpaceConversion-J1a6a3Ka-duDw22SV.js";import"./main-CsLUkpBy.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./spatialReferenceEllipsoidUtils-a1l2O8Wm-BqZpajjp.js";import"./computeTranslationToOriginAndRotation-DlPeD1c9-DkmbPYZb.js";import"./projectPointToVector-D1BQGAFG-DEE3wd5g.js";import"./meshVertexSpaceUtils-VVkhP71b-NRpHG3pF.js";import"./vec3-DeYubiaN-CS4a6ERP.js";import"./BufferView-BDYk8Sh_-Cv8PXz9Y.js";import"./vec4-DamUQeRS-BB_OMEQZ.js";function j(t,i){const o=n(t,m.absolute);if(!o)return null;let r=o.position;return p(t.spatialReference,i)||(r=new Float64Array(o.position.length),e(o.position,t.spatialReference,0,r,i,0))?r:null}export{j as projectMeshVertexPositions};
