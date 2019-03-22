/**
 * @class Html
 */
'use strict'

import React from 'react'
import { TheBody, TheHead, TheHtml, TheRouter } from 'the-components'
import { GlobalKeys, locales, SrcSets, Styles, UI, Urls } from '@self/conf'
import { addUrlQuery } from '@the-/url'
import App from './App'
import context from './context'

/** @lends Html */
function Html({ appScope, renderingContext }) {
  const { buildNumber, cdnUrl, version } = appScope
  const { client, handle, lang, path, store } = renderingContext
  const v = [version, buildNumber].join('-')
  const l = locales.bind(lang)
  const workerScopes = {
    '/': addUrlQuery(Urls.JS_ROOT_SERVICE_WORKER_URL, { v }),
  }
  handle.setAttributes({ client, l, lang, store })
  context.set({ handle, l, lang, state: store.state })

  const appProps = {
    lang,
    v,
    workerScopes,
  }
  return (
    <TheHtml>
      <TheHead
        cdn={cdnUrl}
        color={Styles.DOMINANT_COLOR}
        css={SrcSets.cssSet}
        globals={{ [GlobalKeys.APP]: {}, [GlobalKeys.PROPS]: appProps }}
        icon={Urls.ICON_URL}
        js={SrcSets.jsSet}
        title={l('app.APP_NAME')}
        version={v}
      />
      <TheBody>
        <div id={UI.APP_CONTAINER_ID}>
          <TheRouter.Static context={renderingContext} location={path}>
            <App {...appProps} {...{ client, handle, store }} />
          </TheRouter.Static>
        </div>
      </TheBody>
    </TheHtml>
  )
}

export default Html
