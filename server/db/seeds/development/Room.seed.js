'use strict'

const _seed = require('./_seed')

module.exports = _seed.explode({
  name: '#{flower}-room-#{i}'
}, 10).map((room, i) => Object.assign(room, {id: String(i + 1)}))