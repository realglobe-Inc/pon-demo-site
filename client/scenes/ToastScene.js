/**
 * ToastScene
 * @memberof module:pon-demo-site/client.scenes
 * @class ToastScene
 */
'use strict'

import { bindScope } from '@the-/mixin-scene/shim'
import Scene from './abstract/Scene'

@bindScope('toast')
class ToastSceneBase extends Scene {}

/** @lends module:pon-demo-site/client.scenes.ToastScene */
class ToastScene extends ToastSceneBase {
  /**
   * Rest toasts
   * @param {Object<string, string[]>} queues - Toast queue
   */
  reset(queues) {
    for (const [name, queue] of Object.entries(queues)) {
      this.scope[name].reset(queue)
    }
  }
  /**
   * Show error toast
   * @param {string} message
   */
  showError(message) {
    this.scope.error.push(message)
  }
  /**
   * Show info toast
   * @param {string} message
   */
  showInfo(message) {
    this.scope.info.push(message)
  }
  /**
   * Show warn toast
   * @param {string} message
   */
  showWarn(message) {
    this.scope.warn.push(message)
  }
}

export default ToastScene
