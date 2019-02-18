'use strict'

import { inject } from 'the-handle'
import create from './create'

const singleton = create()

Object.assign(singleton, {
  create,
  inject,
})

export default singleton
