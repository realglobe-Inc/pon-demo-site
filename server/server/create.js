/**
 * Create an server instance
 * @function create
 * @returns {TheServer}
 */
'use strict'

const { isProduction } = require('the-check')
const theServer = require('the-server')
const {
  Html,
  createClient,
  createHandle,
  createStore,
} = require('@self/client/shim')
const Local = require('@self/Local')
const mappings = require('../mappings')
const conf = require('../../conf')
const pkg = require('../../package')

const { ControllerMapping } = mappings
const defaultRedisConfig = {
  db: Local.REDIS_DB,
  host: Local.REDIS_HOST,
  port: Local.REDIS_PORT,
}

/** @lends create */
function create(config) {
  const {
    db,
    locales = conf.locales,
    redisConfig = defaultRedisConfig,
  } = config

  const buildNumber = isProduction() ? 0 : String(new Date().getTime())
  const app = {
    buildNumber,
    cdnUrl: isProduction() ? Local.APP_CDN_URL : null,
    db,
    locales,
    version: pkg.version,
  }

  return theServer({
    cacheDir: 'tmp/cache',
    controllers: ControllerMapping,
    html: Html,
    info: { buildNumber },
    injectors: {
      app: (ctx) => app,
      client: (ctx) => createClient(),
      handle: (ctx) => createHandle(),
      store: (ctx) => createStore(),
    },
    langs: Object.keys(locales),
    redis: redisConfig,
    scope: app,
    static: isProduction() ? [] : [Local.APP_PUBLIC_DIR],
  })
}

module.exports = create
