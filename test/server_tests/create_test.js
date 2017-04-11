/**
 * Test case for create.
 * Runs with mocha.
 */
'use strict'

const create = require('../../server/create.js')
const { ok, equal } = require('assert')
const co = require('co')
const aport = require('aport')
const asleep = require('asleep')
const arequest = require('arequest')

describe('create', function () {
  this.timeout(13000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Create', () => co(function * () {
    let port = yield aport()
    let created = create({})
    ok(created)

    yield created.listen(port)

    let { statusCode, body } = yield arequest({
      url: `http://localhost:${port}`,
      method: 'GET'
    })
    equal(statusCode, 200)
    ok(body)

    yield asleep(100)
    yield created.close()
  }))
})

/* global describe, before, after, it */
