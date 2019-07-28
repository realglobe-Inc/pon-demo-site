/**
 * Header component
 * @memberof module:pon-demo-site/client
 * @function Header
 */
'use strict'

import React from 'react'
import { TheHeader } from '@the-/ui'
import { Stateful } from '../context'

/** @lends module:pon-demo-site/client.Header */
const Header = React.memo(() => {
  const stateful = Stateful.memo(() => ({}))
  return stateful(({ l }) => (
    <TheHeader className='header'>
      <TheHeader.Logo>{l('app.APP_NAME')}</TheHeader.Logo>
    </TheHeader>
  ))
})

export default Header
