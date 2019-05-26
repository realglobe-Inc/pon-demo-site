/**
 * Scene for home
 * @memberof module:pon-demo-site/client.scenes
 * @class HomeScene
 */
'use strict'

import { bindScope, withBusy } from '@the-/mixin-scene/shim'
import Scene from './abstract/Scene'

@withBusy
@bindScope('home')
class HomeSceneBase extends Scene {}

/** @lends module:pon-demo-site/client.scenes.HomeScene */
class HomeScene extends HomeSceneBase {
  // TODO Remove this
  // Just an example
  @withBusy.while
  async countUp() {
    const {
      controllers: { appCtrl },
    } = this
    const count = await appCtrl.countUp()
    this.set({ count })
  }
}

export default HomeScene
