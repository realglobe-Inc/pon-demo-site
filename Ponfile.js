/**
 * Pon tasks
 * @file Ponfile
 * @see https://github.com/realglobe-Inc/pon
 */
'use strict'

const pon = require('pon')

const { react, css, browser, map } = require('pon-task-web')
const { fs, mocha, command, coz } = require('pon-task-basic')
const { mkdir, chmod } = fs
const { fork } = command
const { cssModule } = browser.plugins

module.exports = pon({
  // ----------------
  // Sub Tasks
  // ----------------
  'struct:mkdir': mkdir([
    'bin',
    'db',
    'doc',
    'env',
    'loc',
    'server',
    'public',
    'shim',
    'tmp',
    'misc',
    'test',
    'ui',
    'var'
  ]),
  'struct:chmod': chmod({
    'bin/**/*.*': '577'
  }),
  'struct:render': [
    coz('+(db|ui)/**/.*.bud')
  ],
  'ui:react': react('ui', 'shim', { pattern: [ '**/*.js', '**/*.jsx' ] }),
  'ui:css': css('ui/stylesheets', 'shim/css', { pattern: '*.pcss' }),
  'ui:browser': browser('shim/entrypoints', 'public/js', {
    watchTargets: 'shim/**/*.js',
    plugins: [ cssModule('shim/css', 'public/css/bundle.css') ]
  }),
  'ui:map': map('public/js', 'public/js'),
  'test:mocha': mocha('test/**/*.js', { timeout: 3000 }),
  'debug:server': fork('bin/app.js'),
  'debug:watch': [ 'ui:*/watch' ],
  // ----------------
  // Main Tasks
  // ----------------
  struct: [ 'struct:mkdir', 'struct:chmod', 'struct:render' ],
  ui: [ 'ui:css', 'ui:react', 'ui:browser', 'ui:map' ],
  test: [ 'test:mocha' ],
  build: [ 'struct', 'ui' ],
  watch: [ 'ui:*', 'ui:*/watch' ],
  default: [ 'build' ],
  debug: [ 'build', 'debug:*' ],
  // ----------------
  // Aliases
  // ----------------
  t: 'test',
  b: 'build',
  w: 'watch',
  d: 'debug'
})
