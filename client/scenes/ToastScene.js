/**
 * ToastScene
 * @memberof module:client.scenes
 * @class ToastScene
 */
'use strict'

import { bindScope, siteToast } from '@the-/mixin-scene/shim'
import Scene from './abstract/Scene'

@bindScope('toast')
@siteToast
class ToastSceneBase extends Scene {}

/** @lends module:client.scenes.ToastScene */
class ToastScene extends ToastSceneBase {}

export default ToastScene
