/**
 * @memberof module:pon-demo-site/server
 * @namespace server
 */
'use strict'

const create = require('./create')
const db = require('../db')

const singleton = create({ db })

module.exports = singleton
