// Code generated by coz. DO NOT EDIT.
/**
 * Scopes
 * @memberof module:client
 * @namespace scopes
 */
'use strict'

const _d = (m) => (m && 'default' in m) ? m.default : m


const abstractCall_ = require('./abstract/call.json')
const abstractDetail_ = require('./abstract/detail.json')
const abstractFilter_ = require('./abstract/filter.json')
const abstractHash_ = require('./abstract/hash.json')
const abstractInput_ = require('./abstract/input.json')
const abstractList_ = require('./abstract/list.json')
const abstractProcess_ = require('./abstract/process.json')
const app_ = require('./app.json')
const connectionRetry_ = require('./connection/retry.json')
const home_ = require('./home.json')
const toast_ = require('./toast.json')


// `./abstract` directory
exports.abstract = {}
exports.abstract.call = _d(abstractCall_)
exports.abstract.detail = _d(abstractDetail_)
exports.abstract.filter = _d(abstractFilter_)
exports.abstract.hash = _d(abstractHash_)
exports.abstract.input = _d(abstractInput_)
exports.abstract.list = _d(abstractList_)
exports.abstract.process = _d(abstractProcess_)
exports.app = _d(app_)

// `./connection` directory
exports.connection = {}
exports.connection.retry = _d(connectionRetry_)
exports.home = _d(home_)
exports.toast = _d(toast_)
