'use strict'

const theEnv = require('the-env')
const theSeat = require('the-seat')

const portBase = 5000
const seat = theSeat()
const ports = seat.scope('ports')
const portFor = (name) => {
  const {has, get, take, canTake} = ports.bind(`${name}@${__dirname}`)
  if (has()) {
    return get()
  }
  let taking = portBase
  while (!canTake(taking)) {
    taking += 1
  }
  take(taking)
  return get()
}

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
