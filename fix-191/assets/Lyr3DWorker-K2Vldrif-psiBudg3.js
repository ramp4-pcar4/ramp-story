const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./lyr3DWorker-Cx6akEQX-Bxt_snw4.js","./_commonjsHelpers-BITg13Vk-KnjfkSck.js"])))=>i.map(i=>d[i]);
import{_ as M}from"./main-Bm7g2Jde.js";import{bw as T}from"./story-DULt3Rma.js";var p,N,f,g,m,d,S,b,I,U,L,D,h,R,a;(function(t){t.U8="U8",t.I8="I8",t.U16="U16",t.I16="I16",t.U32="U32",t.I32="I32",t.F32="F32",t.F64="F64",t.Utf8String="Utf8String",t.NotSet="NotSet"})(p||(p={})),function(t){t.Png="Png",t.Jpeg="Jpeg",t.Dds="Dds",t.Raw="Raw",t.Dxt1="Dxt1",t.Dxt5="Dxt5",t.Etc2="Etc2",t.Astc="Astc",t.Pvrtc="Pvrtc",t.NotSet="NotSet"}(N||(N={})),function(t){t.Rgb8="Rgb8",t.Rgba8="Rgba8",t.R8="R8",t.Bgr8="Bgr8",t.Bgra8="Bgra8",t.Rg8="Rg8",t.Dxt1="Dxt1",t.Dxt5="Dxt5",t.NotSet="NotSet"}(f||(f={})),function(t){t.Position="Position",t.Normal="Normal",t.TexCoord="TexCoord",t.Color="Color",t.Tangent="Tangent",t.FeatureIndex="FeatureIndex",t.UvRegion="UvRegion",t.NotSet="NotSet"}(g||(g={})),function(t){t.Opaque="Opaque",t.Mask="Mask",t.Blend="Blend"}(m||(m={})),function(t){t.None="None",t.Mask="Mask",t.Alpha="Alpha",t.PreMultAlpha="PreMultAlpha",t.NotSet="NotSet"}(d||(d={})),function(t){t.Points="Points",t.Lines="Lines",t.LineStrip="LineStrip",t.Triangles="Triangles",t.TriangleStrip="TriangleStrip",t.NotSet="NotSet"}(S||(S={})),function(t){t.None="None",t.WrapXBit="WrapXBit",t.WrapYBit="WrapYBit",t.WrapXy="WrapXy",t.NotSet="NotSet"}(b||(b={})),function(t){t.Linear="Linear",t.Nearest="Nearest",t.NotSet="NotSet"}(I||(I={})),function(t){t.Linear="Linear",t.Nearest="Nearest",t.NearestMipmapNearest="NearestMipmapNearest",t.LinearMipmapNearest="LinearMipmapNearest",t.NearestMipmapLinear="NearestMipmapLinear",t.LinearMipmapLinear="LinearMipmapLinear",t.NotSet="NotSet"}(U||(U={})),function(t){t.FeatureId="FeatureId",t.GlobalUid="GlobalUid",t.UnspecifiedDateTime="UnspecifiedDateTime",t.EcmaIso8601DateTime="EcmaIso8601DateTime",t.EcmaIso8601DateOnly="EcmaIso8601DateOnly",t.TimeOnly="TimeOnly",t.TimeStamp="TimeStamp",t.ColorRgb="ColorRgb",t.ColorRgba="ColorRgba",t.Unrecognized="Unrecognized",t.NotSet="NotSet"}(L||(L={})),function(t){t.Texture="Texture",t.VertexAtrb="VertexAtrb",t.Implicit="Implicit",t.NotSet="NotSet"}(D||(D={})),function(t){t.Front="Front",t.Back="Back",t.None="None",t.NotSet="NotSet"}(h||(h={})),function(t){t.Pbr="Pbr",t.Unlit="Unlit"}(R||(R={})),function(t){t[t.Succeeded=0]="Succeeded",t[t.Failed=1]="Failed",t[t.MissingInputs=2]="MissingInputs"}(a||(a={}));function x(){return new Promise(t=>M(()=>import("./lyr3DWorker-Cx6akEQX-Bxt_snw4.js"),__vite__mapDeps([0,1]),import.meta.url).then(o=>o.l).then(({default:o})=>{const n=o({locateFile:y,onRuntimeInitialized:()=>t(n)})})).catch(t=>{throw t})}function y(t){return T(`esri/libs/lyr3d/${t}`)}let e,r;async function w(t){if(await P(),t.inputs.length<1)return{result:{status:a.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const o={ptrs:[],sizes:[]};for(const i of t.inputs){const u=r._malloc(i.byteLength);new Uint8Array(r.HEAPU8.buffer,u,i.byteLength).set(new Uint8Array(i)),o.ptrs.push(u),o.sizes.push(i.byteLength)}const n=r.process(t.jobDescJson,o,t.isMissingResourceCase),l=n.status===a.Succeeded&&n.data,c=n.status===a.MissingInputs&&n.missingInputUrls.length>0;if(l){const i=n.data.slice();n.data=i}else c&&(n.jobDescJson=n.jobDescJson.slice(),n.originalInputs=t.inputs);for(let i=0;i<o.ptrs.length;++i)r._free(o.ptrs[i]);const s=[];if(l)s.push(n.data.buffer);else if(c)for(const i of t.inputs)s.push(i);return{result:n,transferList:s}}function A(){r&&(r.uninitialize_lyr3d_worker_wasm(),r=null)}function P(){return r?Promise.resolve():(e||(e=x().then(t=>{r=t,r.initialize_lyr3d_worker_wasm(),e=null})),e)}export{A as destroyWasm,P as initialize,w as process};
