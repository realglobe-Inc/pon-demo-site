/**
 * Create an server instance
 * @function create
 * @returns {TheServer}
 */
'use strict'

const theServer = require('the-server')
const {Html} = require('@self/client/shim/ui')
const {createClient, createStore, createHandle} = require('@self/client')
const pkg = require('../../package.json')
const {ControllerMapping} = require('../mappings')
const env = require('../env')
const {isProduction} = require('the-check')

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
    static: isProduction ? [] : ['public'],
    redis: redisConfig,
    endpoints: {},
    cacheDir: 'tmp/cache',
    injectors: {
      app: (ctx) => app,
      client: (ctx) => createClient(),
      store: (ctx) => createStore(),
      handle: (ctx) => createHandle()
    },
    html: Html,
    langs: Object.keys(locales),
    scope: app
  })

  for (const [name, Controller] of Object.entries(ControllerMapping)) {
    server.load(Controller, name)
  }

  return server
}

module.exports = create
