'use strict'
/**
 * @class Ctrl
 * @abstract
 * @memberOf module:pon-demo-site/server.controllers
 */
const { TheCtrl } = require('@the-/controller')
const { compose, withDebug } = require('@the-/mixin-controller')

const CtrlBase = compose(withDebug)(TheCtrl)

/** @lends module:pon-demo-site/server.controllers.Ctrl */
class Ctrl extends CtrlBase {
  get resources() {
    return this.app.db.resources
  }
}

module.exports = Ctrl
