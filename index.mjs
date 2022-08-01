// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";function e(e,i){return s(e)||s(i)||e<=0||i<=0?NaN:e<=1?0:i*t((e-1)/e,1/e)}export{e as default};
//# sourceMappingURL=index.mjs.map
