/**
 * Act for "connection.retry"
 * @memberof module:pon-demo-site/client.actions
 * @function ConnectionRetryAct
 */
'use strict'

import { unlessProduction } from '@the-/check'
import { busyFor } from '@the-/facade-scope'
import { reload } from '@the-/window'

/** @lends module:pon-demo-site/client.actions.ConnectionRetryAct */
function ConnectionRetryAct(scope) {
  const busy = busyFor(scope)

  /**
   * @memberof module:pon-demo-site/client.actions.ConnectionRetryAct
   * @inner
   * @namespace connectionRetryAct
   */
  const act = {
    bindClient(client) {
      client.onGone(() => {
        setTimeout(() => {
          act.start()
          unlessProduction(() => {
            client.pingPongAnd(() => act.reload())
          })
        }, 1000)
      })
    },
    close() {
      scope.init()
    },
    async reload() {
      return busy.while(async () => {
        reload()
      })
    },
    async start() {
      scope.set({ active: true, busy: false })
    },
  }

  Object.freeze(act)

  return act
}

ConnectionRetryAct.fromStore = (store, ctx) =>
  ConnectionRetryAct(store.connection.retry, ctx)

export default ConnectionRetryAct
