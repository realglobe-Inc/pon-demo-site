/**
 * CallScene
 * @class CallScene
 */
'use strict'

const { withBusy } = require('the-scene-mixins/shim')
const Scene = require('./Scene')

@withBusy
class CallSceneBase extends Scene {}

/** @lends CallScene */
class CallScene extends CallSceneBase {
  async dealWith() {
    throw new Error(`Not implemented`)
  }

  @withBusy.while
  async doExec(value) {
    return await this.dealWith(value)
  }
}

module.exports = CallScene
