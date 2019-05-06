/**
 * Resource for room
 * @memberof module:server.db.resources
 * @class RoomResource
 * @augments TheResource
 */
'use strict'

const {
  DataTypes: { STRING },
  TheResource,
} = require('@the-/resource')
const atPolicy = require('./concerns/policies/atPolicy')

/** @lends module:server.db.resources.RoomResource */
class RoomResource extends TheResource {
  static get schema() {
    return {
      createdAt: { ...atPolicy.createdAt },
      name: {
        description: 'Name of room',
        minLength: 4,
        required: true,
        trim: true,
        type: STRING,
        unique: true,
      },
    }
  }

  static entityClass(ResourceEntity) {
    /**
     * @memberof module:server.db.resources.RoomResource
     * @inner
     * @class
     */
    class TheRoomResourceEntity extends ResourceEntity {}

    return TheRoomResourceEntity
  }
}

Object.assign(RoomResource, {})

module.exports = RoomResource
