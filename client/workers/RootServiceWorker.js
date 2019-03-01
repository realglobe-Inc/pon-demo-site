/**
 * @file ServiceWorker
 */
'use strict'

import conf from './deps/conf'
import { appCache, cachingFetch, parseUrl } from 'the-sw-util'

const { SrcSets, Urls } = conf

const pathnamesToCache = [
  ...SrcSets.jsSet,
  ...SrcSets.cssSet,
  Urls.ICON_URL,
  /^\/webfonts\//,
  /^\/images\//,
  /\.chunk\.js/,
]

self.addEventListener('install', (event) => {})

self.addEventListener('fetch', (event) => {
  const requestURL = parseUrl(event.request.url, true)
  const scriptURL = parseUrl(self.registration.active.scriptURL, true)
  const isOwn = requestURL.host === scriptURL.host
  const shouldCache =
    isOwn &&
    pathnamesToCache.some((pathname) => !!requestURL.pathname.match(pathname))
  if (!shouldCache) {
    return
  }

  event.respondWith(
    (async function() {
      const { v } = scriptURL.query
      const cache = await appCache(scriptURL.host, v, {
        scope: 'static-files',
      })
      return cachingFetch(cache, event.request)
    })(),
  )
})
