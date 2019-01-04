/**
 * UI Context
 */
'use strict'

import React from 'react'
import { TheContext } from 'the-context'

const context = new TheContext({})

context.entry = function entry (pipe,init) {
  return (renderer) => (
    <context.Entry init={init}
                   pipe={pipe}
    >
      {renderer}
    </context.Entry>
  )
}

export default context
