/**
 * Create an db instance
 * @function create
 * @returns {TheDB}
 */
'use strict'

const theDB = require('the-db')
const env = require('../env')
const {
  RoomResource
} = require('./resources')

/** @lends create */
function create (config = env.database) {
  const db = theDB(config)
  db.load(RoomResource, 'Room')

  return db
}

module.exports = create
