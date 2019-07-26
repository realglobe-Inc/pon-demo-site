/**
 * Seated value
 * @function _seat
 * @param {function()} creator
 * @protected
 * @memberof module:pon-demo-site/server.constants
 */
'use strict'

const directorySeat = require('@the-/seat/handy/directorySeat')
const Project = require('./Project')

/** @lends module:pon-demo-site/server.constants._seat */
function _seat(creator) {
  return directorySeat(Project.BASE_DIR, creator)
}

module.exports = _seat
