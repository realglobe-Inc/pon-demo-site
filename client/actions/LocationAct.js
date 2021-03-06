'use strict'

import { queryWithSearch } from '@the-/util-client'
import { get } from '@the-/window'

/**
 * Act for 'location'
 * @memberof module:pon-demo-site/client.scenes
 * @function LocationAct
 * @param {Object} scope - Scope of act
 * @param {Object} ctx - Actions context
 * @returns {Object} Act instance
 */
function LocationAct(scope, ctx) {
  /**
   * @memberof module:pon-demo-site/client.scenes.LocationAct
   * @inner
   * @namespace locationAct
   */
  const act = {
    __proto__: { ctx },
    bindHistory(history) {
      history.listen((location) => act.handleLocationChange(location))
      act.setLocation(history.location)
    },
    handleLocationChange(location) {
      setTimeout(() => {
        act.setLocation(location)
      }, 1) // Wait to router change
    },
    setLocation({ pathname, search }) {
      scope.set({
        host: get('location.host'),
        pathname,
        query: queryWithSearch(search),
      })
    },
  }

  Object.freeze(act)

  return act
}

LocationAct.fromStore = (store, ctx) => LocationAct(store.location, ctx)

export default LocationAct
