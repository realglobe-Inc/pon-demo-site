'use strict'

import React from 'react'
import { TheHeader } from '@the-/ui'
import { Stateful } from '../context'

const stateful = Stateful(() => ({}))

/**
 * Header component
 * @memberof module:pon-demo-site/client
 * @function Header
 */
const Header = React.memo(() =>
  stateful(({ l }) => (
    <TheHeader className='header'>
      <TheHeader.Logo>{l('app.APP_NAME')}</TheHeader.Logo>
    </TheHeader>
  )),
)

export default Header
