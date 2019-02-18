'use strict'

const { inject } = require('the-handle')
const create = require('./create')

const singleton = create()

Object.assign(singleton, {
  create,
  inject,
})

module.exports = singleton
