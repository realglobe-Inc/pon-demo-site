'use strict'

import { GlobalKeys } from '@self/conf'
import { TheClient } from '@the-/client/shim'
import { get } from '@the-/window'

/**
 * Client a site client
 * @memberof module:pon-demo-site/client.client
 * @function create
 * @param {string} namespace
 * @param {Object} [config={}]
 * @returns {TheClient} A client instance
 */
function create(namespace = 'singleton', config = {}) {
  const { v = 'unknown' } = get(GlobalKeys.PROPS) || {}
  return TheClient.for(namespace, {
    version: v,
    ...config,
  })
}

export default create
