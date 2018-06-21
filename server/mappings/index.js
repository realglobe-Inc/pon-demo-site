// Code generated by coz. DO NOT EDIT.
/**
 * Module mappings
 * @module mappings
 */
'use strict'

const _d = (m) => (m && 'default' in m) ? m.default : m

const ControllerMapping_ = require('./ControllerMapping')
const ResourceMapping_ = require('./ResourceMapping')

// `module.exports` overrides these `exports.*`, but still needs them for lebab (https://github.com/lebab/lebab)
exports.ControllerMapping = _d(ControllerMapping_)
exports.ResourceMapping = _d(ResourceMapping_)

module.exports = {
  ControllerMapping: _d(ControllerMapping_),
  ResourceMapping: _d(ResourceMapping_),
}
