#!/usr/bin/env node

/**
 * Run app
 */
'use strict'

require('babel-polyfill')
const { server, env } = require('../server')

;(async () => {
  const { port = env.port.APP } = process.env
  await server.listen(port)
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
