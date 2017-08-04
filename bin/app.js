#!/usr/bin/env node

/**
 * Run app
 */
'use strict'

require('babel-polyfill')
const {server, env} = require('../server')
const {NGINX_PORT, APP_PORT} = env.port

;(async () => {
  await server.listen(APP_PORT)
  console.log(`
  =============================
  
  Access to http://localhost:${NGINX_PORT} in your browser
  
  =============================
  `)
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
