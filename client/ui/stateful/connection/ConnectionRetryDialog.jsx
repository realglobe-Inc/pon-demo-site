/**
 * ConnectionRetryDialog component
 */
'use strict'

import React from 'react'
import { TheConnectionRetryDialog } from 'the-site-components'
import { Icons } from '@self/conf'
import context from '../../context'

class ConnectionRetryDialog extends React.Component {
  #stateful = context.stateful(
    (state) => ({
      active: state['connection.retry.active'],
      busy: state['connection.retry.busy'],
    }),
    ({
       l,
       connectionRetryScene: retryScene,
     }) => ({
      l,
      onClose: async () => retryScene.init(),
      onReload: async () => {
        await retryScene.doExec()
      },
    })
  )

  render () {
    return this.#stateful(
      ({
         active,
         busy,
         l,
         onClose,
         onReload,
       }) => (
        <TheConnectionRetryDialog {...{ active, busy, l, onClose, onReload }}
                                  reloadIcon={Icons.RELOAD_ICON}
                                  warningIcon={Icons.WARNING_ICON}
        />
      )
    )
  }
}

export default ConnectionRetryDialog
