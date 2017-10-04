/**
 * Create an server instance
 * @function create
 * @returns {TheServer}
 */
'use strict'

const theServer = require('the-server')
const {Html} = require('@self/client/shim/ui')
const {createClient, createStore} = require('@self/client')
const c = require('../controllers')
const pkg = require('../../package.json')
const env = require('../env')

/** @lends create */
function create (config) {
  const {
    locales,
    db,
    mail,
    redisConfig = env.redis
  } = config
  const app = {
    pkg,
    db,
    locales,
    mail
  }
  const server = theServer({
    static: ['public'],
    redis: redisConfig,
    endpoints: {
    },
    cacheDir: 'tmp/cache',
    injectors: {
      app: (ctx) => app,
      client: (ctx) => createClient(),
      store: (ctx) => createStore()
    },
    html: Html,
    langs: Object.keys(locales),
    scope: app
  })

  server.load(c.AppCtrl, 'app')

  return server
}

module.exports = create
