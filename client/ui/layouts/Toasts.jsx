/**
 * Toasts component
 */
'use strict'

import React from 'react'
import { UI } from '@self/conf'
import { TheToast, TheToastGroup } from '@the-/ui'
import { Handle, Stateful } from '../context'

const Toasts = React.memo(() => {
  const stateful = Stateful.memo((state) => ({
    error: state['toast.error'],
    info: state['toast.info'],
    warn: state['toast.warn'],
  }))
  const handle = Handle.memo(({ actions: { toastAct } }) => ({
    onReset: (queues) => toastAct.reset(queues),
  }))

  return stateful(({ error, info, warn }) => (
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
  ))
})

export default Toasts
