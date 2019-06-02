/**
 * ConnectionRetryScene
 * @memberof module:pon-demo-site/client.scenes
 * @class ConnectionRetryScene
 */
'use strict'

import { bindScope, withBusy } from '@the-/mixin-scene/shim'
import { reload } from '@the-/window'
import Scene from './abstract/Scene'

@withBusy
@bindScope('connection.retry')
class ConnectionRetrySceneBase extends Scene {}

/** @lends module:pon-demo-site/client.scenes.ConnectionRetryScene */
class ConnectionRetryScene extends ConnectionRetrySceneBase {
  start() {
    this.set({ active: true, busy: false })
  }

  @withBusy.while
  async doExec() {
    await reload()
  }
}

export default ConnectionRetryScene
