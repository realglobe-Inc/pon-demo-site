/**
 * Database module
 * @memberof module:pon-demo-site/server
 * @namespace db
 */
'use strict'

const create = require('./create')

const singleton = create({})

Object.assign(singleton, {
  create,
})

module.exports = singleton
