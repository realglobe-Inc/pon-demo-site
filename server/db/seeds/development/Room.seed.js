'use strict'

const ObjectID = require('bson-objectid')
const seed = require('the-seed')('en')

module.exports = seed.explode({
  name: 'room-#{i}',
}, 10).map((room, i) => Object.assign(room, {id: ObjectID()}))
