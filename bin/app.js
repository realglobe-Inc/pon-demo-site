#!/usr/bin/env node

/**
 * Run app
 */
'use strict'

const co = require('co')
const { port } = require('../env')
const server = require('../server')

co(function * () {
  server().listen(port.APP)
}).catch((err) => {
  console.error(err)
  process.exit(1)
})

