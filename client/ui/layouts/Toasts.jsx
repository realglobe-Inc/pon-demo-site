/**
 * Toasts component
 */
'use strict'

import React from 'react'
import { UI } from '@self/conf'
import { TheToast, TheToastGroup } from '@the-/ui'
import { Stateful } from '../context'

class Toasts extends React.Component {
  #stateful = Stateful(
    (state) => ({
      error: state['toast.error'],
      info: state['toast.info'],
      warn: state['toast.warn'],
    }),
    ({ actions: { toastAct } }) => ({
      onReset: (queues) => toastAct.reset(queues),
    }),
  )

  render() {
    return this.#stateful(({ error, info, onReset, warn }) => (
      <TheToastGroup>
        <TheToast.Info
          clearAfter={UI.TOAST_DURATION}
          messages={info}
          onUpdate={onReset}
        />
        <TheToast.Warn
          clearAfter={UI.TOAST_DURATION}
          messages={warn}
          onUpdate={onReset}
        />
        <TheToast.Error
          clearAfter={UI.TOAST_DURATION}
          messages={error}
          onUpdate={onReset}
        />
      </TheToastGroup>
    ))
  }
}

export default Toasts
