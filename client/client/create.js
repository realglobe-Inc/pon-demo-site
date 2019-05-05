/**
 * Client a site client
 * @memberof module:client.client
 * @function create
 * @param {Object} [config={}]
 * @returns {TheClient} A client instance
 */
'use strict'

import { GlobalKeys } from '@self/conf'
import { unlessProduction } from '@the-/check'
import { TheClient } from '@the-/client/shim'
import { get } from '@the-/window'

class Client extends TheClient {}

/** @lends module:client.client.create */
function create(config = {}) {
  const { v } = get(GlobalKeys.PROPS) || {}
  return new Client({
    version: v,
    ...config,
  })
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
  })
  return client
}

export default create
