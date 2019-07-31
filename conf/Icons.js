/**
 * Site icons
 * @memberof module:pon-demo-site/conf
 * @namespace Icons
 */
'use strict'

const { isProduction } = require('@the-/check')
const theHash = require('@the-/hash')

const Icons =
  /** @lends module:pon-demo-site/conf.Icons */
  {
    ACCOUNT_ICON: 'fas fa-user',
    ADD_ICON: 'fas fa-plus',
    ADMIN_ICON: 'fas fa-cogs',
    BACK_ICON: 'fas fa-angle-left',
    CLOSE_ICON: 'fas fa-times',
    DESTROY_ICON: 'fas fa-trash',
    EDIT_ICON: 'fas fa-edit',
    PROFILE_ICON: 'far fa-id-card',
    RELOAD_ICON: 'fas fa-sync',
    REMOVE_ICON: 'fas fa-close',
    SETTING_ICON: 'fas fa-cog',
    SIGN_IN_ICON: 'fas fa-sign-in-alt',
    SIGN_OUT_ICON: 'fas fa-sign-out-alt',
    SIGN_UP_ICON: 'fas fa-user-plus',
    TAB_ADMIN_ICON: 'fas fa-cogs',
    USERS_ICON: 'fas fa-users',
    WARNING_ICON: 'fas fa-exclamation-triangle',
  }

Object.freeze(Icons)

module.exports = Icons

if (!isProduction()) {
  module.exports = theHash.proxy(module.exports, {
    name: 'Icons',
    unknownCheck: true,
  })
}
