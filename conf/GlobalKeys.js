/**
 * Global keys
 * @memberof module:pon-demo-site/conf
 * @namespace GlobalKeys
 */
'use strict'

const { isProduction } = require('@the-/check')
const theHash = require('@the-/hash')

const GlobalKeys =
  /** @lends module:pon-demo-site/conf.GlobalKeys */
  {
    /** Key of app */
    APP: 'app',
    /** Key of app context */
    CONTEXT: 'app.context',
    /** Key of app props */
    PROPS: 'app.props',
    /** Key of app store */
    STORE: 'app.store',
  }
Object.freeze(GlobalKeys)

module.exports = GlobalKeys

if (!isProduction()) {
  module.exports = theHash.proxy(module.exports, {
    name: 'GlobalKeys',
    unknownCheck: true,
  })
}
