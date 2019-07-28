/**
 * Footer component
 * @memberof module:pon-demo-site/client
 * @function Footer
 */
'use strict'

import React from 'react'
import { TheFooter } from '@the-/ui'
import { Stateful } from '../context'

/** @lends module:pon-demo-site/client.Footer */
const Footer = React.memo(() => {
  const stateful = Stateful.memo(() => ({}))
  return stateful(({ l }) => (
    <TheFooter className='footer'>
      <TheFooter.CopyRight footer={l('org.ORG_NAME')} />
      <TheFooter.Links className='footerLinks'>
        <TheFooter.Link to={l('org.ORG_URL')} />
      </TheFooter.Links>
    </TheFooter>
  ))
})

export default Footer
