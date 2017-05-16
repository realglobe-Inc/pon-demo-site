'use strict'

import React from 'react'
import { Urls } from '@self/conf'
import { TheRoute } from 'the-components'

import {
  HomeView,
  NotfoundView
} from './views'
import { withLoc } from 'the-loc'

const Routes = ({ l }) => (
  <TheRoute.Switch>
    <TheRoute exact path={Urls.TOP_URL} component={HomeView}/>
    <TheRoute component={NotfoundView}/>
  </TheRoute.Switch>
)

export default withLoc(Routes)
