/**
 * ErrorNotfoundView component
 */
'use strict'

import React from 'react'
import { cycled, stateful } from 'the-component-mixins'
import { TheButton, TheButtonGroup, TheMeta, TheRoute, TheView } from 'the-components'
import styles from './ErrorNotfoundView.pcss'
import context from '../../context'

@cycled
class ErrorNotfoundView extends React.Component {
  #initEntry = ({ l }) => ({
    l
  })
  #pipeEntry = ({ l, }) => ({})

  render () {
    return (
      <context.Entry init={this.#initEntry}
                     pipe={this.#pipeEntry}
      >
        {({ l }) => (
          <TheMeta title={l('titles.ERROR_NOTFOUND_TITLE')}>
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
