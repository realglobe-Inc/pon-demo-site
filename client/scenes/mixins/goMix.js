/**
 * @function goMix
 * @param {function} BaseClass
 * @returns {function} MixedClass
 */
'use strict'

const { get } = require('bwindow')

/** @lends goMix */
function goMix (BaseClass) {
  class GoMixed extends BaseClass {
    goTo (href) {
      const location = get('location')
      if (location) {
        location.href = href
      } else {
        console.warn(`Failed to got to ${href}`)
      }
    }

    goToTop () {
      const s = this
      s.goTo('/')
    }
  }

  return GoMixed
}

module.exports = goMix
