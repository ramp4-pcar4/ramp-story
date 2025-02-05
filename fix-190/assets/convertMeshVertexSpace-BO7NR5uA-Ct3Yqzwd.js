import{$ as m,o as s,P as p}from"./story-DTWQEBUx.js";import{o as n}from"./MeshVertexAttributes-CbNpPur2-DpgssRaA.js";import{b as c}from"./vertexSpaceConversion-CiKaVq_u-DOrbtn6g.js";import"./main-NJQ0hvnN.js";import"./mat3-CC4Foazl-BWjyqE2v.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./mat4-DX7gBViE-j56Jj71V.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./vec32-D9GsKZ1t-wPAEwM9p.js";import"./spatialReferenceEllipsoidUtils-DUrKTvup-8HdZHRht.js";import"./computeTranslationToOriginAndRotation-wF0y9WQG-DRB0P0xx.js";import"./projectBuffer-CvCBvJ6W-D_U-EcI9.js";import"./projectPointToVector-B2UUY9SE-oyfZ97JX.js";import"./projection-BA9M1R7d-DZQvUqtX.js";import"./meshVertexSpaceUtils-B4l_Zo0M-DNLoO_no.js";import"./MeshLocalVertexSpace-BqgocsoS-DmIbtyNA.js";import"./vec3-BazNroeq-CLKeHN1r.js";import"./BufferView-PQoE3GL7-CfH7Xhjx.js";import"./vec2-tHZ6OaOy-xCj1obDt.js";import"./vec42-D8CJyqHG-DnfLTeQH.js";import"./vec4-DWDdg1fj-BHF7FK-8.js";async function k(o,r,t){await Promise.resolve(),m(t);const i=c(o,r,{useEllipsoid:t?.useEllipsoid});if(!i)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const e=o.cloneAndModifyVertexAttributes(new n({...i,uv:p(o.vertexAttributes.uv),color:p(o.vertexAttributes.color)}),r);return e.transform=null,e}export{k as convertMeshVertexSpace};
