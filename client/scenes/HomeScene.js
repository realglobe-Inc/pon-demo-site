/**
 * Scene for home
 * @class HomeScene
 */
'use strict'

const Scene = require('./abstract/Scene')

/** @lends HomeScene */
class HomeScene extends Scene {

  // TODO Remove this
  // Just an example
  async countUp () {
    const s = this
    const {client, l, store} = s
    const {app, toast} = store
    await app.busy.true()
    {
      let count
      try {
        let appCtrl = await client.use('appCtrl')
        count = await appCtrl.countUp()
      } finally {
        await app.busy.false()
      }
      app.set({count})
      toast.info.push(l('toasts.COUNT_UP_DID_SUCCESS'))
    }
  }

}

module.exports = HomeScene
