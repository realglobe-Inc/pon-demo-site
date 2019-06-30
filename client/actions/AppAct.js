/**
 * Act for "app"
 * @memberof module:pon-demo-site/client.actions
 * @function AppAct
 */
'use strict'

import { Urls } from '@self/conf'
import { show } from '@the-/window'

/** @lends module:pon-demo-site/client.actions.AppAct */
function AppAct(scope) {
  const RejectionHandleURLs = {
    ForbiddenError: Urls.ERROR_FORBIDDEN_URL,
    NotFoundError: Urls.ERROR_NOTFOUND_URL,
  }

  /**
   * @memberof module:pon-demo-site/client.actions.AppAct
   * @inner
   * @namespace appAct
   */
  const act = {
    prepare() {
      scope.set({ ready: true })
    },
    async handleRejectionReason(reason) {
      const href = RejectionHandleURLs[(reason?.name)]
      if (href) {
        show(href)
        return true
      }
      return false
    },
  }

  Object.freeze(act)

  return act
}

AppAct.fromStore = (store, ctx) => AppAct(store.app, ctx)

export default AppAct
