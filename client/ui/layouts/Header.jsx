/**
 * Header component
 */
'use strict'

import React from 'react'
import {
  TheHeader,
} from 'the-components'
import context from '../context'

class Header extends React.Component {
  render () {
    const { l } = context.value
    return (
      <TheHeader className='header'>
        <TheHeader.Logo>{l('app.APP_NAME')}</TheHeader.Logo>
      </TheHeader>
    )
  }
}

export default Header
