/**
 * Test for db.
 * Runs with mocha.
 */
'use strict'

const {equal, ok } = require('assert')
const createDB = require('../db/create')

describe('db', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', async () => {
    let db = createDB()
    ok(db)
  })
})

/* global describe, before, after, it */
