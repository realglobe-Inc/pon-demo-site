/**
 * Test case for create.
 * Runs with mocha.
 */
'use strict'

const create = require('../../db/create.js')
const { ok, equal } = require('assert')

describe('create', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Create', async () => {
    let db = create({
      dialect: 'memory'
    })
    let { User } = db.resources
    ok(User)

    let user = await User.create({ name: 'foo' })
    equal(user.name, 'foo')
  })
})

/* global describe, before, after, it */
