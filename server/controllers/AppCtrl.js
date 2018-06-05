/**
 * Application controller
 * @class AppCtrl
 */
'use strict'

const {TheCtrl} = require('the-controller-base')

/** @lends AppCtrl */
class AppCtrl extends TheCtrl {

  // TODO Remove this
  // Just an example
  async countUp () {
    const {session} = this // Controller instance is created per session
    let {count = 0} = session
    session.count = count + 1
    await new Promise((resolve) => setTimeout(() => resolve(), 1000))
    return session.count
  }
}

module.exports = AppCtrl
