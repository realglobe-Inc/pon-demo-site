/**
 * HomeView component
 */
'use strict'

import React from 'react'
import { TheView, TheButton } from 'the-components'
import { asView } from '../wrappers'
import { HomeScene } from '../../scenes'
import style from './HomeView.pcss'

class HomeView extends React.PureComponent {
  constructor (props) {
    super(props)
    const { client, store, l } = props
    const s = this
    s.homeScene = new HomeScene({ client, store, l })
  }

  render () {
    const s = this
    const { props, homeScene } = s
    const { l } = props
    return (
      <TheView className={style.self}>
        <TheView.Header icon={null}
                        text={null}
        />
        <TheView.Body>
          <p className={style.loadingMessage}>
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

  componentDidMount () {
  }

  componentWillUnmount () {
  }
}

export default asView(HomeView, (state) => ({
  count: state[ 'app' ].count,
  busy: state[ 'app.busy' ]
}))


