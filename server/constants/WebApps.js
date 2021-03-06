'use strict'

const { isProduction } = require('@the-/check')
const theHash = require('@the-/hash')
const _seat = require('./_seat')
const Project = require('./Project')
const SettingValues = require('./setting/SettingValues')

/** @namespace module:pon-demo-site/server.constants.WebApps~seated */
const seated = _seat(({ portNumberFor, processNameFor, secretFor }) => ({
  APP_INSPECT_PORT: portNumberFor('inspect'),
  APP_PORT: portNumberFor('app'),
  APP_PROCESS_NAME: processNameFor(`${Project.SHORT_NAME}-app`),
  APP_SEAL_SECRET: secretFor('seal'),
}))

module.exports =
  /** @lends module:pon-demo-site/server.constants.WebApps */
  {
    Default: {
      CDN_URL: SettingValues.APP_CDN_URL,
      DOMAIN: SettingValues.APP_DOMAIN,
      INSPECT_PORT: seated.APP_INSPECT_PORT,
      PORT: seated.APP_PORT,
      PROCESS_NAME: seated.APP_PROCESS_NAME,
      PUBLIC_DIR: `${Project.BASE_DIR}/public`,
      SEAL_SECRET: seated.APP_SEAL_SECRET,
      VERSION: Project.VERSION,
    },
  }

Object.freeze(module.exports)

if (!isProduction()) {
  module.exports = theHash.proxy(module.exports, {
    name: 'WebApps',
    unknownCheck: true,
  })
}
