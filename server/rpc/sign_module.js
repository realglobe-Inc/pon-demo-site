'use strict'

const { Module } = require('sugo-module-base')
const db = require('../../db')
const co = require('co')
const { User } = db.resources

const signModule = new Module({
  signup (username, password) {
    return co(function * () {
      let user = yield User.create({ username, password })
      return user
    })
  }
})

module.exports = signModule
