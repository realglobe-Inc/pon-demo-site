/**
 * Pon tasks
 * @file Ponfile
 * @see https://github.com/realglobe-Inc/pon
 */
'use strict'

const pon = require('pon')

const { react, css, browser, map } = require('pon-task-web')
const { fs, mocha, command, coz, fmtjson, env } = require('pon-task-basic')
const { mysql, redis } = require('pon-task-docker')
const pm2 = require('pon-task-pm2')
const { seed } = require('pon-task-db')
const { mkdir, symlink, chmod, del } = fs
const { fork } = command

const theAssets = require('the-assets')
const { UI, Urls } = require('./conf')
const { JS_EXTERNAL_URL, JS_BUNDLE_URL } = Urls
const { EXTERNAL_BUNDLES } = UI
const pkg = require('./package.json')
const createDB = () => require('./server/db/create')()
const {
  MYSQL_IMAGE,
  MYSQL_PUBLISHED_PORT,
  REDIS_IMAGE,
  REDIS_PUBLISHED_PORT
} = require('./Infra')

module.exports = pon({
  // ----------------
  // Sub Tasks
  // ----------------
  'struct:mkdir': mkdir([
    'bin',
    'conf',
    'client',
    'client/client',
    'client/shim',
    'client/store',
    'client/ui',
    'client/test',
    'doc',
    'misc',
    'public',
    'server',
    'server/controllers',
    'server/db',
    'server/env',
    'server/server',
    'server/test',
    'tmp',
    'test',
    'var'
  ]),
  'struct:symlink': symlink({
    'conf': 'node_modules/@self/conf',
    'client': 'node_modules/@self/client',
    'assets/css': 'public/css',
    'assets/fonts': 'public/fonts'
  }, { force: true }),
  'struct:chmod': chmod({
    'bin/**/*.*': '577'
  }),
  'struct:json': fmtjson([
    'conf/**/*.json'
  ], { sort: true }),
  'struct:render': [
    coz([ '+(bin|client|conf|doc|misc|server)/**/.*.bud', '.*.bud' ])
  ],
  'db:setup': () => createDB().setup(),
  'db:seed': seed(createDB, 'server/db/seeds/:env/*.seed.js'),
  'ui:react': react('client', 'client/shim', {
    pattern: [ '*.js', '!(shim)/**/+(*.jsx|*.js)' ],
    extractCss: `client/shim/ui/bundle.pcss`,
    watchTargets: 'client/ui/**/*.pcss'
  }),
  'ui:css': css('client/shim/ui', 'public', { pattern: '*.pcss' }),
  'ui:browser': browser('client/shim/ui/entrypoint.js', `public/${JS_BUNDLE_URL}`, {
    externals: EXTERNAL_BUNDLES,
    watchTargets: 'client/shim/**/*.js'
  }),
  'ui:browser-external': browser('client/shim/ui/externals.js', `public/${JS_EXTERNAL_URL}`, {
    requires: EXTERNAL_BUNDLES,
    skipWatching: true,
    watchDelay: 300
  }),
  'ui:assets': () => theAssets().installTo('assets'),
  'ui:map': map('public', 'public', { watchDelay: 300 }),
  'clean:shim': del('client/shim/**/*.*'),
  'clean:public': del('public/**/*.*'),
  'clean': [ 'clean:shim', 'clean:public' ],
  'test:client': mocha('client/test/**/*.js', { timeout: 3000 }),
  'production:env': env('production'),
  'production:map': del('public/**/*.map'),
  'development:env': env('development'),
  'debug:server': fork('bin/app.js'),
  'debug:watch': [ 'ui:*/watch' ],
  'docker:mysql': mysql(`${pkg.name}-mysql`, {
    image: MYSQL_IMAGE,
    publish: `${MYSQL_PUBLISHED_PORT}:3306`
  }),
  'docker:redis': redis(`${pkg.name}-redis`, {
    image: REDIS_IMAGE,
    publish: `${REDIS_PUBLISHED_PORT}:6379`
  }),
  pm2: pm2('./bin/app.js', { name: pkg.name }),
  // ----------------
  // Main Tasks
  // ----------------
  struct: [ 'struct:mkdir', 'struct:chmod', 'struct:symlink', 'struct:render', 'struct:json' ],
  ui: [ 'ui:assets', 'ui:react', 'ui:css', 'ui:browser', 'ui:browser-external', 'ui:map' ],
  db: [ 'db:setup', 'db:seed' ],
  test: [ 'test:client' ],
  build: [ 'struct', 'ui' ],
  watch: [ 'ui:*', 'ui:*/watch' ],
  default: [ 'build' ],
  debug: [ 'development:env', 'build', 'debug:*' ],
  production: [ 'production:env', 'build', 'db', 'production:map', 'start' ],
  docker: [ 'docker:redis/run', 'docker:mysql/run' ],
  start: [ 'pm2/start' ],
  stop: [ 'pm2/stop' ],
  restart: [ 'pm2/restart' ],
  show: [ 'pm2/show' ],
  // ----------------
  // Aliases
  // ----------------
  t: 'test',
  b: 'build',
  w: 'watch',
  d: 'debug',
  p: 'production'
})
