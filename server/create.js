/**
 * Create server instance
 * @function create
 */
'use strict'

const jkServer = require('jk-server')
const { serverRendering } = require('jk-react')
const db = require('../db')
const Html = require('../shim/components/Html').default
const App = require('../shim/components/App').default

/** @lends create */
function create () {
  let server = jkServer({
    static: [ 'public' ],
    rpc: {
      sign: require('./rpc/sign_module')
    },
    scope: {
      db
    },
    middlewares: []
  })

  //TODO
  server.server.use(
    serverRendering(Html, App)
  )

  return server
}

module.exports = create
