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

/** @lends create */
function create ({ locales, db }) {
  let server = theServer({
    static: [ 'public' ],
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
