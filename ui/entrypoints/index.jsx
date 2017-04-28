'use strict'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App'

document.addEventListener('DOMContentLoaded', () => {
  let container = document.getElementById('app-container')
  render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    container
  )
})

