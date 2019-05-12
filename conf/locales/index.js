/**
 * Message resources
 * @memberof module:pon-demo-site/conf
 * @namespace locales
 */
'use strict'

const theLoc = require('@the-/loc').create

const loc = theLoc({
  en: require('./en'),
})

module.exports = loc
