/**
 * Route component
 */
'use strict'

import React, { Suspense } from 'react'
import { isBrowser } from 'the-check'
import { TheRoute } from 'the-components'
import RouteFallback from './RouteFallback'
import context from '../../context'

class Route extends React.Component {
  #stateful = context.stateful((state) => ({}), () => ({}))

  render() {
    return this.#stateful(({ l }) => {
      if (!isBrowser()) {
        // TODO remove ( ReactDOMServer does not yet support Suspense. )
        return <RouteFallback />
      }
      return (
        <Suspense fallback={<RouteFallback />}>
          <TheRoute {...this.props} />
        </Suspense>
      )
    })
  }
}

export default Route
