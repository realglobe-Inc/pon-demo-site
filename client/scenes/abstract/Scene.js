/**
 * Base scene
 * @memberof module:pon-demo-site/client.scenes.abstract
 * @abstract
 * @class Scene
 */
'use strict'

import { TheScene } from '@the-/scene/shim'
import { addUrlQuery, formatUrl } from '@the-/url'
import { reload } from '@the-/window'

class SceneBase extends TheScene {}

/** @lends module:pon-demo-site/client.scenes.abstract.Scene */
class Scene extends SceneBase {
  catchEntryError(e) {
    try {
      return super.catchEntryError(e)
    } catch (e) {
      switch (e.name) {
        case 'NotFoundError': {
          return this.parseAppError(e, {
            defaultMessageKey: 'RESOURCE_NOT_FOUND_ERROR',
          })
        }
        case 'WrongPasswordError': {
          return this.parseAppError(e, {})
        }

        default:
          throw e
      }
    }
  }

  catchError(e) {
    const { l, store } = this
    try {
      return super.catchError(e)
    } catch (e) {
      store.toast.error.push(l('errors.UNEXPECTED_ERROR'))
    }
  }

  async goTo(url, params = {}, options = {}) {
    const { query = {}, reload: shouldReload = false } = options
    const href = addUrlQuery(formatUrl(url, params), query)
    const {
      store: { app },
    } = this
    app.busy.true()
    try {
      await super.goTo(href)
      if (shouldReload) {
        await reload()
      }
    } finally {
      app.busy.false()
    }
  }
}

export default Scene
