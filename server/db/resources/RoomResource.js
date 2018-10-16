/**
 * Resource for room
 */
'use strict'

const {
  DataTypes: {STRING},
  TheResource,
} = require('the-resource-base')

class RoomResource extends TheResource {
  static get policy () {
    return {
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

  static entityClass (ResourceEntity) {
    /** @class */
    class TheRoomResourceEntity extends ResourceEntity {
    }

    return TheRoomResourceEntity
  }
}

Object.assign(RoomResource, {})

module.exports = RoomResource
