/**
 * Header component
 */
'use strict'

import React from 'react'
import {
  TheHeader,
} from 'the-components'
import { withLoc } from 'the-loc'
import { Icons, Urls } from '@self/conf'

const Header = ({l}) => {
  return (
    <TheHeader className='header'>
      <TheHeader.Logo>{l('app.APP_NAME')}</TheHeader.Logo>
    </TheHeader>
  )
}

export default withLoc(Header)
