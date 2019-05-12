/**
 * DockerContainers
 * @memberof module:pon-demo-site/server.constants
 * @namespace DockerContainers
 */
'use strict'

const { isProduction } = require('@the-/check')
const theHash = require('@the-/hash')
const _seat = require('./_seat')
const Project = require('./Project')

module.exports = _seat(({ containerNameFor }) =>
  /** @lends module:pon-demo-site/server.constants.DockerContainers */
  ({
    MYSQL_CONTAINER_NAME: containerNameFor(`${Project.SHORT_NAME}-mysql`),
    NGINX_CONTAINER_NAME: containerNameFor(`${Project.SHORT_NAME}-nginx`),
    REDIS_CONTAINER_NAME: containerNameFor(`${Project.SHORT_NAME}-redis`),
  }),
)

Object.freeze(module.exports)

if (!isProduction()) {
  module.exports = theHash.proxy(module.exports, {
    name: 'DockerContainers',
    unknownCheck: true,
  })
}
