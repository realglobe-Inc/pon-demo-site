'use strict'

const create = require('./create')
const env = require('../env')
const db = require('../db')
const { locales } = require('../../conf')

const singleton = create({
  locales,
  db,
  env
})

Object.assign(singleton, {
  create,
  db,
  env
})

module.exports = singleton