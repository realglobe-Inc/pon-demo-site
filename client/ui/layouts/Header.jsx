/**
 * Header component
 */
'use strict'

import React from 'react'
import { localized } from 'the-component-mixins'
import {
  TheHeader,
} from 'the-components'
import { Icons, Urls } from '@self/conf'

@localized
class Header extends React.Component {
  render () {
    const {l} = this.props
    return (
      <TheHeader className='header'>
        <TheHeader.Logo>{l('app.APP_NAME')}</TheHeader.Logo>
      </TheHeader>
    )
  }
}

export default Header
