/**
 * Create server instance
 * @function create
 */
'use strict'

const sugoHub = require('sugo-hub')

/** @lends create */
function create () {
  let hub = sugoHub()
  return hub
}

module.exports = create
