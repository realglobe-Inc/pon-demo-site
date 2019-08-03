/**
 * Docker container configurations
 * @memberof module:pon-demo-site/misc.docker
 * @namespace Containers
 */
'use strict'

const {
  DockerPorts,
  DockerContainers,
  WebApps,
} = require('../../server/constants')
const path = require('path')
const { isMacOS } = require('@the-/check')

module.exports = Object.freeze(
  /** @lends module:pon-demo-site/misc.docker.Containers */
  {
    mysql: {
      name: DockerContainers.MYSQL_CONTAINER_NAME,
      options: {
        image: 'mysql:5',
        publish: `${DockerPorts.MYSQL_CONTAINER_PORT}:3306`,
      },
    },
    redis: {
      name: DockerContainers.REDIS_CONTAINER_NAME,
      options: {
        conf: path.resolve(__dirname, 'redis.conf'),
        image: 'redis:5.0-alpine',
        publish: `${DockerPorts.REDIS_CONTAINER_PORT}:6379`,
      },
    },
    nginx: {
      name: DockerContainers.NGINX_CONTAINER_NAME,
      options: {
        image: 'nginx:1.17-alpine',
        httpPublishPort: DockerPorts.NGINX_CONTAINER_PORT,
        staticDir: WebApps.Default.PUBLIC_DIR,
        template: path.resolve(__dirname, 'nginx.conf.template'),
        env: {
          HOST_IP: isMacOS() ? 'docker.for.mac.localhost' : '172.17.0.1',
          APP_PORT: WebApps.Default.PORT,
        },
      },
    },
  },
)
