/**
 * App component
 */
'use strict'

import React from 'react'
import { cliental, cycled, handling, localized, provided, stateful, titled } from 'the-component-mixins'
import {
  TheMain,
  TheRoot,
} from 'the-components'
import { locales } from '@self/conf'
import { Dialogs, Footer, Header, Toasts } from './layouts'
import Routes from './Routes'

@provided
@handling
@cliental.root
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
