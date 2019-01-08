/**
 * UI Context
 */
'use strict'

import React from 'react'
import theAssert from 'the-assert'
import { TheContext } from 'the-context'

const assert = theAssert('context')
const context = new TheContext({})

/** Create stateless renderer */
context.stateless = function stateless () {
  const init = ({ l }) => ({ l })
  return (renderer) => (
    <context.Entry init={init}
                   pipe={null}
    >
      {renderer}
    </context.Entry>
  )
}

/** Create stateful renderer */
context.stateful = function stateful (reduceState, reduceHandle) {
  assert(arguments.length === 2, 'Takes exactly two arguments')
  const init = ({ handle, l }, pipedProxy) => ({ ...reduceHandle(handle, pipedProxy), l })
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
