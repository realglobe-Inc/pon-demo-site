/**
 * Test case for create.
 * Runs with mocha.
 */
'use strict'

const create = require('../../db/create.js')
const { ok, equal } = require('assert')
const co = require('co')

describe('create', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Create', () => co(function * () {
    let db = create({
      dialect: 'memory'
    })
    let { User } = db.resources
    ok(User)

    let user = yield User.create({ name: 'foo' })
    equal(user.name, 'foo')
  }))
})

/* global describe, before, after, it */
