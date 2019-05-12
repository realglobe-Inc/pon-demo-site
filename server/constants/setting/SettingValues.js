/**
 * setting/SettingValues
 * @memberof module:pon-demo-site/server.constants
 * @protected
 * @namespace SettingValues
 */
'use strict'

const { isProduction } = require('@the-/check')
const theHash = require('@the-/hash')
const theSetting = require('@the-/setting')
const Project = require('../Project')
const setting = theSetting(Project.SETTING_FILE)

module.exports =
  /** @lends module:pon-demo-site/server.constants.SettingValues */
  {
    ...setting.get(),
  }

Object.freeze(module.exports)

if (!isProduction()) {
  module.exports = theHash.proxy(module.exports, {
    name: 'SettingValues',
    unknownCheck: true,
  })
}
