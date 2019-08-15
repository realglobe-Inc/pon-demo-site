'use strict'

const directorySeat = require('@the-/seat/handy/directorySeat')
const Project = require('./Project')

/**
 * Seated value
 * @function _seat
 * @param {function(): Object} creator
 * @protected
 * @memberof module:pon-demo-site/server.constants
 */
function _seat(creator) {
  return directorySeat(Project.BASE_DIR, creator)
}

module.exports = _seat
