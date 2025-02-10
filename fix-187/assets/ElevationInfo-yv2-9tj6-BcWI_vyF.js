import{v as s,S as o,cr as m,aK as y,a0 as E,ac as v,e as l,d7 as I,i as d,a3 as w,d8 as g}from"./story-Xt2MKhXr.js";import{m as x}from"./lengthUtils-DKpMe5qR-hQG5mxEM.js";var u;let i=u=class extends l{constructor(e){super(e)}async collectRequiredFields(e,t){return I(e,t,this.expression)}clone(){return new u({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};s([o({type:String,json:{write:!0}})],i.prototype,"expression",void 0),s([o({type:String,json:{write:!0}})],i.prototype,"title",void 0),i=u=s([d("esri.symbols.support.FeatureExpressionInfo")],i);const p=i;function S(e){return 1/(x[e]||1)}function j(){const e=Object.keys(x);return w(e,"decimal-degrees"),e.sort(),e}const b=j();var a;const n=m()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),f=new y({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let r=a=class extends l{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,t){return e??(t.featureExpression&&t.featureExpression.value===0?{expression:"0"}:void 0)}writeFeatureExpressionInfo(e,t,h,c){t[h]=e.write({},c),e.expression==="0"&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):e!=null||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new a({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&g(this.featureExpressionInfo,e.featureExpressionInfo)}};s([o({type:p,json:{write:!0}})],r.prototype,"featureExpressionInfo",void 0),s([E("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],r.prototype,"readFeatureExpressionInfo",null),s([v("featureExpressionInfo",{featureExpressionInfo:{type:p},"featureExpression.value":{type:[0]}})],r.prototype,"writeFeatureExpressionInfo",null),s([o({type:n.apiValues,nonNullable:!0,json:{type:n.jsonValues,read:n.read,write:{writer:n.write,isRequired:!0}}})],r.prototype,"mode",null),s([o({type:Number,json:{write:!0}})],r.prototype,"offset",void 0),s([o({type:b,json:{type:String,read:f.read,write:f.write}})],r.prototype,"unit",null),r=a=s([d("esri.symbols.support.ElevationInfo")],r);const _=r;export{S as j,_ as q};
