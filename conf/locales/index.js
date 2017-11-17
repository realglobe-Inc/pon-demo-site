'use strict'

const theLoc = require('the-loc')

const env = theLoc({
  en: require('./en'),
  ja: require('./ja')
})

module.exports = env
