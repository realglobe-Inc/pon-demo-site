'use strict'

import { unlessProduction } from '@the-/check'
import { busyAccessFor } from '@the-/facade-scope'
import { reload } from '@the-/window'

/**
 * Act for "connection.retry"
 * @memberof module:pon-demo-site/client.actions
 * @function ConnectionRetryAct
 * @param {Object} scope - Store scope
 * @param {Object} ctx - Context of action
 * @returns {Object} Act instance
 */
function ConnectionRetryAct(scope, ctx) {
  const busyAccess = busyAccessFor(scope)

  /**
   * @memberof module:pon-demo-site/client.actions.ConnectionRetryAct
   * @inner
   * @namespace connectionRetryAct
   */
  const act = {
    __proto__: { ctx },
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
      return busyAccess.while(async () => {
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
