/**
 * Drawing configurations
 * @namespace Drawings
 */
'use strict'

const pkg = require('../../package')
const { Styles } = require('../../conf')
const { Themes } = require('@the-/icon')

const font = `${__dirname}/fonts/Raleway/Raleway-Black.ttf`

module.exports = Object.freeze(
  /** @lends Drawings */
  {
    appIcon: {
      text: pkg.name[0],
      font,
      color: Styles.DOMINANT_COLOR,
      theme: Themes.SQUARE,
    },
  },
)
