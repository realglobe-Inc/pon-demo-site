/**
 * User for clay resource
 * @augments {UserResource}
 * @class User
 */
'use strict'

const { Resource, DataTypes } = require('jk-db')
const { STRING } = DataTypes

/** @lends UserResource */
class UserResource extends Resource {

  static inbound (attributes) {
    return attributes
  }

  static outbound (attributes) {
    return attributes
  }

  static get policy () {
    return {
      username: {
        type: STRING,
        minLength: 4,
        unique: true
      }
    }
  }

  static get nameString () {
    return 'User'
  }
}

module.exports = UserResource
