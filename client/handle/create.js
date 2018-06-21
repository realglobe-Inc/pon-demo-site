/**
 * Create a new handle
 * @function create
 * @returns {TheHandle}
 */
'use strict'

const {TheHandle} = require('the-handle')
const {SceneMapping,} = require('../mappings')

/** @lends create */
module.exports = function create () {
  return new TheHandle({
    scenes: SceneMapping
  })
}
