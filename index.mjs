// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.0-esm/index.mjs";function e(e,i){return s(e)||s(i)||e<=0||i<=0?NaN:e<=1?0:i*t((e-1)/e,1/e)}export{e as default};
//# sourceMappingURL=index.mjs.map
