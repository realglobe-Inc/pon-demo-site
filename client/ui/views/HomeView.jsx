/**
 * HomeView component
 */
'use strict'

import React from 'react'
import { cycled, stateful } from 'the-component-mixins'
import { TheButton, TheMeta, TheView } from 'the-components'
import styles from './HomeView.pcss'
import context from '../context'

@stateful(
  (state) => ({
    busy: state['home.busy'],
    count: state['home.count'],
  }),
  ({
     homeScene,
     toastScene,
   }) => ({
    onCountUp: async () => {
      const { l } = context.value
      await homeScene.countUp()
      await toastScene.showInfo(l('toasts.COUNT_UP_DID_SUCCESS'))
    },
  })
)
@cycled
class HomeView extends React.Component {
  render () {
    const { l } = context.value
    const {
      busy,
      count,
      onCountUp,
    } = this.props
    return (
      <context.Entry>
        {({}) => (
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
        )}
      </context.Entry>
    )
  }
}

export default HomeView
