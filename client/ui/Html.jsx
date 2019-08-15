'use strict'

import React from 'react'
import { GlobalKeys, locales, Paths, SrcSets, Styles, UI } from '@self/conf'
import { TheBody, TheHead, TheHtml, TheRouter } from '@the-/ui'
import { addUrlQuery } from '@the-/url'

/**
 * @memberof module:pon-demo-site/client.ui
 * @function Html
 */
const Html = React.memo(({ app, renderingContext }) => {
  const { buildNumber, cdnUrl, version } = app
  const { lang, path } = renderingContext
  const v = [version, buildNumber].join('-')
  const l = locales.bind(lang)
  const workerScopes = {
    '/': addUrlQuery(Paths.JS_ROOT_SERVICE_WORKER_PATH, { v }),
  }
  const appProps = {
    lang,
    v,
    workerScopes,
  }
  return (
    <TheHtml lang={lang}>
      <TheHead
        cdn={cdnUrl}
        color={Styles.DOMINANT_COLOR}
        css={SrcSets.cssSet}
        globals={{ [GlobalKeys.APP]: {}, [GlobalKeys.PROPS]: appProps }}
        icon={Paths.ICON_PATH}
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
