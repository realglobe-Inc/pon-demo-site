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
let buildNumber

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async function() {
      const data = await self.fetch('/the/info')
      const info = await data.json()
      buildNumber = info.buildNumber
    })(),
  )
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
      const version = [AppConsts.version, buildNumber].join('-')
      const cache = await appCache(AppConsts.name, version, {
        scope: 'static-files',
      })
      return cachingFetch(cache, event.request)
    })(),
  )
})
