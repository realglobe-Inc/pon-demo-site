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
      <TheFooter.Links className='footerLinks'>
        <TheFooter.Link to={Urls.PRIVACY_POLICY_URL}>
          {l('buttons.SHOW_PRIVACY_POLICY')}
        </TheFooter.Link>
        <TheFooter.Link to={Urls.TERMS_OF_USE_URL}>
          {l('buttons.SHOW_TERMS_OF_USE')}
        </TheFooter.Link>
      </TheFooter.Links>
    </TheFooter>
  )
}

export default withLoc(Footer)
