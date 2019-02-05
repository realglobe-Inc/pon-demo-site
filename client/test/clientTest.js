/**
 * Test for client.
 * Runs with mocha.
 */
'use strict'

const create = require('../client/create')
const { ok } = require('assert').strict

describe('client', () => {
  before(() => {})

  after(() => {})

  it('Create test', () => {
    ok(create)
  })
})

/* global describe, before, after, it */
