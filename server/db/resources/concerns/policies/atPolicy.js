'use strict'

const {
  DataTypes: { DATE },
} = require('@the-/resource')

const atPolicy =
  /** @namespace atPolicy */
  {
    createdAt: {
      default: () => new Date(),
      description: 'Date created',
      type: DATE,
    },
    updatedAt: {
      default: () => new Date(),
      description: 'Date updated',
      type: DATE,
    },
  }
Object.freeze(atPolicy)

module.exports = atPolicy
