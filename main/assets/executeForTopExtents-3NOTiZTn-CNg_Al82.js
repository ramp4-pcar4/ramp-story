import{n as a}from"./story-B7cfKB3A.js";import{y as n}from"./utils-9sQxfkoa-sJ5OFOoG.js";import{R as e}from"./queryTopFeatures-IbhAPJlP-Cb0JqMRa.js";import x from"./TopFeaturesQuery-Ckj_IYM7-GGcdk08a.js";import"./main-B_fLfUmn.js";import"./normalizeUtils-Bxmy9MNI-COFT-q6C.js";import"./normalizeUtilsCommon-CRJlkfEA-BhoKcKyp.js";import"./utils-Bq23Xwmj-DMUVdZCf.js";import"./query-DFW9-NG_-BOTl8I1z.js";import"./pbfQueryUtils-F4ZE8-K8-DpAFugXn.js";import"./pbf-D-y3_eZO-DfDn9Xt9.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./queryZScale-BiYV6Pr6-DqWWXJ8R.js";import"./projection-BA9M1R7d-BWdGDS1e.js";import"./projectBuffer-CvCBvJ6W-Ct6cRofy.js";import"./TimeExtent-Cn0Jofqr-BtO0I_Tt.js";async function b(m,r,i){const p=n(m),o=await e(p,x.from(r),{...i}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:a.fromJSON(t)}}export{b as executeForTopExtents};
