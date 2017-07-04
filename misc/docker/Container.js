'use strict'

const DockerPortBase = 4560

module.exports = Object.freeze({
  MYSQL_IMAGE: 'mysql:8',
  MYSQL_PUBLISHED_PORT: DockerPortBase,
  REDIS_IMAGE: 'redis:3',
  REDIS_PUBLISHED_PORT: DockerPortBase + 1
})