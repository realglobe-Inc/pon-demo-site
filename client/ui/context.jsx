/**
 * UI Context
 */
'use strict'

import React from 'react'
import theAssert from 'the-assert'
import { TheContext } from 'the-context'

const assert = theAssert('context')
const context = new TheContext({})

context.stateful = function stateful (reduceState, reduceHandle) {
  assert(arguments.length === 2, 'Takes exactly two arguments')
  const init = ({ handle, l }) => ({ ...reduceHandle(handle), l })
  const pipe = ({ state }) => reduceState(state)
  return (renderer) => (
    <context.Entry init={init}
                   pipe={pipe}
    >
      {renderer}
    </context.Entry>
  )
}

export default context
