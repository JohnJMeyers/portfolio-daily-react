import React, { Component } from 'react'
import About from './About'
import Home from './Home'
import Portfolio from './Portfolio'

import {NavLink} from 'react-router-dom'

export default class BaseLayout extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    return(
      <div className="BaseLayout">

        <nav>
          <div className="container">
            <NavLink className="btn btn-link btn-lg" to='/'> Home </NavLink>
            <NavLink className="btn btn-link btn-lg" to='/about'> About </NavLink>
            <NavLink className="btn btn-link btn-lg" to='/portfolio'> Portfolio </NavLink>
          </div>
        </nav>

        <main>
          <div className="children">
            {this.props.children}
          </div>
        </main>

        <footer>
          <div>
            <h1>MrBean.com &#169;</h1>
          </div>
        </footer>

      </div>
    )
  }
}
