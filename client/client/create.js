/**
 * Client a site client
 * @memberof module:pon-demo-site/client.client
 * @function create
 * @param {string} namespace
 * @param {object} [config={}]
 * @returns {TheClient} A client instance
 */
'use strict'

import { GlobalKeys } from '@self/conf'
import { TheClient } from '@the-/client/shim'
import { get } from '@the-/window'

class Client extends TheClient {}

/** @lends module:pon-demo-site/client.client.create */
function create(namespace = 'singleton', config = {}) {
  const { v } = get(GlobalKeys.PROPS) || {}
  return Client.for(namespace, {
    version: v,
    ...config,
  })
}

export default create
