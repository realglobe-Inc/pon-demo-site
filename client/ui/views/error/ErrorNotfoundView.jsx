'use strict'

import React from 'react'
import { TheButton, TheButtonGroup, TheMeta, TheRoute, TheView } from '@the-/ui'
import styles from './ErrorNotfoundView.pcss'
import { Stateful } from '../../context'

const stateful = Stateful(() => ({}))

/**
 * ErrorNotfoundView component
 * @memberof module:pon-demo-site/client.ui
 * @function ErrorNotfoundView
 */
const ErrorNotfoundView = React.memo(() =>
  stateful(({ l }) => (
    <TheMeta title={l('titles.ERROR_NOTFOUND_TITLE')}>
      <TheView className={styles.self}>
        <TheView.Body>
          <TheRoute.Status code={404}>
            <br />
            <h3>{l('messages.PAGE_NOT_FOUND')}</h3>
            <br />
            <div>
              <TheButtonGroup>
                <TheButton href='/'>{l('buttons.SHOW_TOP_AGAIN')}</TheButton>
              </TheButtonGroup>
            </div>
          </TheRoute.Status>
        </TheView.Body>
      </TheView>
    </TheMeta>
  )),
)

export default ErrorNotfoundView
