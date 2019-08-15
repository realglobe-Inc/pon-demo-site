'use strict'

import React from 'react'
import theAssert from '@the-/assert'
import context from './context'

const assert = theAssert('context/Stateful')

/**
 * Create stateful renderer
 * @memberof module:pon-demo-site/client.context
 * @function Stateful
 */
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
