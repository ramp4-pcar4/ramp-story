import{y as i}from"./utils-9sQxfkoa-DXR0Ults.js";import{q as s}from"./query-DFW9-NG_-C30Bkhvt.js";import{O as c}from"./FeatureSet-BkVNthuN-xb3_QXZ2.js";import{b as e}from"./Query-BrwMGK8U-CThiUUlv.js";async function S(r,t,o){const a=await p(r,t,o);return c.fromJSON(a)}async function p(r,t,o){const a=i(r),m={...o},n=e.from(t),{data:f}=await s(a,n,n.sourceSpatialReference,m);return f}export{p as s,S as u};
