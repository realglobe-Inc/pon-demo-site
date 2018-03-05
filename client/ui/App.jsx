/**
 * App component
 */
'use strict'

import React from 'react'
import { withClient } from 'the-client'
import { cycled, localized, stateful, titled } from 'the-component-mixins'
import {
  TheMain,
  TheRoot,
} from 'the-components'
import { withBinder } from 'the-handle'
import { withProvider } from 'the-store'
import { locales } from '@self/conf'
import { Dialogs, Footer, Header, Toasts } from './layouts'
import Routes from './Routes'

@withProvider
@withBinder
@withClient.root
@localized.with(locales)
@titled.app(({l}) => l('app.APP_NAME'))
class App extends React.Component {
  render () {
    const {busy} = this.props
    return (
      <TheRoot>
        <Header/>
        <Toasts/>
        <TheMain spinning={busy}>
          <Routes/>
        </TheMain>
        <Footer/>
        <Dialogs/>
      </TheRoot>
    )
  }
}

export default stateful(
  (state) => ({
    busy: state['app.busy'],
    pathname: state['app.pathname'],
  }),
  ({
     appScene,
   }) => ({
    onMount: async () => {
    },
  })
)(App)
