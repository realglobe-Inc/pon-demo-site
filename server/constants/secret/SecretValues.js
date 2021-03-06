'use strict'

const { isProduction } = require('@the-/check')
const theHash = require('@the-/hash')
const theSecret = require('@the-/secret')
const Project = require('../Project')

const secret = theSecret(Project.SECRETS_FILE, Project.SECRET_MASTER_PASSWORD)

module.exports =
  /**
   * 平文で保存したくない情報
   * 編集する時は`server/constants/secret/Secrets.json`に追加すれば良い。
   * `pon secret:dec` / `pon secret:enc` で復号化、暗号化ができる
   * @namespace {string} SecretValues
   * @private
   * @memberof module:pon-demo-site/server
   */
  { ...secret.get() }

Object.freeze(module.exports)

if (!isProduction()) {
  module.exports = theHash.proxy(module.exports, {
    name: 'Secrets',
    unknownCheck: true,
  })
}
