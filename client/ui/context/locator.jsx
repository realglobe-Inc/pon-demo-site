'use strict'

import qs from 'qs'
import { Paths } from '@self/conf'
import { formatUrl } from '@the-/url'
import { get } from '@the-/window'
import context from './context'

/**
 * Locator for context
 * @memberof module:pon-demo-site/client.context
 * @namespace locator
 */
const locator = {
  addQuery(query = {}, options = {}) {
    const { replace = false } = options
    const current = locator.getQuery()
    locator.setQuery({ ...current, ...query }, { replace })
  },
  delQuery(name, options = {}) {
    const { replace = false } = options
    const current = locator.getQuery() || {}
    locator.setQuery(
      Object.fromEntries(
        Object.entries(current).filter((entry) => entry[0] !== name),
      ),
      { replace },
    )
  },
  getQuery(name) {
    const search = get('location.search')
    if (!search) {
      return {}
    }

    const query = qs.parse(search, { ignoreQueryPrefix: true })
    if (arguments.length === 0) {
      return query
    }

    return query[name]
  },
  setQuery(query = {}, options = {}) {
    const { replace = false } = options
    const history = context.get('history')
    const queryString = qs.stringify(query)
    const search = `?${queryString}`
    if (history.location.search === search) {
      return
    }

    if (replace) {
      const {
        location: { hash },
      } = history
      history.replace({ hash, search })
    } else {
      history.push(search)
    }
  },
  async goBack() {
    const history = context.get('history')
    if (history.length === 0) {
      history.push(Paths.TOP_PATH)
    } else {
      history.goBack()
    }
  },
  async goTo(url, params, options = {}) {
    const { reload: shouldReload } = options
    const formattedURL = formatUrl(url, params)
    if (shouldReload) {
      const location = get('location')
      location.href = formattedURL
      return
    }

    const history = context.get('history')
    history.push(formattedURL)
  },
}

Object.freeze(locator)

export default locator
