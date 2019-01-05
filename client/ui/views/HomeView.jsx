/**
 * HomeView component
 */
'use strict'

import React from 'react'
import { cycled } from 'the-component-mixins'
import { TheButton, TheMeta, TheView } from 'the-components'
import styles from './HomeView.pcss'
import context from '../context'

@cycled
class HomeView extends React.Component {
  #stateful = context.stateful(
    (state) => ({
      busy: state['home.busy'],
      count: state['home.count'],
    }),
    ({
       l,
       toastScene,
       homeScene
     }) => ({
      l,
      onCountUp: async () => {
        await homeScene.countUp()
        await toastScene.showInfo(l('toasts.COUNT_UP_DID_SUCCESS'))
      }
    }),
  )

  render () {
    return this.#stateful(
      ({
         busy,
         count,
         l,
         onCountUp,
       }) => {
        return (
          <TheMeta title={null}>
            <TheView className={styles.self}>
              <TheView.Header icon={null}
                              text={null}
              />
              <TheView.Body>
                <p>
                  <span>Count={count}</span>
                  <TheButton onClick={onCountUp}
                             spinning={busy}
                  >
                    {l('buttons.DO_COUNT_UP')}
                  </TheButton>
                </p>
              </TheView.Body>
            </TheView>
          </TheMeta>
        )
      })
  }
}

export default HomeView
