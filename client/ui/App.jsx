/**
 * App component
 */
'use strict'

import React from 'react'
import {
  cycled,
  handling,
  localized,
  stateful,
} from 'the-component-mixins'
import {
  TheMain,
  TheMeta,
  TheRoot,
} from 'the-components'
import { locales } from '@self/conf'
import { Dialogs, Footer, Header, Toasts } from './layouts'
import Routes from './Routes'

@stateful.root
@stateful(
  (state) => ({
    busy: state['app.busy'],
    pathname: state['app.pathname'],
  }),
  ({
     appScene,
   }) => ({
    onMount: async () => {
    },
  }),
)
@handling
@localized.with(locales)
@cycled
class App extends React.Component {
  render () {
    const { busy, l } = this.props
    return (
      <TheMeta.Root title={l('app.APP_NAME')}>
        <TheRoot>
          <Header/>
          <Toasts/>
          <TheMain spinning={busy}>
            <Routes/>
          </TheMain>
          <Footer/>
          <Dialogs/>
        </TheRoot>
      </TheMeta.Root>
    )
  }
}

export default App
