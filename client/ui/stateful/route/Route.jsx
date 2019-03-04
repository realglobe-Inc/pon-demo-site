/**
 * Route component
 */
'use strict'

import React, { Suspense } from 'react'
import { isBrowser } from 'the-check'
import { TheRoute } from 'the-components'
import Fallback from '../fallback/Fallback'
import context from '../../context'

class Route extends React.Component {
  #stateful = context.stateful((state) => ({}), () => ({}))

  render() {
    if (!isBrowser()) {
      // TODO remove ( ReactDOMServer does not yet support Suspense. )
      return <Fallback />
    }
    return this.#stateful(({ }) => {
      return (
        <Suspense fallback={<Fallback />}>
          <TheRoute {...this.props} />
        </Suspense>
      )
    })
  }
}

export default Route
