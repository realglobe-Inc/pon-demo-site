/**
 * ErrorNotfoundView component
 */
'use strict'

import React from 'react'
import { cycled, stateful } from 'the-component-mixins'
import { TheButton, TheButtonGroup, TheMeta, TheRoute, TheView } from 'the-components'
import styles from './ErrorNotfoundView.pcss'
import context from '../../context'

@stateful(
  (state) => ({}),
  ({}) => ({}),
)
@cycled
class ErrorNotfoundView extends React.Component {
  render () {
    const { l } = context.value
    const title = l('titles.ERROR_NOTFOUND_TITLE')
    return (
      <context.Entry>
        {({}) => (
          <TheMeta title={title}>
            <TheView className={styles.self}>
              <TheView.Body>
                <TheRoute.Status code={404}>
                  <br/>
                  <h3>{l('messages.PAGE_NOT_FOUND')}</h3>
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
        )}
      </context.Entry>
    )
  }
}

export default ErrorNotfoundView
