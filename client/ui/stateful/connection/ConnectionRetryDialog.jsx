/**
 * ConnectionRetryDialog component
 */
'use strict'

import React from 'react'
import { Icons } from '@self/conf'
import { TheButton, TheButtonGroup, TheDialog } from '@the-/ui'
import { Handle, Stateful } from '../../context'

const ConnectionRetryDialog = React.memo(() => {
  const stateful = Stateful.memo((state) => ({
    active: state['connection.retry.active'],
    busy: state['connection.retry.busy'],
  }))
  const handle = Handle.memo(
    ({ actions: { connectionRetryAct: retryAct }, l }) => ({
      l,
      onClose: async () => retryAct.close(),
      onReload: async () => {
        await retryAct.reload()
      },
    }),
  )
  return stateful(({ active, busy, l }) => {
    if (!active) {
      return null
    }
    return (
      <TheDialog
        icon={Icons.WARNING_ICON}
        lead={l('messages.CONNECTION_SEEMS_TO_BE_LOST')}
        onClose={handle.onClose}
        present
        spinning={busy}
        title={l('titles.CONNECTION_RETRY_TITLE')}
      >
        <TheButtonGroup>
          <TheButton icon={Icons.RELOAD_ICON} onClick={handle.onReload}>
            {l('buttons.DO_RELOAD')}
          </TheButton>
        </TheButtonGroup>
      </TheDialog>
    )
  })
})

export default ConnectionRetryDialog
