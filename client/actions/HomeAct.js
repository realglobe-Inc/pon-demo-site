/**
 * Act for "home"
 * @memberof module:pon-demo-site/client.actions
 * @namespace HomeAct
 */
'use strict'

import { busyFor } from '@the-/facade-scope'

/** @lends module:pon-demo-site/client.actions.HomeAct */
export default function HomeAct({ controllers, store }) {
  const { appCtrl } = controllers
  const { home: scope } = store

  const busy = busyFor(scope)

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
