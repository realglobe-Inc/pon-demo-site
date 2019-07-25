/**
 * Create an db instance
 * @memberof module:pon-demo-site/server.db
 * @function create
 * @param {object} [config]
 * @returns {TheDB}
 */
'use strict'

const theDB = require('@the-/db')
const { MysqlConnections } = require('../constants')
const { ResourceMapping } = require('../mappings')

const defaultConfig = {
  database: MysqlConnections.Default.DATABASE,
  dialect: MysqlConnections.Default.DIALECT,
  host: MysqlConnections.Default.HOST,
  password: MysqlConnections.Default.PASSWORD,
  port: MysqlConnections.Default.PORT,
  rootPassword: MysqlConnections.Default.ROOT_PASSWORD,
  rootUsername: MysqlConnections.Default.ROOT_USERNAME,
  username: MysqlConnections.Default.USERNAME,
}

/** @lends module:pon-demo-site/server.db.create */
function create(config = defaultConfig, options = {}) {
  if (process.env.CI) {
    console.warn(`
==============================

[db] Using mock DB for CI ENV 

==============================`)
    config = { dialect: 'memory' }
  }
  return theDB({
    resources: ResourceMapping,
    ...config,
  }).unref()
}

create.forTask = () => create(defaultConfig, { enableHooks: false })
create.forTest = () => create({ dialect: 'memory' }, { enableHooks: false })

module.exports = create
