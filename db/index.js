/**
 * Database instance
 * @module db
 */
'use strict'

const { database } = require('../env')
const create = require('./create')

module.exports = create(database)


