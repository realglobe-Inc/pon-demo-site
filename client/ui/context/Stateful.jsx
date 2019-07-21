/**
 * Create stateful renderer
 * @memberof module:pon-demo-site/client.context
 * @function Stateful
 */
'use strict'

import React from 'react'
import theAssert from '@the-/assert'
import context from './context'
const assert = theAssert('context/Stateful')

/** @lends module:pon-demo-site/client.context.Stateful */
export default function Stateful(reduceState, reduceHandle = () => ({})) {
  assert(arguments.length <= 2, 'Stateful takes one or two arguments')
  const init = ({ actions, l, lang }) => ({
    l,
    lang,
    ...reduceHandle({ actions, l, lang }),
  })
  const pipe = ({ state }) => reduceState(state)
  return (renderer) => (
    <context.Entry init={init} pipe={pipe}>
      {renderer}
    </context.Entry>
  )
}
