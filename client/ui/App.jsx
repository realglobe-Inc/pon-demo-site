/**
 * App component
 * @memberof module:pon-demo-site/client.ui
 * @function App
 */
'use strict'

import React from 'react'
import { TheCaughtCatcher, TheCycle, TheMain, TheMeta, TheRoot } from '@the-/ui'
import { context, Handle, Stateful } from './context'
import { Dialogs, Footer, Header, Toasts } from './layouts'
import Routes from './Routes'

/** @lends module:pon-demo-site/client.ui.App */
const App = React.memo(() => {
  const stateful = Stateful.memo((state) => ({
    busy: state['app.busy'],
    ready: state['app.ready'],
  }))
  const handle = Handle.memo(({ actions: { appAct } }) => ({
    onMount: () => appAct.prepare(),
  }))
  return (
    <context.Root>
      <TheCaughtCatcher>
        {stateful(({ busy, l, ready }) => (
          <TheMeta.Root title={l('app.APP_NAME')}>
            <TheCycle onMount={handle.onMount}>
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
        ))}
      </TheCaughtCatcher>
    </context.Root>
  )
})

export default App
