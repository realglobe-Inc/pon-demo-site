/**
 * App component
 */
'use strict'

import React from 'react'
import { TheCaughtCatcher, TheCycle, TheMain, TheMeta, TheRoot } from '@the-/ui'
import context from './context'
import { Dialogs, Footer, Header, Toasts } from './layouts'
import Routes from './Routes'

class App extends React.Component {
  #stateful = context.Stateful(
    (state) => ({
      busy: state['app.busy'],
      pathname: state['app.pathname'],
      ready: state['app.ready'],
    }),
    ({ actions: { appAct } }) => ({
      onMount: () => appAct.prepare(),
    }),
  )

  render() {
    return (
      <context.Root>
        {this.#stateful(({ busy, l, onMount, ready }) => (
          <TheCaughtCatcher>
            <TheMeta.Root title={l('app.APP_NAME')}>
              <TheCycle onMount={onMount}>
                <TheRoot>
                  <Header />
                  <Toasts />
                  <TheMain spinning={!ready || busy}>
                    <Routes />
                  </TheMain>
                  <Footer />
                  <Dialogs />
                </TheRoot>
              </TheCycle>
            </TheMeta.Root>
          </TheCaughtCatcher>
        ))}
      </context.Root>
    )
  }
}

export default App
