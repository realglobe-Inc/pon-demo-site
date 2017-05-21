/**
 * Create an server instance
 * @function create
 * @returns {TheServer}
 */
'use strict'

const theServer = require('the-server')
const { Html } = require('@self/client/shim/ui')
const { createClient, createStore } = require('@self/client')
const {
  AppCtrl
} = require('../controllers')
const pkg = require('../../package.json')
const env = require('../env')

/** @lends create */
function create (config) {
  let { locales, db, redis = env.redis } = config
  let server = theServer({
    static: [ 'public' ],
    redis,
    injectors: {
      client: (ctx) => createClient(),
      store: (ctx) => createStore()
    },
    html: Html,
    langs: Object.keys(locales),
    scope: {
      pkg,
      db,
      locales
    }
  })

  server.load(AppCtrl, 'app')

  return server
}

module.exports = create
