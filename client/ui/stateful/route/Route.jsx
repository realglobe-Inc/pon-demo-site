/**
 * Route component
 */
'use strict'

import React, { Suspense } from 'react'
import { isBrowser } from '@the-/check'
import { TheRoute } from '@the-/ui'
import Fallback from '../fallback/Fallback'
import { Stateful } from '../../context'

class Route extends React.Component {
  #stateful = Stateful(() => ({}), () => ({}))

  render() {
    if (!isBrowser()) {
      // TODO remove ( ReactDOMServer does not yet support Suspense. )
      return <Fallback />
    }
    return this.#stateful(() => (
      <Suspense fallback={<Fallback />}>
        <TheRoute {...this.props} />
      </Suspense>
    ))
  }
}

export default Route
