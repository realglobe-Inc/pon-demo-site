'use strict'

/**
 * Application controller
 * @memberof module:pon-demo-site/server.controllers
 * @function AppCtrl
 */
function AppCtrl({ session }) {
  const appCtrl = {
    async countUp() {
      const { count = 0 } = session
      session.count = count + 1
      await new Promise((resolve) => setTimeout(() => resolve(), 1000))
      return session.count
    },
  }

  Object.freeze(appCtrl)

  return appCtrl
}

module.exports = AppCtrl
