import{aC as k,dh as u,o as m}from"./story-Xt2MKhXr.js";import{o as T}from"./pbf-D-y3_eZO-DvJs_UZ1.js";import{a as q,i as F,c as l}from"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import{t as I}from"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";const b=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];let j=class{constructor(r){this._options=r,this.geometryTypes=b,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new I}prepareFeatures(r){this._vertexDimension=2,r.hasZ&&this._vertexDimension++,r.hasM&&this._vertexDimension++}finishFeatureResult(r){if(!r?.features||!r.hasZ||!this._options.sourceSpatialReference||!r.spatialReference||k(r.spatialReference,this._options.sourceSpatialReference)||r.spatialReference.vcsWkid)return;const e=u(this._options.sourceSpatialReference)/u(r.spatialReference);if(e!==1)for(const t of r.features){if(!q(t))continue;const s=t.geometry.coords;for(let a=2;a<s.length;a+=3)s[a]*=e}}addFeature(r,e){r.features.push(e)}createFeature(){return new F}createSpatialReference(){return{wkid:0}}createGeometry(){return new l}addField(r,e){r.fields.push(e)}allocateCoordinates(r){r.coords.length=r.lengths.reduce((e,t)=>e+t,0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(r,e){r.coords[this._coordinatePtr++]=e}addCoordinatePoint(r,e){r.coords.push(e)}addLength(r,e){r.lengths.push(e)}addQueryGeometry(r,e){r.queryGeometry=e.queryGeometry,r.queryGeometryType=e.queryGeometryType}createPointGeometry(){return new l}};const g=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],p=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],y=["upperLeft","lowerLeft"];function f(r){return r>=g.length?null:g[r]}function w(r){return r>=p.length?null:p[r]}function d(r){return r>=y.length?null:y[r]}function h(r,e){return e>=r.geometryTypes.length?null:r.geometryTypes[e]}function S(r,e,t){const s=r.asUnsafe(),a=e.createPointGeometry(t);for(;s.next();)switch(s.tag()){case 3:{const n=s.getUInt32(),o=s.pos()+n;let i=0;for(;s.pos()<o;)e.addCoordinatePoint(a,s.getSInt64(),i++);break}default:s.skip()}return a}function U(r,e,t){const s=r.asUnsafe(),a=e.createGeometry(t),n=2+(t.hasZ?1:0)+(t.hasM?1:0);for(;s.next();)switch(s.tag()){case 2:{const o=s.getUInt32(),i=s.pos()+o;let c=0;for(;s.pos()<i;)e.addLength(a,s.getUInt32(),c++);break}case 3:{const o=s.getUInt32(),i=s.pos()+o;let c=0;for(e.allocateCoordinates(a);s.pos()<i;)e.addCoordinate(a,s.getSInt64(),c),c++,c===n&&(c=0);break}default:s.skip()}return a}function G(r){const e=r.asUnsafe(),t=new l;let s="esriGeometryPoint";for(;e.next();)switch(e.tag()){case 2:{const a=e.getUInt32(),n=e.pos()+a;for(;e.pos()<n;)t.lengths.push(e.getUInt32());break}case 3:{const a=e.getUInt32(),n=e.pos()+a;for(;e.pos()<n;)t.coords.push(e.getSInt64());break}case 1:s=b[e.getEnum()];break;default:e.skip()}return{queryGeometry:t,queryGeometryType:s}}function D(r){const e=r.asUnsafe();for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function R(r){const e=r.asUnsafe(),t={type:f(0)};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.type=f(e.getEnum());break;case 3:t.alias=e.getString();break;case 4:t.sqlType=w(e.getEnum());break;case 5:e.skip();break;case 6:t.defaultValue=e.getString();break;default:e.skip()}return t}function x(r){const e={},t=r.asUnsafe();for(;t.next();)switch(t.tag()){case 1:e.name=t.getString();break;case 2:e.isSystemMaintained=t.getBool();break;default:t.skip()}return e}function M(r,e,t,s){const a=e.createFeature(t);let n=0;for(;r.next();)switch(r.tag()){case 1:{const o=s[n++].name;a.attributes[o]=r.processMessage(D);break}case 2:a.geometry=r.processMessageWithArgs(U,e,t);break;case 4:a.centroid=r.processMessageWithArgs(S,e,t);break;default:r.skip()}return a}function P(r){const e=[1,1,1,1],t=r.asUnsafe();for(;t.next();)switch(t.tag()){case 1:e[0]=t.getDouble();break;case 2:e[1]=t.getDouble();break;case 4:e[2]=t.getDouble();break;case 3:e[3]=t.getDouble();break;default:t.skip()}return e}function _(r){const e=[0,0,0,0],t=r.asUnsafe();for(;t.next();)switch(t.tag()){case 1:e[0]=t.getDouble();break;case 2:e[1]=t.getDouble();break;case 4:e[2]=t.getDouble();break;case 3:e[3]=t.getDouble();break;default:t.skip()}return e}function B(r){const e={originPosition:d(0)},t=r.asUnsafe();for(;t.next();)switch(t.tag()){case 1:e.originPosition=d(t.getEnum());break;case 2:e.scale=t.processMessage(P);break;case 3:e.translate=t.processMessage(_);break;default:t.skip()}return e}function W(r){const e={},t=r.asUnsafe();for(;t.next();)switch(t.tag()){case 1:e.shapeAreaFieldName=t.getString();break;case 2:e.shapeLengthFieldName=t.getString();break;case 3:e.units=t.getString();break;default:t.skip()}return e}function L(r,e){const t=e.createSpatialReference();for(;r.next();)switch(r.tag()){case 1:t.wkid=r.getUInt32();break;case 5:t.wkt=r.getString();break;case 2:t.latestWkid=r.getUInt32();break;case 3:t.vcsWkid=r.getUInt32();break;case 4:t.latestVcsWkid=r.getUInt32();break;default:r.skip()}return t}function N(r,e){const t=e.createFeatureResult(),s=r.asUnsafe();t.geometryType=h(e,0);let a=!1;for(;s.next();)switch(s.tag()){case 1:t.objectIdFieldName=s.getString();break;case 3:t.globalIdFieldName=s.getString();break;case 4:t.geohashFieldName=s.getString();break;case 5:t.geometryProperties=s.processMessage(W);break;case 7:t.geometryType=h(e,s.getEnum());break;case 8:t.spatialReference=s.processMessageWithArgs(L,e);break;case 10:t.hasZ=s.getBool();break;case 11:t.hasM=s.getBool();break;case 12:t.transform=s.processMessage(B);break;case 9:t.exceededTransferLimit=s.getBool();break;case 13:e.addField(t,s.processMessage(R));break;case 15:a||(e.prepareFeatures(t),a=!0),e.addFeature(t,s.processMessageWithArgs(M,e,t,t.fields));break;case 2:t.uniqueIdField=s.processMessage(x);break;default:s.skip()}return e.finishFeatureResult(t),t}function V(r,e){const t={};let s=null;for(;r.next();)switch(r.tag()){case 4:s=r.processMessageWithArgs(G);break;case 1:t.featureResult=r.processMessageWithArgs(N,e);break;default:r.skip()}return s!=null&&t.featureResult&&e.addQueryGeometry(t,s),t}function A(r,e){try{const t=new T(new Uint8Array(r),new DataView(r)),s={};for(;t.next();)t.tag()===2?s.queryResult=t.processMessageWithArgs(V,e):t.skip();return s}catch(t){throw new m("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:t})}}function Z(r,e){const t=A(r,e),s=t.queryResult.featureResult,a=t.queryResult.queryGeometry,n=t.queryResult.queryGeometryType;if(s&&s.features&&s.features.length&&s.objectIdFieldName){const o=s.objectIdFieldName;for(const i of s.features)i.attributes&&(i.objectId=i.attributes[o])}return s&&(s.queryGeometry=a,s.queryGeometryType=n),s}export{j as U,R as k,B as m,Z as v};
