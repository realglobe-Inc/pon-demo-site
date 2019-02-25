'use strict'

import React from 'react'
import { TheRoute } from 'the-components'
import { Urls } from '@self/conf'
import { Route } from './stateful'
import * as v from './views'

class Routes extends React.Component {
  render() {
    return (
      <TheRoute.Switch>
        <Route component={v.HomeView} exact path={Urls.TOP_URL} />
        <Route component={v.ErrorNotfoundView} />
      </TheRoute.Switch>
    )
  }
}

export default Routes
