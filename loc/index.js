/**
 * Locale messages
 * @module loc
 */
'use strict'

const jkLoc = require('jk-loc')
const ja = require('./ja')
const en = require('./en')

const loc = jkLoc({
  ja,
  en
})

module.exports = loc

if (!module.parent) {
  console.log(loc)
}
