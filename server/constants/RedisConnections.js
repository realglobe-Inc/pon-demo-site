/**
 * RedisConnections
 * @memberof module:pon-demo-site/server.constants
 * @namespace RedisConnections
 */
'use strict'

const { isProduction } = require('@the-/check')
const theHash = require('@the-/hash')
const DockerPorts = require('./DockerPorts')

module.exports =
  /** @lends module:pon-demo-site/server.constants.RedisConnections */
  {
    Default: {
      DB: '1',
      HOST: '127.0.0.1',
      PORT: DockerPorts.REDIS_CONTAINER_PORT,
    },
  }

Object.freeze(module.exports)

if (!isProduction()) {
  module.exports = theHash.proxy(module.exports, {
    name: 'RedisConnections',
    unknownCheck: true,
  })
}
