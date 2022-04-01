// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";var e=s,a=t;var r=function(s,t){return e(s)||e(t)||s<=0||t<=0?NaN:s<=1?0:t*a((s-1)/s,1/s)};export{r as default};
//# sourceMappingURL=index.mjs.map
