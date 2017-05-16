/**
 * Pon tasks
 * @file Ponfile
 * @see https://github.com/realglobe-Inc/pon
 */
'use strict'

const pon = require('pon')

const { react, css, browser, map } = require('pon-task-web')
const { fs, mocha, command, coz, fmtjson } = require('pon-task-basic')
const { mkdir, symlink, chmod } = fs
const { fork } = command
const { cssModule } = browser.plugins

const theAssets = require('the-assets')
const { UI, Urls } = require('./conf')
const { JS_EXTERNAL_URL, JS_BUNDLE_URL, CSS_BUNDLE_URL } = Urls
const { EXTERNAL_BUNDLES } = UI

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
    coz('+(bin|client|conf|doc|misc|server)/**/.*.bud')
  ],
  'ui:react': react('client', 'client/shim', { pattern: [ '*.js', '!(shim)/**/+(*.jsx|*.js)' ] }),
  'ui:css': css('client/ui/stylesheets', 'client/shim/css', { pattern: '*.pcss' }),
  'ui:browser': browser('client/shim/ui/entrypoint.js', `public/${JS_BUNDLE_URL}`, {
    plugins: [ cssModule('client/shim/stylesheets', `public/${CSS_BUNDLE_URL}`) ],
    externals: EXTERNAL_BUNDLES,
    watchTargets: 'client/shim/**/*.js'
  }),
  'ui:browser-external': browser('client/shim/ui/externals.js', `public/${JS_EXTERNAL_URL}`, {
    requires: EXTERNAL_BUNDLES,
    skipWatching: true
  }),
  'ui:assets': () => theAssets().installTo('assets'),
  'ui:map': map('public', 'public'),
  'test:client': mocha('client/test/**/*.js', { timeout: 3000 }),
  'production:env': () => Object.assign(process.env, { NODE_ENV: 'production' }),
  'debug:server': fork('bin/app.js'),
  'debug:watch': [ 'ui:*/watch' ],
  // ----------------
  // Main Tasks
  // ----------------
  struct: [ 'struct:mkdir', 'struct:chmod', 'struct:symlink', 'struct:render', 'struct:json' ],
  ui: [ 'ui:assets', 'ui:css', 'ui:react', 'ui:browser', 'ui:browser-external', 'ui:map' ],
  test: [ 'test:client' ],
  build: [ 'struct', 'ui' ],
  watch: [ 'ui:*', 'ui:*/watch' ],
  default: [ 'build' ],
  debug: [ 'build', 'debug:*' ],
  production: [ 'production:env', 'build', 'production:map' ],
  // ----------------
  // Aliases
  // ----------------
  t: 'test',
  b: 'build',
  w: 'watch',
  d: 'debug',
  p: 'production'
})


