/**
 * UI Context
 * @memberof module:pon-demo-site/client
 * @namespace context
 */
'use strict'

import React from 'react'
import theAssert from '@the-/assert'
import { TheContext } from '@the-/context'

const assert = theAssert('context')
const context = new TheContext({})

export function loadStore(store) {
  store.subscribe(() => context.set({ state: store.state }))
  context.set({ state: store.state })
  return store
}

export function loadLocale(locales, lang) {
  const l = locales.bind(lang)
  context.set({ l, lang })
  return l
}

export function loadActions(ActMapping, actContext) {
  const store = context.get('store')
  assert(!!store, 'store is required for loadActions')
  const actions = Object.fromEntries(
    Object.entries(ActMapping).map(([as, Factory]) => [
      as,
      Factory.fromStore(store, actContext),
    ]),
  )
  context.set({ actions })
  return actions
}

/** Create stateless renderer */
export function Stateless() {
  assert(arguments.length === 0, 'Stateful takes exactly no arguments')
  const init = ({ l }) => ({ l })
  const noop = () => null
  return (renderer) => (
    <context.Entry init={init} pipe={noop}>
      {renderer}
    </context.Entry>
  )
}

/** Create stateful renderer */
export function Stateful(reduceState, reduceHandle) {
  assert(arguments.length === 2, 'Stateful takes exactly two arguments')
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

export default context
