/**
 * Site Paths
 * @memberof module:pon-demo-site/conf
 * @namespace Paths
 */
'use strict'

const { isProduction } = require('@the-/check')
const theHash = require('@the-/hash')
const pkg = require('../package')

const prodAssetPath = `/v${pkg.version}`

const Paths =
  /** @lends module:pon-demo-site/conf.Paths */
  {
    // -----------------------------------
    // Css
    // -----------------------------------
    ...{
      CSS_BUNDLE_PATH: '/build/bundle.css',
      CSS_FLATPICKR_PATH: '/css/flatpickr.min.css',
      CSS_FONT_PATH: '/css/fontawesome-all.css',
      CSS_NORMALIZE_PATH: '/css/normalize.css',
      CSS_THEME_PATH: '/css/theme.css',
    },

    // -----------------------------------
    // Error
    // -----------------------------------
    ...{
      ERROR_FORBIDDEN_PATH: '/errors/forbidden',
      ERROR_NOTFOUND_PATH: '/errors/not-found',
    },

    // -----------------------------------
    // Icon
    // -----------------------------------
    ...{
      ICON_PATH: '/images/app-icon.png',
    },

    // -----------------------------------
    // JS
    // -----------------------------------
    ...{
      JS_BUNDLE_PATH: '/build/bundle.js',
      JS_CHUNK_BASE_PATH: isProduction() ? prodAssetPath : '/build',
      JS_ROOT_SERVICE_WORKER_PATH: '/RootServiceWorker.js',
      JS_SHIM_PATH: '/js/es5-shim.min.js',
    },

    // -----------------------------------
    // Production
    // -----------------------------------
    ...{
      PROD_ASSET_PATH: prodAssetPath,
      PROD_CSS_BUNDLE_PATH: `${prodAssetPath}/bundle.css`,
      PROD_JS_BUNDLE_PATH: `${prodAssetPath}/bundle.js`,
    },

    // -----------------------------------
    // Top
    // -----------------------------------
    ...{
      TOP_PATH: '/',
    },
  }
Object.freeze(Paths)

module.exports = Paths

if (!isProduction()) {
  module.exports = theHash.proxy(module.exports, {
    name: 'Paths',
    unknownCheck: true,
  })
}
