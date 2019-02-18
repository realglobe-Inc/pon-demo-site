/**
 * Client a site client
 * @function create
 * @returns {TheClient} - A client instance
 */
'use strict'

const { unlessProduction } = require('the-check')
const { TheClient } = require('the-client/shim')
const { version } = require('../constants/AppConsts')

class Client extends TheClient {}

/** @lends create */
function create(config = {}) {
  return new Client({ version, ...config })
}

create.for = (namespace, options = {}) => {
  const {
    handle: { connectionRetryScene },
  } = options
  const client = Client.for(namespace, {
    onGone: () => {
      setTimeout(() => {
        connectionRetryScene.set({ active: true, busy: false })
        unlessProduction(() =>
          client.pingPongAnd(() => connectionRetryScene.doExec()),
        )
      }, 1000)
    },
    version,
  })
  return client
}

module.exports = create
