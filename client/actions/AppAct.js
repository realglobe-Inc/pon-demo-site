'use strict'

import { Paths } from '@self/conf'
import { show } from '@the-/window'

/**
 * Act for "app"
 * @memberof module:pon-demo-site/client.actions
 * @function AppAct
 * @param {Object} scope - Store scope
 * @param {Object} ctx - Context of action
 * @returns {Object} Act instance
 */
function AppAct(scope, ctx) {
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
    __proto__: { ctx },
    prepare() {
      scope.set({ ready: true })
    },
    setLocale(locale) {
      scope.set({ locale })
    },
    async handleRejectionReason(reason) {
      if (!reason) {
        return false
      }

      const href = RejectionHandleURLs[reason.name]
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
