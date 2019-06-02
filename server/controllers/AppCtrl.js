/**
 * Application controller
 * @memberof module:pon-demo-site/server.controllers
 * @class AppCtrl
 */
'use strict'

const Ctrl = require('./Ctrl')

/** @lends module:pon-demo-site/server.controllers.AppCtrl */
class AppCtrl extends Ctrl {
  // TODO Remove this
  // Just an example
  async countUp() {
    const {
      session,
      session: { count = 0 },
    } = this // Controller instance is created per session

    session.count = count + 1
    await new Promise((resolve) => setTimeout(() => resolve(), 1000))
    return session.count
  }
}

module.exports = AppCtrl
