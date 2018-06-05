/**
 * Local variables
 * @namespace Local
 */
'use strict'

const theSeat = require('the-seat').default
const theSecret = require('the-secret').default
const theSetting = require('the-setting').default
const {seatAccess} = require('the-site-util')
const {inspect} = require('util')
const pkg = require('./package')

const MASTER_PASSWORD = 'xxxxxxxxxxxxxxxxxx' // TODO
const secret = theSecret(`${__dirname}/secrets.json`, MASTER_PASSWORD)
const seat = theSeat()
const {
  containerNameFor,
  portNumberFor,
  processNameFor,
  secretFor,
  userNameFor,
} = seatAccess(seat)

const setting = theSetting(`${__dirname}/var/app/setting.json`,
  /** @lends Local */
  {
    APP_CDN_URL: '',
    APP_DOMAIN: 'pon-demo-site.org',
    DUMP_ROTATION: 3,
    DUMP_SCHEDULE: '00 00 * * 3',
  }
)

const Vars = Object.freeze(
  /** @lends Local */
  {
    APP_PORT: portNumberFor(`app@${__dirname}`),
    APP_PROCESS_NAME: processNameFor(`${pkg.name}@${__dirname}`) + '-app',
    BACKUP_PROCESS_NAME: processNameFor(`${pkg.name}@${__dirname}`) + '-backup',
    INSPECT_PORT: portNumberFor(`inspect@${__dirname}`),
    MONGO_CONTAINER_NAME: containerNameFor(`${pkg.name}-mongo@${__dirname}`),
    MONGO_CONTAINER_PORT: portNumberFor(`mongo@${__dirname}`),
    NGINX_CONTAINER_NAME: containerNameFor(`${pkg.name}-nginx@${__dirname}`),
    NGINX_CONTAINER_PORT: portNumberFor(`nginx@${__dirname}`),
    PUBLIC_DIR: `${__dirname}/public`,
    REDIS_CONTAINER_NAME: containerNameFor(`${pkg.name}-redis@${__dirname}`),
    REDIS_CONTAINER_PORT: portNumberFor(`redis@${__dirname}`),
    SEAL_SECRET: secretFor(`seal@${__dirname}`),
  }
)

/** @lends Local */
const Local = {
  __proto__: {
    print: () => console.log(inspect(Local)),
    secret,
    setting,
  },
  ...secret.get(),
  ...setting.get(),
  ...Vars,
}

module.exports = Local

if (!module.parent) {
  Local.print()
}
