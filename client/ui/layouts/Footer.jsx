/**
 * Footer component
 n */
'use strict'

import React from 'react'
import { localized } from 'the-component-mixins'
import {
  TheFooter,
} from 'the-components'
import { Urls } from '@self/conf'

@localized
class Footer extends React.Component {
  render () {
    const {l} = this.props
    return (
      <TheFooter className='footer'>
        <TheFooter.CopyRight footer={l('org.ORG_NAME')}
        />
        <TheFooter.Links className='footerLinks'>
        </TheFooter.Links>
      </TheFooter>
    )
  }
}

export default Footer
