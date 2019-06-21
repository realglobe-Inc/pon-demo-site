/**
 * UI Context
 */
'use strict'

import React from 'react'
import theAssert from '@the-/assert'
import { TheContext } from '@the-/context'

const assert = theAssert('context')
const context = new TheContext({})

context.createActions = (ActMapping, store, actContext) =>
  Object.fromEntries(
    Object.entries(ActMapping).map(([as, Factory]) => [
      as,
      Factory.fromStore(store, actContext),
    ]),
  )

/** Create stateless renderer */
context.stateless = function stateless() {
  const init = ({ l }) => ({ l })
  const noop = () => null
  return (renderer) => (
    <context.Entry init={init} pipe={noop}>
      {renderer}
    </context.Entry>
  )
}

/** Create stateful renderer */
context.stateful = function stateful(reduceState, reduceHandle) {
  assert(arguments.length === 2, 'Takes exactly two arguments')
  const init = ({ actions, history, l, lang }, pipedProxy) => ({
    history,
    l,
    lang,
    ...reduceHandle(
      {
        l,
        ...actions,
      },
      pipedProxy,
    ),
  })
  const pipe = ({ state }) => reduceState(state)
  return (renderer) => (
    <context.Entry init={init} pipe={pipe}>
      {renderer}
    </context.Entry>
  )
}

export default context
