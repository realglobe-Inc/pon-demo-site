/**
 * ErrorNotfoundView component
 */
'use strict'

import React from 'react'
import { cycled, localized, stateful } from 'the-component-mixins'
import { TheButton, TheButtonGroup, TheLead, TheMeta, TheRoute, TheView } from 'the-components'
import styles from './ErrorNotfoundView.pcss'

@stateful(
  (state) => ({}),
  ({}) => ({}),
)
@cycled
@localized
class ErrorNotfoundView extends React.Component {
  render () {
    const { l } = this.props
    const title = l('titles.ERROR_NOTFOUND_TITLE')
    return (
      <TheMeta title={title}>
        <TheView className={styles.self}>
          <TheView.Body>
            <TheRoute.Status code={404}>
              <br/>
              <TheLead title={l('messages.PAGE_NOT_FOUND')}>
              </TheLead>
              <br/>
              <div>
                <TheButtonGroup>
                  <TheButton href='/'>{l('buttons.SHOW_TOP_AGAIN')}</TheButton>
                </TheButtonGroup>
              </div>
            </TheRoute.Status>
          </TheView.Body>
        </TheView>
      </TheMeta>
    )
  }
}

export default ErrorNotfoundView
