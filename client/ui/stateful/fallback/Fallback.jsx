/**
 * Fallback component
 */
'use strict'

import c from 'classnames'
import React from 'react'
import { TheSpin } from 'the-components'
import styles from './Fallback.pcss'
import context from '../../context'

class Fallback extends React.Component {
  #stateful = context.stateful((state) => ({}), () => ({}))

  render() {
    const { className } = this.props
    return this.#stateful(({ l }) => {
      return (
        <div className={c(styles.self, className)}>
          <TheSpin className={styles.spin} enabled />
        </div>
      )
    })
  }
}

export default Fallback
