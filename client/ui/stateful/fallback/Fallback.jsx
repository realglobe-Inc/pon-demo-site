/**
 * Fallback component
 * @memberof module:pon-demo-site/client.ui
 * @function Fallback
 */
'use strict'

import c from 'classnames'
import React from 'react'
import { TheSpin } from '@the-/ui-spin'
import styles from './Fallback.pcss'
import { Stateful } from '../../context'

const stateful = Stateful(() => ({}))

/** @lends module:pon-demo-site/client.ui.Fallback */
const Fallback = React.memo(({ className }) =>
  stateful(() => (
    <div className={c(styles.self, className)}>
      <TheSpin className={styles.spin} enabled />
    </div>
  )),
)

export default Fallback
