/**
 * Header component
 */
'use strict'

import React from 'react'
import { TheHeader } from '@the-/ui'
import { Stateful } from '../context'

const Header = React.memo(() => {
  const stateful = Stateful.memo(() => ({}))
  return stateful(({ l }) => (
    <TheHeader className='header'>
      <TheHeader.Logo>{l('app.APP_NAME')}</TheHeader.Logo>
    </TheHeader>
  ))
})

export default Header
