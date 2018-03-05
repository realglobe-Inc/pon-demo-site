/**
 * HomeView component
 */
'use strict'

import React from 'react'
import { TheButton, TheView } from 'the-components'
import styles from './HomeView.pcss'
import { asView } from '../wrappers'
import { HomeScene } from '../../scenes'

class HomeView extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    s.homeScene = new HomeScene(props)
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    const s = this
    const {homeScene, props } = s
    const {l } = props
    return (
      <TheView className={styles.self}>
        <TheView.Header icon={null}
                        text={null}
        />
        <TheView.Body>
          <p className={styles.loadingMessage}>
            {props.busy && 'Now calculating...'}
          </p>
          <p>

            <span>Count={props.count}</span>
            <TheButton onClick={ () => homeScene.countUp() }>
              {l('buttons.DO_COUNT_UP')}
            </TheButton>
          </p>
        </TheView.Body>
      </TheView>
    )
  }
}

export default asView(HomeView, (state) => ({
  busy: state[ 'app.busy' ],
  count: state[ 'app' ].count,
}))
