/**
 * Act for "app"
 * @memberof module:pon-demo-site/client.actions
 * @namespace AppAct
 */
'use strict'

import { Urls } from '@self/conf'
import { show } from '@the-/window'

/** @lends module:pon-demo-site/client.actions.AppAct */
export default function AppAct() {
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
