'use strict'

const theEnv = require('the-env')
const theSeat = require('the-seat')

const portBase = 5000
const seat = theSeat()
const ports = seat.scope('ports')
const portFor = (name) =>
  ports.acquire(`${name}@${__dirname}`, port => portBase + 1)

const config = {
  port: require('./port'),
  database: require('./database'),
  redis: require('./redis')
}

const vars = {
  portFor
}

const env = theEnv(config, {vars, portFor}).forEnv()
module.exports = env
