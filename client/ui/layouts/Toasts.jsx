/**
 * Toasts component
 * @memberof module:pon-demo-site/client
 * @function Toasts
 */
'use strict'

import React from 'react'
import { UI } from '@self/conf'
import { TheToast, TheToastGroup } from '@the-/ui'
import { Handle, Stateful } from '../context'

const stateful = Stateful((state) => ({
  error: state['toast.error'],
  info: state['toast.info'],
  warn: state['toast.warn'],
}))
const handle = Handle(({ actions: { toastAct } }) => ({
  onReset: (queues) => toastAct.reset(queues),
}))

/** @lends module:pon-demo-site/client.Toasts */
const Toasts = React.memo(() =>
  stateful(({ error, info, warn }) => (
    <TheToastGroup>
      <TheToast.Info
        clearAfter={UI.TOAST_DURATION}
        messages={info}
        onUpdate={handle.onReset}
      />
      <TheToast.Warn
        clearAfter={UI.TOAST_DURATION}
        messages={warn}
        onUpdate={handle.onReset}
      />
      <TheToast.Error
        clearAfter={UI.TOAST_DURATION}
        messages={error}
        onUpdate={handle.onReset}
      />
    </TheToastGroup>
  )),
)

export default Toasts
