/**
 * HomeView component
 */
'use strict'

import React from 'react'
import { TheButton, TheCycle, TheMeta, TheView } from '@the-/ui'
import styles from './HomeView.pcss'
import context from '../context'

class HomeView extends React.Component {
  #stateful = context.stateful(
    (state) => ({
      busy: state['home.busy'],
      count: state['home.count'],
    }),
    ({ homeScene, l, toastAct }, pipedProxy) => ({
      onCountUp: async () => {
        await homeScene.countUp()
        await toastAct.showInfo(l('toasts.COUNT_UP_DID_SUCCESS'))
        console.log('new Count:', pipedProxy.count)
      },
      onMount: async () => {},
      onReceive: async () => {},
      onUnmount: async () => {},
    }),
  )

  render() {
    const title = null
    return this.#stateful(
      ({ busy, count, l, onCountUp, onMount, onReceive, onUnmount }) => (
        <TheCycle
          onMount={onMount}
          onReceive={onReceive}
          onUnmount={onUnmount}
          values={{}}
        >
          <TheMeta title={title}>
            <TheView className={styles.self}>
              <TheView.Header icon={null} text={title} />
              <TheView.Body>
                <p>
                  <span>Count={count}</span>
                  <TheButton onClick={onCountUp} spinning={busy}>
                    {l('buttons.DO_COUNT_UP')}
                  </TheButton>
                </p>
              </TheView.Body>
            </TheView>
          </TheMeta>
        </TheCycle>
      ),
    )
  }
}

export default HomeView
