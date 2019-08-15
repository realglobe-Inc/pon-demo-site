'use strict'

import theAssert from '@the-/assert'
import context from './context'

const assert = theAssert('context.loader')

/**
 * Loader for context
 * @memberof module:pon-demo-site/client
 * @namespace loader
 */
const loader = {
  /**
   * Load actions
   * @param {Object<string, function(): Object>} ActMapping
   * @param {Object} ctx - Action context
   * @returns {*}
   */
  loadActions(ActMapping, ctx) {
    const store = context.get('store')
    assert(!!store, 'store is required for loadActions')
    const actions = Object.fromEntries(
      Object.entries(ActMapping).map(([as, Factory]) => [
        as,
        Factory.fromStore(store, ctx),
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
