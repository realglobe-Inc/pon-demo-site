/**
 * Root service worker
 * @file ServiceWorker
 */
'use strict'

import { Paths, SrcSets } from '@self/conf'
import { appCache, cachingFetch, parseUrl } from '@the-/util-sw'

const pathnamesToCache = [
  ...SrcSets.jsSet,
  ...SrcSets.cssSet,
  Paths.ICON_PATH,
  /^\/webfonts\//,
  /^\/images\//,
  /\.chunk\.js/,
]

self.addEventListener('install', () => {})

self.addEventListener(
  'fetch',
  /** @type function(FetchEvent): void */
  (event) => {
    const requestURL = parseUrl(event.request.url)
    // @ts-ignore
    const scriptURL = parseUrl(self.registration.active.scriptURL)
    const isOwn = requestURL.host === scriptURL.host
    const shouldCache =
      isOwn &&
      pathnamesToCache.some((pathname) => !!requestURL.pathname.match(pathname))
    if (!shouldCache) {
      return
    }

    event.respondWith(
      (async function() {
        const {
          query: { v },
        } = scriptURL
        const cache = await appCache(scriptURL.host, v, {
          scope: 'static-files',
        })
        return cachingFetch(cache, event.request)
      })(),
    )
  },
)
