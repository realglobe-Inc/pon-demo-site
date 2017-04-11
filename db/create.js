/**
 * Create database instance
 * @function create
 */
'use strict'

const jkDB = require('jk-db')

/** @lends create */
function create (env) {
  return jkDB({
    env,
    resources: {
      User: require('./resources/user_resource')
    }
  })
}

module.exports = create



