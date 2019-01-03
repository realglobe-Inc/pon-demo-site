/**
 * ConnectionRetryDialog component
 */
'use strict'

import React from 'react'
import { stateful } from 'the-component-mixins'
import { TheConnectionRetryDialog } from 'the-site-components'
import { Icons } from '@self/conf'
import context from '../../context'

@stateful(
  (state) => ({
    active: state['connection.retry.active'],
    busy: state['connection.retry.busy'],
  }),
  ({
     connectionRetryScene: retryScene,
   }, propsProxy) => ({
    onClose: async () => retryScene.init(),
    onReload: async () => {
      await retryScene.doExec()
    },
  })
)
class ConnectionRetryDialog extends React.Component {
  render () {
    const { l } = context.value
    const {
      active,
      busy,
      onClose,
      onReload,
    } = this.props

    return (
      <TheConnectionRetryDialog {...{ active, busy, l, onClose, onReload }}
                                reloadIcon={Icons.RELOAD_ICON}
                                warningIcon={Icons.WARNING_ICON}
      />
    )
  }
}

export default ConnectionRetryDialog
