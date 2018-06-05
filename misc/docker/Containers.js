/**
 * Docker container configurations
 * @namespace Containers
 */
'use strict'

const Local = require('../../Local')
const path = require('path')
const {isMacOS} = require('the-check')

module.exports = Object.freeze(
  /** @lends Containers */
  {
    mongo: {
      name: Local.MONGO_CONTAINER_NAME,
      options: {
        image: 'mongo:3.2',
        publish: `${Local.MONGO_CONTAINER_PORT}:27017`
      }
    },
    redis: {
      name: Local.REDIS_CONTAINER_NAME,
      options: {
        conf: path.resolve(__dirname, 'redis.conf'),
        image: 'redis:4',
        publish: `${Local.REDIS_CONTAINER_PORT}:6379`
      }
    },
    nginx: {
      name: Local.NGINX_CONTAINER_NAME,
      options: {
        image: 'nginx:1.13',
        httpPublishPort: Local.NGINX_CONTAINER_PORT,
        template: path.resolve(__dirname, 'nginx.conf.template'),
        env: {
          HOST_IP: isMacOS() ? 'docker.for.mac.localhost' : '172.17.0.1',
          APP_PORT: Local.APP_PORT
        }
      }
    }
  }
)