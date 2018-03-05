'use strict'

import React from 'react'
import { TheRoute } from 'the-components'
import { withLoc } from 'the-loc'
import { Urls } from '@self/conf'
import {
  AboutPrivacyPolicyView,
  AboutTermsOfUseView,
  ErrorNotfoundView,
  HomeView,
} from './views'

const Routes = ({l }) => (
  <TheRoute.Switch>
    <TheRoute component={HomeView} exact path={Urls.TOP_URL}/>

    <TheRoute component={ErrorNotfoundView}/>
  </TheRoute.Switch>
)

export default withLoc(Routes)
