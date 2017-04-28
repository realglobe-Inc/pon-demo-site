#!/usr/bin/env node

/**
 * Run app
 */
'use strict'

const { port } = require('../env')
const server = require('../server')

;(async () => {
  await server.listen(port.APP)
})().catch((err) => {
  console.error(err)
  process.exit(1)
})

