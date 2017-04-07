/**
 * Env settings
 * @module env
 */
'use strict'

process.chdir(`${__dirname}/..`)

const jkEnv = require('jk-env')

const env = jkEnv({
  port: require('./port')
}).forEnv()

module.exports = env

if (!module.parent) {
  console.log(env)
}
