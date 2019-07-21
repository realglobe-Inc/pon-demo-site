/**
 * Fallback component
 */
'use strict'

import c from 'classnames'
import React from 'react'
import { TheSpin } from '@the-/ui-spin'
import styles from './Fallback.pcss'
import { Stateful } from '../../context'

const Fallback = React.memo(({ className }) => {
  const stateful = Stateful.memo(() => ({}))
  return stateful(() => (
    <div className={c(styles.self, className)}>
      <TheSpin className={styles.spin} enabled />
    </div>
  ))
})

export default Fallback
