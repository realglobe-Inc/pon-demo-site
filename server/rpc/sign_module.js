'use strict'

const db = require('../../db')
const { User } = db.resources

const signModule = (app, client) => ({
  async signup (username, password) {
    let user = await User.create({ username, password })
    return user
  }
})

module.exports = signModule
