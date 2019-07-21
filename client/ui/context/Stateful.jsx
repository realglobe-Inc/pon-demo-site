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
export default function Stateful(reduceState) {
  assert(arguments.length === 1, 'Stateful takes one arguments')
  const init = ({ l }) => ({ l })
  const pipe = ({ state }) => reduceState(state)
  return (renderer) => (
    <context.Entry init={init} pipe={pipe}>
      {renderer}
    </context.Entry>
  )
}

Stateful.memo = function statefulMemo(reduceState, deps = []) {
  assert(arguments.length <= 2, 'Stateful.memo takes one or two arguments')
  return React.useMemo(() => Stateful(reduceState), deps)
}
