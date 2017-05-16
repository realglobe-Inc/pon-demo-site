/**
 * Resource for room
 */
'use strict'

const { Resource, DataTypes } = require('the-db')
const { STRING, ENTITY } = DataTypes

class RoomResource extends Resource {

  static get policy () {
    return {
      name: {
        description: 'Name of room',
        type: STRING,
        unique: true,
        required: true,
        trim: true,
        minLength: 4
      }
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
