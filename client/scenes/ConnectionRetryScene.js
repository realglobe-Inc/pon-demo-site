/**
 * ConnectionRetryScene
 * @memberof module:client.scenes
 * @class ConnectionRetryScene
 */
'use strict'

import { bindScope, withBusy, withLocation } from '@the-/mixin-scene/shim'
import Scene from './abstract/Scene'

@withBusy
@withLocation
@bindScope('connection.retry')
class ConnectionRetrySceneBase extends Scene {}

/** @lends module:client.scenes.ConnectionRetryScene */
class ConnectionRetryScene extends ConnectionRetrySceneBase {
  start() {
    this.set({ active: true, busy: false })
  }

  @withBusy.while
  async doExec() {
    await this.reloadLocation()
  }
}

export default ConnectionRetryScene
