#!/usr/bin/env node
'use strict'

process.chdir(`${__dirname}/../..`)

const { TheRefactor } = require('@the-/refactor')
const {
  finder,
  parse,
  constants: { NodeTypes },
} = require('@the-/ast')

async function main() {
  await new TheRefactor()
    .process([
      '+(assets|server|client|conf)/**/*.js',
      '+(assets|server|client|conf)/**/.*.bud',
      'misc/lint/*.json',
      '*.js',
    ],'Urls', 'Paths')

  const Paths = require('../../conf/Paths')
  for(const key of Object.keys(Paths)){
    await new TheRefactor()
      .process([
        '+(assets|server|client|conf)/**/*.js',
        '+(assets|server|client|conf)/**/.*.bud',
        '*.js',
      ],key, key.replace(/_URL$/, '_PATH'))
  }
}

void main().catch((e) => {
  console.error(e)
  process.exit(1)
})
