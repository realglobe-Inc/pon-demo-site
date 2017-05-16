/**
 * NotfoundView component
 */
'use strict'

import React from 'react'
import { TheView, TheRoute } from 'the-components'
import { asView } from '../wrappers'

class NotfoundView extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    return (
      <TheView className='errorNotfoundView'>
        <TheView.Header icon={null}
                        text={null}
        />
        <TheRoute.Status code={404}>
          <div>
            <h3>Sorry Page Not Found!!</h3>
            <div>
            </div>
          </div>
        </TheRoute.Status>
      </TheView>
    )
  }

  componentDidMount () {

  }

  componentWillUnmount () {
  }
}

export default asView(NotfoundView)
