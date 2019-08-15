'use strict'

const {
  DataTypes: { STRING },
} = require('@the-/resource')
const atPolicy = require('./concerns/policies/atPolicy')

/**
 * Resource for room
 * @memberof module:pon-demo-site/server.db.resources
 * @function UserResource
 */
const UserResource = ({ define }) => {
  const User = define({
    createdAt: { ...atPolicy.createdAt },
    name: {
      description: 'Name of user',
      minLength: 2,
      required: true,
      trim: true,
      type: STRING,
      unique: true,
    },
  }, {
    entityClass: (ResourceEntity) => {
      /**
       * @memberof module:pon-demo-site/server.db.resources.RoomResource
       * @inner
       * @class
       */
      class TheRoomResourceEntity extends ResourceEntity {}

      return TheRoomResourceEntity
    },
  })

  Object.seal(User)

  return User
}

Object.assign(UserResource, {})

module.exports = UserResource
