/**
 * About component
 */
'use strict'

import React from 'react'
import autoBind from 'react-autobind'

class About extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    autoBind(s)
  }

  render () {
    const s = this
    const { props } = s
    return (
      <div className='about'>
        This is About!
        { props.children }
      </div>
    )
  }

  // ---------
  // Sub components
  // ---------

  static PrivacyPolicy () {
    return (
      <div className='privacy-policy'>
        This is privacy policy
      </div>
    )
  }

  static TermOfUse () {
    return (
      <div className='about-term-of-use'>
        This is term of use
      </div>
    )
  }
}

export default About
