/**
 * Toasts component
 */
'use strict'

import React from 'react'
import { TheSiteToasts } from 'the-site-components'
import { UI } from '@self/conf'
import context from '../context'

class Toasts extends React.Component {
  #initEntry = ({
             handle: { toastScene }
           }) => ({
    onReset: (queues) => toastScene.reset(queues),
  })
  #pipeEntry = ({
             state,
           }) => ({
    error: state['toast.error'],
    info: state['toast.info'],
    warn: state['toast.warn'],
  })

  render () {
    return (
      <context.Entry init={this.#initEntry}
                     pipe={this.#pipeEntry}
      >
        {({
            error,
            info,
            onReset,
            warn,
          }) => (
          <TheSiteToasts {...{ error, info, onReset, warn }}
                         duration={UI.TOAST_DURATION}
          />
        )}
      </context.Entry>
    )
  }
}

export default Toasts
