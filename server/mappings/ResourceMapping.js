/**
 * Resource mapping
 * @namespace ResourceMapping
 */
'use strict'

const r = require('../db/resources')

module.exports = Object.freeze({
  'Room': r.RoomResource,
})
