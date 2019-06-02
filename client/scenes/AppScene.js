/**
 * AppScene
 * @memberof module:pon-demo-site/client.scenes
 * @class AppScene
 */
'use strict'

import { Urls } from '@self/conf'
import { bindScope, withBusy, withQuery } from '@the-/mixin-scene/shim'
import { reload, show } from '@the-/window'
import Scene from './abstract/Scene'

@withBusy
@withQuery
@bindScope('app')
class AppSceneBase extends Scene {}

/** @lends AppScene */
class AppScene extends AppSceneBase {
  handleLocationChange(location) {
    setTimeout(() => {
      this.setLocation(location)
    }, 1) // Wait to router change
  }

  handleRejectionReason(reason) {
    const href = {
      ForbiddenError: Urls.ERROR_FORBIDDEN_URL,
      NotFoundError: Urls.ERROR_NOTFOUND_URL,
    }[(reason?.name)]
    if (href) {
      show(href)
      return true
    }
    return false
  }

  setLocation({ pathname, search }) {
    this.set({
      pathname,
      query: this.queryWithSearch(search),
    })
  }

  @withBusy.while
  async doExec() {
    await reload()
  }
}

export default AppScene
