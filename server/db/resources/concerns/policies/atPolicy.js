/**
 * @enum {Object} atPolicy
 */
'use strict'

const {
  DataTypes: { DATE },
} = require('@the-/resource')

module.exports = Object.freeze(
  /** @lends atPolicy */
  {
    createdAt: {
      description: 'Date created',
      type: DATE,
      default: () => new Date(),
    },
    updatedAt: {
      description: 'Date updated',
      type: DATE,
      default: () => new Date(),
    },
  },
)
