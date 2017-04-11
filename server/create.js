/**
 * Create server instance
 * @function create
 */
'use strict'

const sugoHub = require('sugo-hub')
const sugoActor = require('sugo-actor')
const sugoEndpointActor = require('sugo-endpoint-actor')
const sugoEndpointHTML = require('sugo-endpoint-html')

/** @lends create */
function create () {
  let hub = sugoHub({
    static: [ 'public' ],
    middlewares: [],
    localActors: {
      rpc: sugoActor({
        modules: {
          sign: require('./rpc/sign_module')
        }
      })
    },
    endpoints: {
      '/': '/views/index/index',
      '/rest/:module/:method': sugoEndpointActor({}),
      '/views/:module/:method': sugoEndpointHTML({
        index: require('./views/index_view')
      })
    }
  })
  return hub
}

module.exports = create
