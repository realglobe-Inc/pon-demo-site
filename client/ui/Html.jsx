/**
 * @memberof module:pon-demo-site/client.ui
 * @function Html
 */
'use strict'

import React from 'react'
import { GlobalKeys, locales, SrcSets, Styles, UI, Urls } from '@self/conf'
import { TheBody, TheHead, TheHtml, TheRouter } from '@the-/ui'
import { addUrlQuery } from '@the-/url'

/** @lends module:pon-demo-site/client.ui.Html */
const Html = React.memo(({ app, renderingContext }) => {
  const { buildNumber, cdnUrl, version } = app
  const { lang, path } = renderingContext
  const v = [version, buildNumber].join('-')
  const l = locales.bind(lang)
  const workerScopes = {
    '/': addUrlQuery(Urls.JS_ROOT_SERVICE_WORKER_URL, { v }),
  }
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
          <TheRouter.Static context={renderingContext} location={path} />
        </div>
      </TheBody>
    </TheHtml>
  )
})

export default Html
