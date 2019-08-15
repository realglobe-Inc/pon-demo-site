'use strict'

import {
  ArrayScope,
  BooleanScope,
  NumberScope,
  ObjectScope,
  StringScope,
  ValueScope,
} from '@the-/scope/shim/scopes'
import { TheStore } from '@the-/store'
import scopes from './scopes'

/**
 * Create an new store
 * @memberof module:pon-demo-site/client.store
 * @function create
 * @returns {TheStore}
 */
export default function create() {
  return new TheStore({
    // States to persists on local storage
    persists: [],
    scopes,
    types: {
      ARR: ArrayScope,
      BOOL: BooleanScope,
      NUM: NumberScope,
      OBJ: ObjectScope,
      STR: StringScope,
      VAL: ValueScope,
    },
  })
}
