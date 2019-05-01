/**
 * Seated value
 * @function _seat
 * @param {function} creator
 */
'use strict'

const directorySeat = require('@the-/seat/handy/directorySeat')
const Project = require('./Project')

/** @lends _seat */
function _seat(creator) {
  return directorySeat(Project.BASE_DIR, creator)
}

module.exports = _seat
