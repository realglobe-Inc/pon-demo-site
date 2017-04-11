'use strict'

const { createElement: c } = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const IndexHtml = require('../../shim/html/index_html')

exports.index = (ctx) => renderToStaticMarkup(
  c(IndexHtml.default, {})
)
