/**
 * Test case for create.
 * Runs with mocha.
 */
'use strict'

const create = require('../../server/create.js')
const { ok, equal } = require('assert')
const aport = require('aport')
const asleep = require('asleep')
const arequest = require('arequest')

describe('create', function () {
  this.timeout(13000)

  before(async () => {

  })

  after(async () => {

  })

  it('Create', async () => {
    let port = await aport()
    let created = create({})
    ok(created)

    await created.listen(port)

    {
      let { statusCode, body } = await arequest({
        url: `http://localhost:${port}/about`,
        method: 'GET'
      })
      equal(statusCode, 200)
      ok(body)
    }

    {
      let { statusCode, body } = await arequest({
        url: `http://localhost:${port}/foo`,
        method: 'GET'
      })
      equal(statusCode, 404)
      ok(body)
    }

    await asleep(100)
    await created.close()
  })
})

/* global describe, before, after, it */
