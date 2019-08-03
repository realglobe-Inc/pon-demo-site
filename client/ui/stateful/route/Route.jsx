/**
 * Route component
 * @memberof module:pon-demo-site/client.ui
 * @function Route
 */
'use strict'

import React, { Suspense } from 'react'
import { isBrowser } from '@the-/check'
import { TheRoute } from '@the-/ui'
import Fallback from '../fallback/Fallback'
import { Stateful } from '../../context'

/** @lends module:pon-demo-site/client.ui.Route */
const Route = React.memo((props) => {
  if (!isBrowser()) {
    // TODO remove ( ReactDOMServer does not yet support Suspense. )
    return <Fallback />
  }
  const stateful = Stateful.memo(() => ({}))
  return stateful(() => (
    <Suspense fallback={<Fallback />}>
      <TheRoute {...props} />
    </Suspense>
  ))
})

export default Route
