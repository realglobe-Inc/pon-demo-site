/**
 * Create a new handle
 * @memberof module:pon-demo-site/client.handle
 * @function create
 * @returns {TheHandle} Handle instance
 */
'use strict'

import { TheHandle } from '@the-/handle/shim'
import { SceneMapping } from '../mappings'

/** @lends module:pon-demo-site/client.handle.create */
export default function create() {
  return new TheHandle({
    scenes: SceneMapping,
  })
}
