/**
 * ConnectionRetryDialog component
 */
'use strict'

import React from 'react'
import { TheConnectionRetryDialog } from 'the-site-components'
import { Icons } from '@self/conf'
import context from '../../context'

class ConnectionRetryDialog extends React.Component {
  #initEntry = ({
                  handle: { connectionRetryScene: retryScene, }
                }) => ({
    onClose: async () => retryScene.init(),
    onReload: async () => {
      await retryScene.doExec()
    },
  })
  #pipeEntry = ({
                  state,
                }) => ({
    active: state['connection.retry.active'],
    busy: state['connection.retry.busy'],
  })

  render () {
    return (
      <context.Entry init={this.#initEntry}
                     pipe={this.#pipeEntry}
      >
        {
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
        }
      </context.Entry>
    )
  }
}

export default ConnectionRetryDialog
