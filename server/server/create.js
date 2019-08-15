'use strict'

const { Html } = require('@self/client/shim')
const { isProduction } = require('@the-/check')
const theServer = require('@the-/server')
const theTmp = require('@the-/tmp')
const { withDebug } = require('@the-/util-ctrl')
const { RedisConnections, WebApps } = require('../constants')
const mappings = require('../mappings')
const conf = require('../../conf')
const pkg = require('../../package.json')
const debug = require('debug')('app:server')

const { ControllerMapping } = mappings
const defaultRedisConfig = {
  db: RedisConnections.Default.DB,
  host: RedisConnections.Default.HOST,
  port: RedisConnections.Default.PORT,
}

/**
 * Create an server instance
 * @memberof module:pon-demo-site/server.server
 * @function create
 * @returns {TheServer}
 */
function create(config) {
  const {
    db,
    locales = conf.locales,
    redisConfig = defaultRedisConfig,
  } = config

  const buildNumber = isProduction() ? 0 : String(new Date().getTime())
  const app = {
    buildNumber,
    cdnUrl: isProduction() ? WebApps.Default.CDN_URL : null,
    db,
    locales,
    version: pkg.version,
  }
  const { path: CACHE_DIR } = theTmp.generateDirSync({ prefix: 'server' })
  debug('CACHE_DIR', CACHE_DIR)

  return theServer({
    cacheDir: CACHE_DIR,
    controllers: withDebug.fromFactories(ControllerMapping),
    html: Html,
    info: { buildNumber },
    inject: (ctx) => ({
      ...ctx,
      app,
    }),
    langs: Object.keys(locales).filter((lang) => !/^\$/.test(lang)),
    redis: redisConfig,
    static: isProduction() ? [] : [WebApps.Default.PUBLIC_DIR],
  })
}

module.exports = create

/**
 * @external TheServer
 * @see https://github.com/the-labo/the/tree/master/packages/server#readme
 */
