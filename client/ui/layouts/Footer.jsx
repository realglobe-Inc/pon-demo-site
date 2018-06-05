/**
 * Footer component
n */
'use strict'

import React from 'react'
import {
  TheFooter,
} from 'the-components'
import { withLoc } from 'the-loc'
import { Urls } from '@self/conf'

const Footer = ({l}) => {
  return (
    <TheFooter className='footer'>
      <TheFooter.CopyRight footer={l('org.ORG_NAME')}
      />
      <TheFooter.Links className='footerLinks'>
      </TheFooter.Links>
    </TheFooter>
  )
}

export default withLoc(Footer)
