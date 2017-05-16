'use strict'

const theEnv = require('the-env')

const env = theEnv({
  port: require('./port'),
  database: require('./database')
}).forEnv()

module.exports = env
