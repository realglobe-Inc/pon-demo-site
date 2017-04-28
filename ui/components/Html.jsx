'use strict'

import React from 'react'

const Html = ({ title, children }) => (
  <html id='index-html'>
  <head>
    <title>{ title }</title>
    <meta charSet='UTF-8'/>
    <link rel='icon' href='/favicon.png'/>
    <script src='/js/index.js'></script>
  </head>
  <body>
  <div id='app-container'>
    { children }
  </div>
  </body>
  </html>
)

export default Html


