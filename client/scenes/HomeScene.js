/**
 * Scene for home
 * @memberof module:client.scenes
 * @class HomeScene
 */
'use strict'

import { bindScope, withBusy } from '@the-/mixin-scene/shim'
import Scene from './abstract/Scene'

@withBusy
@bindScope('home')
class HomeSceneBase extends Scene {}

/** @lends module:client.scenes.HomeScene */
class HomeScene extends HomeSceneBase {
  // TODO Remove this
  // Just an example
  @withBusy.while
  async countUp() {
    const { appCtrl } = this.controllers
    const count = await appCtrl.countUp()
    this.set({ count })
  }
}

export default HomeScene
