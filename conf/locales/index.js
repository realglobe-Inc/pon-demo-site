'use strict'

const theLoc = require('the-loc').default

const env = theLoc({
  en: require('./en')
})

module.exports = env
