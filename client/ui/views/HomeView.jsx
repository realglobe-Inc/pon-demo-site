/**
 * HomeView component
 */
'use strict'

import React from 'react'
import { cycled, localized, stateful } from 'the-component-mixins'
import { TheButton, TheView } from 'the-components'
import styles from './HomeView.pcss'

@stateful(
  (state) => ({
    busy: state['home.busy'],
    count: state['home.count'],
  }),
  ({
     homeScene,
     l,
     toastScene,
   }) => ({
    onCountUp: async () => {
      await homeScene.countUp()
      await toastScene.showInfo(l('toasts.COUNT_UP_DID_SUCCESS'))
    },
  })
)
@cycled
@localized
class HomeView extends React.Component {
  render () {
    const {
      busy,
      count,
      l,
      onCountUp,
    } = this.props
    return (
      <TheView className={styles.self}>
        <TheView.Header icon={null}
                        text={null}
        />
        <TheView.Body>
          <p className={styles.loadingMessage}>
            {busy && 'Now calculating...'}
          </p>
          <p>

            <span>Count={count}</span>
            <TheButton onClick={onCountUp}>
              {l('buttons.DO_COUNT_UP')}
            </TheButton>
          </p>
        </TheView.Body>
      </TheView>
    )
  }
}

export default HomeView
