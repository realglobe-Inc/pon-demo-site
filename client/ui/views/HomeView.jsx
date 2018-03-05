/**
 * HomeView component
 */
'use strict'

import React from 'react'
import { localized, stateful } from 'the-component-mixins'
import { TheButton, TheView } from 'the-components'
import styles from './HomeView.pcss'

@localized
class HomeView extends React.Component {
  render () {
    const {
      busy,
      count,
      countUp,
      l,
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
            <TheButton onClick={countUp}>
              {l('buttons.DO_COUNT_UP')}
            </TheButton>
          </p>
        </TheView.Body>
      </TheView>
    )
  }
}

export default stateful(
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
)(HomeView,)
