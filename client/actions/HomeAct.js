'use strict'

import { busyAccessFor } from '@the-/facade-scope'

/**
 * Act for "home"
 * @memberof module:pon-demo-site/client.actions
 * @function HomeAct
 * @param {Object} scope - Store scope
 * @param {Object} ctx - Context of action
 * @returns {Object} Act instance
 */
function HomeAct(scope, ctx) {
  const {
    controllers: { appCtrl },
  } = ctx

  const busy = busyAccessFor(scope)
  /**
   * @memberof module:pon-demo-site/client.actions.HomeAct
   * @inner
   * @namespace homeAct
   */
  const act = {
    async countUp() {
      return busy.while(async () => {
        const count = await appCtrl.countUp()
        scope.set({ count })
      })
    },
  }

  Object.freeze(act)

  return act
}

HomeAct.fromStore = (store, ctx) => HomeAct(store.home, ctx)

export default HomeAct
