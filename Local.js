/**
 * Local variables
 * @namespace Local
 */
'use strict'

const { isProduction } = require('the-check')
const theSecret = require('the-secret')
const theSetting = require('the-setting')
const { hashProxy } = require('the-site-util')
const { inspect } = require('util')
const pkg = require('./package')
const directorySeat = require('../the-seat/handy/directorySeat')

const SECRET_MASTER_PASSWORD = `${pkg.name}-xxxxxxxxxxxxxxxxxx` // TODO
const secret = theSecret(`${__dirname}/secrets.json`, SECRET_MASTER_PASSWORD)

const setting = theSetting(`${__dirname}/var/app/setting.json`,
  {
    APP_CDN_URL: '',
    APP_DOMAIN: 'pon-demo-site.org',
  }
)

const seated = directorySeat(__dirname, ({
                                           containerNameFor,
                                           portNumberFor,
                                           processNameFor,
                                           secretFor,
                                         }) => (
  /** @lends seated */
  {
    APP_INSPECT_PORT: portNumberFor('inspect'),
    APP_PORT: portNumberFor('app'),
    APP_PROCESS_NAME: processNameFor(`${pkg.name}-app`),
    APP_SEAL_SECRET: secretFor('seal'),
    DOCKER_MYSQL_CONTAINER_NAME: containerNameFor(`${pkg.name}-mysql`),
    DOCKER_MYSQL_CONTAINER_PORT: portNumberFor('mysql'),
    DOCKER_NGINX_CONTAINER_NAME: containerNameFor(`${pkg.name}-nginx`),
    DOCKER_NGINX_CONTAINER_PORT: portNumberFor('nginx'),
    DOCKER_REDIS_CONTAINER_NAME: containerNameFor(`${pkg.name}-redis`),
    DOCKER_REDIS_CONTAINER_PORT: portNumberFor('redis'),
  }
))

/** @lends Local */
const Local = Object.freeze(
  /** @lends Local */
  {
    __proto__: {
      print: () => console.log(inspect(Local)),
      secret,
      setting,
    },

    // -----------------------------------
    // App
    // -----------------------------------
    ...{
      APP_CDN_URL: setting.get('APP_CDN_URL'),
      APP_DOMAIN: setting.get('APP_DOMAIN'),
      APP_INSPECT_PORT: seated.APP_INSPECT_PORT,
      APP_PORT: seated.APP_PORT,
      APP_PROCESS_NAME: seated.APP_PROCESS_NAME,
      APP_PUBLIC_DIR: `${__dirname}/public`,
      APP_SEAL_SECRET: seated.APP_SEAL_SECRET,
      APP_VERSION: pkg.version,
    },

    // -----------------------------------
    // DB
    // -----------------------------------
    ...(isProduction() ? {
      DB_DATABASE: `${pkg.name}`,
      DB_DIALECT: 'rdb/mysql',
      DB_HOST: secret.get('DB_HOST'),
      DB_PASSWORD: secret.get('DB_PASSWORD'),
      DB_PORT: secret.get('DB_PORT'),
      DB_ROOT_PASSWORD: secret.get('DB_ROOT_PASSWORD'),
      DB_ROOT_USERNAME: secret.get('DB_ROOT_USERNAME'),
      DB_USERNAME: secret.get('DB_USERNAME'),
    } : {
      DB_DATABASE: `${pkg.name}-dev`,
      DB_DIALECT: 'rdb/mysql',
      DB_HOST: '0.0.0.0',
      DB_PASSWORD: `${pkg.name}-dev`,
      DB_PORT: seated.DOCKER_MYSQL_CONTAINER_PORT,
      DB_ROOT_PASSWORD: 'root',
      DB_ROOT_USERNAME: 'root',
      DB_USERNAME: `${pkg.name}-dev`,
    }),

    // -----------------------------------
    // Redis
    // -----------------------------------
    ...{
      REDIS_DB: '1',
      REDIS_HOST: '127.0.0.1',
      REDIS_PORT: seated.DOCKER_REDIS_CONTAINER_PORT,
    },

    // -----------------------------------
    // Docker
    // -----------------------------------
    ...{
      DOCKER_MYSQL_CONTAINER_NAME: seated.DOCKER_MYSQL_CONTAINER_NAME,
      DOCKER_MYSQL_CONTAINER_PORT: seated.DOCKER_MYSQL_CONTAINER_PORT,
      DOCKER_NGINX_CONTAINER_NAME: seated.DOCKER_NGINX_CONTAINER_NAME,
      DOCKER_NGINX_CONTAINER_PORT: seated.DOCKER_NGINX_CONTAINER_PORT,
      DOCKER_REDIS_CONTAINER_NAME: seated.DOCKER_REDIS_CONTAINER_NAME,
      DOCKER_REDIS_CONTAINER_PORT: seated.DOCKER_REDIS_CONTAINER_PORT,
    },
  })

module.exports = Local

if (!isProduction()) {
  module.exports = hashProxy(module.exports, { name: 'Local', unknownCheck: true })
}

if (!module.parent) {
  Local.print()
}
