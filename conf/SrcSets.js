/**
 * Source url set
 * @memberof module:pon-demo-site/conf
 * @namespace SrcSets
 */
'use strict'

const { isProduction } = require('@the-/check')
const theHash = require('@the-/hash')
const Paths = require('./Paths')

module.exports = Object.freeze(
  /** @lends SrcSets */
  {
    cssSet: [
      Paths.CSS_THEME_PATH,
      Paths.CSS_NORMALIZE_PATH,
      Paths.CSS_FONT_PATH,
      Paths.CSS_FLATPICKR_PATH,
      ...(isProduction()
        ? [Paths.PROD_CSS_BUNDLE_PATH]
        : [Paths.CSS_BUNDLE_PATH]),
    ],
    jsSet: [
      Paths.JS_SHIM_PATH,
      ...(isProduction()
        ? [Paths.PROD_JS_BUNDLE_PATH]
        : [Paths.JS_BUNDLE_PATH]),
    ],
  },
)

if (!isProduction()) {
  module.exports = theHash.proxy(module.exports, {
    name: 'SrcSets',
    unknownCheck: true,
  })
}
