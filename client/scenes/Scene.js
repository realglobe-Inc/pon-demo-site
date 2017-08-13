/**
 * @abstract
 * @class Scene
 */
'use strict'

const {TheScene} = require('the-scene-base/shim')

class Scene extends TheScene {
  parsePolicyError (e) {
    try {
      super.parsePolicyError(e)
    } catch (e) {
      switch (e.name) {

        case 'NotFoundError': {
          return s.parseAppError(err, {
            defaultMessageKey: 'RESOURCE_NOT_FOUND_ERROR'
          })
        }
        case 'WrongPasswordError': {
          return s.parseAppError(err, {})
        }

        default:
          throw e
      }
    }
  }
}

module.exports = Scene
