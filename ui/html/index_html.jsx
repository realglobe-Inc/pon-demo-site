'use strict'

import React from 'react'

const IndexHtml = ({ title, children }) => (
  <html id='index-html'>
  <head>
    <title>{ title }</title>
    <meta charSet="UTF-8"/>
    <link rel="icon" href="/favicon.png"/>
  </head>
  <body>
  { children }
  </body>
  </html>
)

export default IndexHtml


