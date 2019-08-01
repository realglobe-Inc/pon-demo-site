/**
 * Routes
 * @memberof module:pon-demo-site/client.ui
 * @function Routes
 */
'use strict'

import React from 'react'
import { Paths } from '@self/conf'
import { TheRoute } from '@the-/ui'
import { Route } from './stateful'
import * as v from './views'

/** @lends module:pon-demo-site/client.ui.Routes */
const Routes = React.memo(() => (
  <TheRoute.Switch>
    <Route component={v.HomeView} exact path={Paths.TOP_PATH} />
    <Route component={v.ErrorNotfoundView} />
  </TheRoute.Switch>
))

export default Routes
