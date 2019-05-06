/**
 * CallScene
 * @memberof module:client.scenes.abstract
 * @class CallScene
 */
'use strict'

import { withBusy } from '@the-/mixin-scene/shim'
import Scene from './Scene'

@withBusy
class CallSceneBase extends Scene {}

/** @lends module:client.scenes.abstract.CallScene */
class CallScene extends CallSceneBase {
  async dealWith() {
    throw new Error(`[CallScene] Not implemented`)
  }

  @withBusy.while
  async doExec(value) {
    return this.dealWith(value)
  }
}

export default CallScene
