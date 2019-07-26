/**
 * Start metrics
 * @function metrics
 */
'use strict'

// import { RenderingCountMetrics } from '@the-/metrics-presets'
import * as stateful from './stateful'
import * as v from './views'
const { TheMetrics } = require('@the-/metrics')

const hasSymbol = typeof Symbol === 'function' && !!Symbol.for
const REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4
const REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3

/** @lends RenderingCountMetrics */
async function RenderingCountMetrics(Components, options = {}) {
  const { interval = 30 * 1000, name = 'RenderingCountMetrics' } = options
  const metrics = new TheMetrics({ interval, name })

  for (const [name, Component] of Object.entries(Components)) {
    if (!Component) {
      continue
    }
    const isLazy = Component.$$typeof === REACT_LAZY_TYPE
    if (isLazy) {
      // TODO support lazy
      continue
    }
    const isMemo = Component.$$typeof === REACT_MEMO_TYPE
    if (isMemo) {
      metrics.bindMethodCallCounter(`${name}()`, {
        class: Component,
        methodName: 'type',
      })
      continue
    }
    metrics.bindMethodCallCounter(`${name}#render()`, {
      class: Component,
      methodName: 'render',
    })
  }
  return metrics.start()
}

/** @lends metrics */
function metrics() {
  // Count renders of react
  {
    const Components = { ...v, ...stateful }
    void RenderingCountMetrics(Components, {
      interval: 30 * 1000,
    })
  }
}

export default metrics
