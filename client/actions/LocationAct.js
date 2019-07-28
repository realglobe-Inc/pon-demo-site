/**
 * Act for 'location'
 * @memberof module:pon-demo-site/client.scenes
 * @function LocationAct
 * @returns {object} Act instance
 */
'use strict'

import { queryWithSearch } from '@the-/util-client'
import { get } from '@the-/window'

/** @lends module:pon-demo-site/client.scenes.LocationAct */
function LocationAct(scope) {
  /**
   * @memberof module:pon-demo-site/client.scenes.LocationAct
   * @inner
   * @namespace locationAct
   */
  const act = {
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
