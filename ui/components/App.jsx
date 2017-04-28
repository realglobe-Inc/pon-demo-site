/**
 * App component
 */
'use strict'

import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import autoBind from 'react-autobind'

import Home from './home'
import About from './about'

class App extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    autoBind(s)
  }

  render () {
    const s = this
    const { props } = s
    return (
      <div className='app'>
        <App.Header />
        <App.Main>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/about'>
              <div>
                <About />
                <Switch>
                  <Route path='/about/privacy-policy' component={ About.PrivacyPolicy }/>
                  <Route path='/about/term-of-use' component={ About.TermOfUse }/>
                </Switch>
              </div>
            </Route>
            <App.Error code={ 404 }>Sorry! Page not found</App.Error>
          </Switch>
        </App.Main>
        <App.Footer />
      </div>
    )
  }

  static Header () {
    return (
      <header className='app-header'>
        <a href="/">The app!</a>
      </header>
    )
  }

  static Main ({ children }) {
    return (
      <main className='app-main'>
        { children }
      </main>
    )
  }

  static Footer () {
    return (
      <footer className='app-footer'>
        <ul className='app-footer-links'>
          <li><Link to='/about/privacy-policy'>Privacy Policy</Link></li>
          <li><Link to='/about/term-of-use'>Term of Use</Link></li>
        </ul>
      </footer>
    )
  }

  static Error ({ code, children }) {
    return (
      <Route render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code
        }
        return (
          <div className='error'>
            { children }
          </div>
        )
      }}/>
    )
  }
}

export default App
