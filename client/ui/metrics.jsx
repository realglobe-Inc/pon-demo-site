/**
 * Start metrics
 * @function metrics
 */
'use strict'

import { TheMetrics } from 'the-metrics'
import * as stateful from './stateful'
import * as v from './views'

/** @lends metrics */
function metrics () {
  // Count renders of react
  {
    const renderingCountMetrics = new TheMetrics({
      interval: 30 * 1000,
      name: 'RenderingCountMetrics',
    })

    const Components = { ...v, ...stateful }
    for (const [name, Component] of Object.entries(Components)) {
      const isClass = !!Component
      if (!isClass) {
        continue
      }
      renderingCountMetrics.bindMethodCallCounter(`${name}#render()`, {
        class: Component,
        methodName: 'render',
      })
    }
    renderingCountMetrics.start()
  }
}

export default metrics
