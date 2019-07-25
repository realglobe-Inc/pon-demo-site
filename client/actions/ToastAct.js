/**
 * Act for 'toast'
 * @memberof module:pon-demo-site/client.actions
 * @function ToastAct
 * @param {object} context
 * @returns {object}
 */
'use strict'

/** @lends module:pon-demo-site/client.actions.ToastAct */
function ToastAct(scope) {
  /**
   * @memberof module:pon-demo-site/client.actions.ToastAct
   * @inner
   * @namespace toastAct
   */
  const act = {
    /**
     * Rest toasts
     * @param {object<string, Array<string>>} queues - Toast queue
     */
    reset(queues) {
      for (const [name, queue] of Object.entries(queues)) {
        scope[name].reset(queue)
      }
    },
    /**
     * Show error toast
     * @param {string} message
     */
    showError(message) {
      scope.error.push(message)
    },
    /**
     * Show info toast
     * @param {string} message
     */
    showInfo(message) {
      scope.info.push(message)
    },
    /**
     * Show warn toast
     * @param {string} message
     */
    showWarn(message) {
      scope.warn.push(message)
    },
  }

  Object.freeze(act)

  return act
}

ToastAct.fromStore = (store, ctx) => ToastAct(store.toast, ctx)

export default ToastAct
