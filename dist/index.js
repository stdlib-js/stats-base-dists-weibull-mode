"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var u=s(function(q,t){
var i=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-pow/dist');function c(e,r){return i(e)||i(r)||e<=0||r<=0?NaN:e<=1?0:r*o((e-1)/e,1/e)}t.exports=c
});var f=u();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
