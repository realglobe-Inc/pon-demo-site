/**
 * Fallback component
 */
'use strict'

import React from 'react'
import { TheSpin } from 'the-components'
import styles from './Fallback.pcss'
import context from '../../context'

class Fallback extends React.Component {
  #stateful = context.stateful((state) => ({}), () => ({}))

  render() {
    return this.#stateful(({ l }) => {
      return (
        <div className={styles.self}>
          <TheSpin className={styles.spin} enabled />
        </div>
      )
    })
  }
}

export default Fallback
