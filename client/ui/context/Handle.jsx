/**
 * Create handler functions
 * @memberof module:pon-demo-site/client.context
 * @function Handle
 * @param {function()} factory
 */
'use strict'

import memoizeOne from 'memoize-one'
import context from './context'

/** @lends module:pon-demo-site/client.context.Handle */
export default function Handle(factory) {
  const actions = context.get('actions')
  const l = context.get('l')
  return factory({ actions, l })
}

Handle.memo = memoizeOne((factory) => Handle(factory))
