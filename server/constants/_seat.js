/**
 * Seated value
 * @function _seat
 * @param {function} creator
 */
'use strict'

const directorySeat = require('@the-/seat/handy/directorySeat')
const BASE_DIR = `${__dirname}/../..`

/** @lends _seat */
function _seat(creator) {
  return directorySeat(BASE_DIR, creator)
}

module.exports = _seat
