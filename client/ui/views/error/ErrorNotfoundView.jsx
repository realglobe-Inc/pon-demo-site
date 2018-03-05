/**
 * ErrorNotfoundView component
 */
'use strict'

import React from 'react'
import { TheRoute, TheView } from 'the-components'
import styles from './ErrorNotfoundView.pcss'
import { asView } from '../../wrappers'

class ErrorNotfoundView extends React.Component {
  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    const s = this
    const {props } = s
    const {l } = props
    return (
      <TheView className={styles.self}>
        <TheView.Header icon={null}
                        text={null}
        />
        <TheView.Body>
          <TheRoute.Status code={404}>
            <div>
              <h3>{l('messages.PAGE_NOT_FOUND')}</h3>
              <div>
              </div>
            </div>
          </TheRoute.Status>
        </TheView.Body>
      </TheView>
    )
  }
}

export default asView(ErrorNotfoundView)
