"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=a(function(O,o){
var i=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-pow/dist');function p(e,r,t){return i(e)||i(r)||i(t)||r<=0||t<=0?NaN:e<=0?0:f(1+f(e,-r),-t)}o.exports=p
});var v=a(function(R,q){
var y=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-pow/dist');function w(e,r){if(u(e)||u(r)||e<=0||r<=0)return y(NaN);return t;function t(n){return u(n)?NaN:n<=0?0:c(1+c(n,-e),-r)}}q.exports=w
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=s(),m=v();l(N,"factory",m);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
