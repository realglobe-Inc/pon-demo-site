/**
 * Test for controllers.
 * Runs with mocha.
 */
'use strict'

const controllers = require('../controllers')
const createDB = require('../db/create')
const { ok, equal } = require('assert')

describe('controllers', () => {
  before(() => {
  })

  after(() => {
  })

  // TODO Remove this
  // Just an example
  it('App Ctrl', async () => {
    const { AppCtrl } = controllers
    const session = {}
    let appCtrl = new AppCtrl({
      app: { db: createDB({}) },
      client: {},
      session
    })

    equal(await appCtrl.countUp(), 1)
    equal(await appCtrl.countUp(), 2)
  })
})

/* global describe, before, after, it */
