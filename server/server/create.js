/**
 * Create an server instance
 * @memberof module:pon-demo-site/server
 * @function create
 * @returns {TheServer}
 */
'use strict'

const {
  Html,
  createClient,
  createHandle,
  createStore,
} = require('@self/client/shim')
const { isProduction } = require('@the-/check')
const theServer = require('@the-/server')
const theTmp = require('@the-/tmp')
const { RedisConnections, WebApps } = require('../constants')
const mappings = require('../mappings')
const conf = require('../../conf')
const pkg = require('../../package')
const debug = require('debug')('app:server')

const { ControllerMapping } = mappings
const defaultRedisConfig = {
  db: RedisConnections.Default.DB,
  host: RedisConnections.Default.HOST,
  port: RedisConnections.Default.PORT,
}

/** @lends module:pon-demo-site/server.create */
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
    controllers: ControllerMapping,
    html: Html,
    info: { buildNumber },
    injectors: {
      app: () => app,
      client: () => createClient(),
      handle: () => createHandle(),
      store: () => createStore(),
    },
    langs: Object.keys(locales),
    redis: redisConfig,
    scope: app,
    static: isProduction() ? [] : [WebApps.Default.PUBLIC_DIR],
  })
}

module.exports = create
