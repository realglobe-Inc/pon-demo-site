/**
 * Footer component
 * @memberof module:pon-demo-site/client
 * @function Footer
 */
'use strict'

import React from 'react'
import { TheFooter } from '@the-/ui'
import { Stateful } from '../context'

const stateful = Stateful(() => ({}))

/** @lends module:pon-demo-site/client.Footer */
const Footer = React.memo(() =>
  stateful(({ l }) => (
    <TheFooter className='footer'>
      <TheFooter.CopyRight footer={l('org.ORG_NAME')} />
      <TheFooter.Links className='footerLinks'>
        <TheFooter.Link to={l('org.ORG_URL')}>
          {l('org.ORG_NAME')}
        </TheFooter.Link>
      </TheFooter.Links>
    </TheFooter>
  )),
)

export default Footer
