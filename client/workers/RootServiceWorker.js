/**
 * @file ServiceWorker
 */
'use strict'

import conf from './deps/conf'
import URL from 'url-parse'
import AppConsts from '../constants/AppConsts'
import { appCache, cachingFetch } from 'the-sw-util'

const { SrcSets, Urls } = conf

const pathsToCache = [...SrcSets.jsSet, ...SrcSets.cssSet, Urls.ICON_URL]
const urlsToCache = []

const patternsToCache = [/^\/webfonts\//, /^\/images\//, /\.chunk\.js/]

let info
const ready = (async function() {
  const data = await self.fetch('/the/info')
  info = await data.json()
})()

self.addEventListener('install', (event) => {
  event.waitUntil(ready)
})

self.addEventListener('fetch', (event) => {
  const { url } = event.request
  const { host, pathname } = new URL(url)
  const isOwn = host === location.host
  const shouldCache =
    urlsToCache.includes(url) ||
    ((isOwn && pathsToCache.includes(pathname)) ||
      patternsToCache.some((pattern) => pattern.test(pathname)))
  if (!shouldCache) {
    return
  }
  event.respondWith(
    (async function() {
      await ready
      const version = [AppConsts.version, info.buildNumber].join('-')
      const cache = await appCache(AppConsts.name, version, {
        scope: 'static-files',
      })
      return cachingFetch(cache, event.request)
    })(),
  )
})
