'use strict'

import React from 'react'
import { Urls } from '@self/conf'
import { TheRoute } from 'the-components'

import {
  HomeView,
  AboutPrivacyPolicyView,
  AboutTermsOfUseView,
  ErrorNotfoundView
} from './views'
import { withLoc } from 'the-loc'

const Routes = ({ l }) => (
  <TheRoute.Switch>
    <TheRoute exact path={Urls.TOP_URL} component={HomeView}/>

    <TheRoute scrollToTop exact path={Urls.ABOUT_TERMS_OF_USE_URL} component={AboutTermsOfUseView}/>
    <TheRoute scrollToTop exact path={Urls.ABOUT_PRIVACY_POLICY_URL} component={AboutPrivacyPolicyView}/>

    <TheRoute component={ErrorNotfoundView}/>
  </TheRoute.Switch>
)

export default withLoc(Routes)
