/**
 * Pon tasks
 * @file Ponfile
 * @see https://github.com/realglobe-Inc/pon
 */
'use strict'

const pon = require('pon')
const { react, css, browser, map } = require('pon-task-web')
const { fs, mocha } = require('pon-task-basic')
const { mkdir, chmod } = fs
const { cssModule } = browser.plugins

module.exports = pon({
  // ----------------
  // Sub Tasks
  // ----------------
  'struct:mkdir': mkdir([
    'bin',
    'env',
    'doc',
    'hub',
    'public',
    'shim',
    'tmp',
    'test',
    'ui',
    'var'
  ]),
  'struct:chmod': chmod({
    'bin/**/*.*': '577'
  }),
  'ui:react': react('ui', 'shim', { pattern: [ '**/*.js', '**/*.jsx' ] }),
  'ui:css': css('ui/stylesheets', 'shim/css', { pattern: '*.pcss' }),
  'ui:browser': browser('shim/entrypoints', 'public/js', {
    plugins: [ cssModule('shim/css', 'public/css/bundle.css') ]
  }),
  'ui:map': map('public/js', 'public/js'),
  'test:mocha': mocha('test/**/*.js', { timeout: 3000 }),
  // ----------------
  // Main Tasks
  // ----------------
  struct: [ 'struct:mkdir', 'struct:chmod' ],
  ui: [ 'ui:css', 'ui:react', 'ui:browser', 'ui:map' ],
  test: [ 'test:mocha' ],
  build: [ 'struct', 'ui' ],
  watch: [ 'ui:*', 'ui:*/watch' ],
  default: [ 'build' ],
  // ----------------
  // Shortcuts
  // ----------------
  t: 'test',
  b: 'build',
  w: 'watch'
})
