/**
 * Create an db instance
 * @function create
 * @returns {TheDb}
 */
'use strict'

const theDB = require('the-db')
const {
  RoomResource
} = require('./resources')

/** @lends create */
function create (env = {}) {
  const db = theDB(env)
  db.load(RoomResource, 'Room')

  return db
}

module.exports = create
