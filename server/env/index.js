'use strict'

const theEnv = require('the-env')
const Infra = require('../../Infra.json')

let config = {
  port: require('./port'),
  database: require('./database'),
  redis: require('./redis')
}

const vars = { Infra }

const env = theEnv(config, { vars }).forEnv()
module.exports = env
