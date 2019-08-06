/**
 * Act for "app"
 * @memberof module:pon-demo-site/client.actions
 * @function AppAct
 * @returns {object} Act instance
 */
'use strict'

import { Paths } from '@self/conf'
import { show } from '@the-/window'

/** @lends module:pon-demo-site/client.actions.AppAct */
function AppAct(scope) {
  const RejectionHandleURLs = {
    ForbiddenError: Paths.ERROR_FORBIDDEN_PATH,
    NotFoundError: Paths.ERROR_NOTFOUND_PATH,
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
    setLocale(locale) {
      scope.set({ locale })
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
