/**
 * App component
 */
'use strict'

import React from 'react'
import {
  cycled,
  handling,
} from 'the-component-mixins'
import {
  TheMain,
  TheMeta,
  TheRoot,
} from 'the-components'
import context from './context'
import { Dialogs, Footer, Header, Toasts } from './layouts'
import Routes from './Routes'

@handling
@cycled
class App extends React.Component {
  #stateful = context.stateful(
    (state) => ({
      busy: state['app.busy'],
      pathname: state['app.pathname'],
    }),
    ({}) => ({}),
  )

  render () {
    return (
      <context.Root>
        {this.#stateful(
          ({ busy, l }) => (
            <TheMeta.Root title={l && l('app.APP_NAME')}>
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
        )}
      </context.Root>
    )
  }
}

export default App
