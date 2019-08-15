'use strict'

import context from './context'

/**
 * Create handler functions
 * @memberof module:pon-demo-site/client.context
 * @function Handle
 * @param {function()} factory
 */
export default function Handle(factory) {
  const actions = context.get('actions')
  const l = context.get('l')
  return factory({ actions, l })
}
