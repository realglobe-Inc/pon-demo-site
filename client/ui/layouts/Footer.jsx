/**
 * Footer component
 n */
'use strict'

import React from 'react'
import { TheFooter } from '@the-/ui'
import { Stateful } from '../context'

class Footer extends React.Component {
  #stateful = Stateful(() => ({}), () => ({}))

  render() {
    return this.#stateful(({ l }) => (
      <TheFooter className='footer'>
        <TheFooter.CopyRight footer={l('org.ORG_NAME')} />
        <TheFooter.Links className='footerLinks'>
          <TheFooter.Link to={l('org.ORG_URL')} />
        </TheFooter.Links>
      </TheFooter>
    ))
  }
}

export default Footer
