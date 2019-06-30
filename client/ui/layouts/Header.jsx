/**
 * Header component
 */
'use strict'

import React from 'react'
import { TheHeader } from '@the-/ui'
import { Stateful } from '../context'

class Header extends React.Component {
  #stateful = Stateful(() => ({}), () => ({}))

  render() {
    return this.#stateful(({ l }) => (
      <TheHeader className='header'>
        <TheHeader.Logo>{l('app.APP_NAME')}</TheHeader.Logo>
      </TheHeader>
    ))
  }
}

export default Header
