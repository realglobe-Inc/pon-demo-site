/**
 * Toasts component
 */
'use strict'

import React from 'react'
import { TheToast, TheToastGroup } from 'the-components'
import { connect, withStore } from 'the-store'
import { UI } from '@self/conf'

const {TOAST_DURATION } = UI

const Toasts = ({error, info, store, warn }) => {
  const {toast } = store
  return (
    <TheToastGroup className='main'>
      <TheToast.Info clearAfter={TOAST_DURATION} messages={info} onUpdate={({info }) => toast.info.reset(info)}/>
      <TheToast.Warn clearAfter={TOAST_DURATION} messages={warn} onUpdate={({warn }) => toast.warn.reset(warn)}/>
      <TheToast.Error clearAfter={TOAST_DURATION} messages={error} onUpdate={({error }) => toast.error.reset(error)}/>
    </TheToastGroup>
  )
}

export default connect(
  (state) => ({
    error: state[ 'toast.error' ],
    info: state[ 'toast.info' ],
    warn: state[ 'toast.warn' ],
  })
)(
  withStore(Toasts)
)
