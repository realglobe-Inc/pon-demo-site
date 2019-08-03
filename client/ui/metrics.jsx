/**
 * Start metrics
 * @memberof module:pon-demo-site/client
 * @function metrics
 */
'use strict'

import { RenderingCountMetrics } from '@the-/metrics-presets'
import * as stateful from './stateful'
import * as v from './views'

/** @lends module:pon-demo-site/client.metrics */
function metrics() {
  // Count renders of react
  {
    const Components = { ...v, ...stateful }
    void RenderingCountMetrics(Components, {
      interval: 30000,
    })
  }
}

export default metrics
