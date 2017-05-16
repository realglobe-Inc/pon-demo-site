'use strict'

import React from 'react'
import {
  TheHtml,
  TheHead,
  TheBody,
  TheThemeStyle,
  TheRouter
} from 'the-components'
import App from './App'
import { UI, Urls, Styles, locales } from '@self/conf'

const { DOMINANT_COLOR } = Styles
const { APP_PROP_NAME, APP_CONTAINER_ID } = UI

const {
  JS_BUNDLE_URL,
  JS_EXTERNAL_URL,
  CSS_BUNDLE_URL,
  CSS_FONT_URL
} = Urls

const Html = ({ appScope, clientScope, renderingContext }) => {
  const { version } = appScope.pkg
  const { lang, client, store } = clientScope
  let l = locales.bind(lang)
  let appProps = { lang }
  return (
    <TheHtml>
      <TheHead js={[ JS_EXTERNAL_URL, JS_BUNDLE_URL ]}
               css={[ CSS_BUNDLE_URL, CSS_FONT_URL ]}
               title={l('app.APP_NAME')}
               version={version}
               globals={{ [APP_PROP_NAME]: { lang } }}
               color={DOMINANT_COLOR}
      >
        <TheThemeStyle options={{ dominantColor: DOMINANT_COLOR }}/>
      </TheHead>
      <TheBody>
        <div id={APP_CONTAINER_ID}>
          <TheRouter.Static context={renderingContext}
                            location={clientScope.url}
          >
            <App {...appProps} {...{ store, client }}/>
          </TheRouter.Static>
        </div>
      </TheBody>
    </TheHtml>
  )
}

export default Html
export { APP_CONTAINER_ID, locales }