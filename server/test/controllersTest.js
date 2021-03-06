/**
 * Test for controllers.
 * Runs with mocha.
 */
'use strict'

const {
  strict: { equal },
} = require('assert')
const controllers = require('../controllers')
const createDB = require('../db/create')

describe('controllers', function() {
  this.timeout(5000)
  before(() => {})

  after(() => {})

  // TODO Remove this
  // Just an example
  it('App Ctrl', async () => {
    const { AppCtrl } = controllers
    const session = {}
    const db = createDB.forTest()
    const appCtrl = AppCtrl({
      session,
    })

    equal(await appCtrl.countUp(), 1)
    equal(await appCtrl.countUp(), 2)

    await db.close()
  })
})

/* global describe, before, after, it */
