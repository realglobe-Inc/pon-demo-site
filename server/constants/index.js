// Code generated by coz. DO NOT EDIT.
/**
 * @description Server constant variables
 * @memberof module:pon-demo-site/server
 * @namespace constants
 */
'use strict'

const DockerContainers_ = require('./DockerContainers')
const DockerPorts_ = require('./DockerPorts')
const MysqlConnections_ = require('./MysqlConnections')
const Project_ = require('./Project')
const RedisConnections_ = require('./RedisConnections')
const WebApps_ = require('./WebApps')

// `module.exports` overrides these `exports.*`, but still needs them for lebab (https://github.com/lebab/lebab)
exports.DockerContainers = DockerContainers_
exports.DockerPorts = DockerPorts_
exports.MysqlConnections = MysqlConnections_
exports.Project = Project_
exports.RedisConnections = RedisConnections_
exports.WebApps = WebApps_

module.exports = {
  DockerContainers: DockerContainers_,
  DockerPorts: DockerPorts_,
  MysqlConnections: MysqlConnections_,
  Project: Project_,
  RedisConnections: RedisConnections_,
  WebApps: WebApps_,
}
