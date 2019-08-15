/**
 * Project
 * @memberof module:pon-demo-site/server.constants
 * @namespace Project
 */
'use strict'

const path = require('path')
const { isProduction } = require('@the-/check')
const theHash = require('@the-/hash')
const pkg = require('../../package.json')

const pkgShortName = pkg.name.split('/').pop()
const BASE_DIR = path.dirname(require.resolve('../../package'))

module.exports =
  /** @lends module:pon-demo-site/server.constants.Project */
  {
    BASE_DIR,
    NAME: pkg.name,
    // TODO
    SECRET_MASTER_PASSWORD: `${pkgShortName}-xxxxxxxxxxxxxxxxxx`,
    SECRETS_FILE: require.resolve('./secret/Secrets.json'),
    SETTING_FILE: path.join(BASE_DIR, 'var/app/setting.json'),
    SHORT_NAME: pkg.name.split('/').pop(),
    VERSION: pkg.version,
  }

Object.freeze(module.exports)

if (!isProduction()) {
  module.exports = theHash.proxy(module.exports, {
    name: 'Project',
    unknownCheck: true,
  })
}
