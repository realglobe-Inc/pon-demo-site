/**
 * @file ServiceWorker
 */
'use strict'

import conf from './deps/conf'
import URL from 'url-parse'
import { appCache, cachingFetch } from 'the-sw-util'

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
  const requestURL = new URL(event.request.url)
  const scriptURL = new URL(self.registration.active)
  const isOwn = requestURL.host === scriptURL.host
  const shouldCache =
    isOwn &&
    pathnamesToCache.some((pathname) => !!requestURL.pathname.match(pathname))
  if (!shouldCache) {
    return
  }

  event.respondWith(
    (async function() {
      const cache = await appCache(scriptURL.host, scriptURL.query.v, {
        scope: 'static-files',
      })
      return cachingFetch(cache, event.request)
    })(),
  )
})
