/**
 * Site Urls
 * @enum {string} Urls
 */
'use strict'

const {isProduction} = require('the-check')
const {hashProxy} = require('the-site-util')
const pkg = require('../package')

module.exports = Object.freeze(
  /** @lends Urls */
  {

    // -----------------------------------
    // Css
    // -----------------------------------
    CSS_BUNDLE_URL: '/build/bundle.css',
    CSS_FONT_URL: '/css/fontawesome-all.css',
    CSS_NORMALIZE_URL: '/css/normalize.css',
    CSS_THEME_URL: '/css/theme.css',
    ERROR_FORBIDDEN_URL: '/errors/forbidden',

    // -----------------------------------
    // Error
    // -----------------------------------
    ERROR_NOTFOUND_URL: '/errors/not-found',

    // -----------------------------------
    // Icon
    // -----------------------------------
    ICON_URL: '/images/app-icon.png',

    // -----------------------------------
    // JS
    // -----------------------------------
    JS_BUNDLE_URL: '/build/bundle.js',
    JS_EXTERNAL_URL: '/build/external-bundle.js',
    JS_SHIM_URL: '/js/es5-shim.min.js',

    // -----------------------------------
    // Production
    // -----------------------------------
    PRODUCTION_CSS_URL: `/${pkg.name}-${pkg.version}.css`,
    PRODUCTION_JS_URL: `/${pkg.name}-${pkg.version}.js`,

    // -----------------------------------
    // Top
    // -----------------------------------
    TOP_URL: '/',
  }
)

if (!isProduction()) {
  module.exports = hashProxy(module.exports, {name: 'Urls', unknownCheck: true})
}
