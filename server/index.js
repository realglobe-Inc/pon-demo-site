/**
 * Application server
 * @module pon-demo-site/server
 */
'use strict'

const db = require('./db')
const server = require('./server')

module.exports = {
  db,
  server,
}
