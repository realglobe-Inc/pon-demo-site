/**
 * NotfoundView component
 */
'use strict'

import React from 'react'
import { TheView, TheRoute, TheContainer } from 'the-components'
import { asView } from '../wrappers'
import style from './NotfoundView.pcss'

class NotfoundView extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    return (
      <TheView className={style.self}>
        <TheView.Header icon={null}
                        text={null}
        />
        <TheRoute.Status code={404}>
          <TheContainer>
            <h3>Sorry, Page Not Found!!</h3>
            <div>
            </div>
          </TheContainer>
        </TheRoute.Status>
      </TheView>
    )
  }

  componentDidMount () {

  }

  componentWillUnmount () {
  }
}

export default asView(NotfoundView)
