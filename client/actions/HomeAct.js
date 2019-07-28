/**
 * Act for "home"
 * @memberof module:pon-demo-site/client.actions
 * @function HomeAct
 * @returns {object} Act instance
 */
'use strict'

import { busyAccessFor } from '@the-/facade-scope'

/** @lends module:pon-demo-site/client.actions.HomeAct */
function HomeAct(scope, { controllers }) {
  const { appCtrl } = controllers

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
