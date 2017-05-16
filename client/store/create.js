/**
 * Create an new store
 * @function create
 * @returns {TheStore}
 */
'use strict'

const theStore = require('the-store')
const {
  ObjectScope,
  ArrayScope,
  BooleanScope
} = require('the-scope')

/** @lends create */
module.exports = function create () {
  const store = theStore({
    // States to persists with localstorage
    persists: []
  })

  {
    const app = store.load(ObjectScope, 'app')
    app.load(BooleanScope, 'busy')
  }

  {
    const toast = store.load(ObjectScope, 'toast')
    toast.load(ArrayScope, 'info')
    toast.load(ArrayScope, 'warn')
    toast.load(ArrayScope, 'error')
  }

  return store
}
