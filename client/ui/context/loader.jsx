/**
 * Loader for context
 * @memberof module:pon-demo-site/client
 * @namespace loader
 */
'use strict'

import theAssert from '@the-/assert'
import context from './context'

const assert = theAssert('context.loader')

/** @lends module:pon-demo-site/client.loader */
const loader = {
  loadActions(ActMapping, actContext) {
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
  },

  loadLocale(locales, lang) {
    const l = locales.bind(lang)
    context.set({ l, lang })
    return l
  },

  loadStore(store) {
    store.subscribe(() => context.set({ state: store.state }))
    context.set({ state: store.state, store })
    return store
  },
}

Object.freeze(loader)

export default loader
