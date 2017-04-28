/**
 * Home component
 */
'use strict'

import React from 'react'
import autoBind from 'react-autobind'

class Home extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    autoBind(s)
  }

  render () {
    const s = this
    const { props } = s
    return (
      <div className='home'>
        This is Home!
      </div>
    )
  }
}

export default Home
