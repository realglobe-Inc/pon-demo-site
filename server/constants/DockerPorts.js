/**
 * DockerPorts
 * @memberof module:pon-demo-site/server.constants
 * @namespace DockerPorts
 */
'use strict'

const { isProduction } = require('@the-/check')
const theHash = require('@the-/hash')
const _seat = require('./_seat')

module.exports = _seat(({ portNumberFor }) =>
  /** @lends module:pon-demo-site/server.constants.DockerPorts */
  ({
    MYSQL_CONTAINER_PORT: portNumberFor('mysql'),
    NGINX_CONTAINER_PORT: portNumberFor('nginx'),
    REDIS_CONTAINER_PORT: portNumberFor('redis'),
  }),
)

Object.freeze(module.exports)

if (!isProduction()) {
  module.exports = theHash.proxy(module.exports, {
    name: 'DockerPorts',
    unknownCheck: true,
  })
}
