/**
 * Footer component
 */
'use strict'

import React from 'react'
import {
  TheFooter
} from 'the-components'
import { withLoc } from 'the-loc'
import { Urls } from '@self/conf'

const Footer = ({ l }) => {
  return (
    <TheFooter className='footer'>
      <TheFooter.CopyRight className='footerCopyright'/>
    </TheFooter>
  )
}

export default withLoc(Footer)
