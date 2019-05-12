/**
 * ListScene
 * @class ListScene
 * @abstract
 * @memberOf module:pon-demo-site/client.scenes.abstract
 */
'use strict'

import {
  bindDefaults,
  withBusy,
  withEntities,
  withFilter,
  withHistory,
  withPage,
  withReady,
  withSort,
} from '@the-/mixin-scene/shim'
import { hasMoreFor } from '@the-/util-site'
import Scene from './Scene'

@withBusy
@withSort
@withEntities
@withPage
@withReady
@withFilter
@withHistory
@bindDefaults({
  counts: {},
  entities: [],
  filter: {},
  pageNumber: 1,
  pageSize: 25,
})
class ListSceneBase extends Scene {}

/** @lends module:pon-demo-site/client.scenes.abstract.ListScene */
class ListScene extends ListSceneBase {
  static qField = ['name']

  addFilter(filter = {}) {
    this.set({
      filter: {
        ...this.getFilter(),
        ...filter,
      },
    })
  }

  emptyList() {
    return { entities: [], meta: {} }
  }

  getCondition() {
    return {
      filter: this.getFilter(),
      page: this.getPage(),
      sort: this.getSort(),
    }
  }

  setQ(q) {
    this.set({ pageNumber: 1 })
    this.setFilterByQ(q, { fields: this.constructor.qField })
    this.replaceHistoryByQuery({ q })
  }

  async dealWith(condition) {
    throw new Error('Not implemented')
  }

  @withBusy.while
  @withReady.when
  async doSync() {
    const { entities, meta: counts } = await this.dealWith(this.getCondition())
    this.set({ counts, entities, hasMore: hasMoreFor(counts) })
  }

  async doSyncBackground() {
    const isBusy = this.get('busy') || this.get('backgroundBusy')
    if (isBusy) {
      // TODO これだと取りこぼしがありそう
      return
    }
    this.set({ backgroundBusy: true })
    try {
      const { entities, meta: counts } = await this.dealWith(
        this.getCondition(),
      )
      this.set({ counts, entities, hasMore: hasMoreFor(counts) })
    } finally {
      this.set({ backgroundBusy: false })
    }
  }

  /**
   * Do sync for more.
   * @returns {Promise}
   */
  async doSyncMore() {
    this.set({ moreBusy: true })
    try {
      const pageNumber = this.get('pageNumber')
      this.set({ pageNumber: pageNumber + 1 })

      const condition = this.getCondition()
      const { entities, meta: counts } = await this.dealWith({
        ...condition,
        page: {
          number: 1,
          size: condition.page.number * condition.page.size,
        },
      })
      this.set({ counts, entities, hasMore: hasMoreFor(counts) })
      this.addEntities(entities)
    } finally {
      this.set({ moreBusy: false })
    }
  }

  async doSyncOne(id) {
    const {
      entities: [one],
    } = await this.dealWith({
      filter: { id },
      page: { number: 1, size: 1 },
    })
    if (one) {
      this.updateEntity(one)
    }
  }
}

export default ListScene
