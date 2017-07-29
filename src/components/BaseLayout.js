import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class BaseLayout extends Component {


  render() {

    return(
      <div className="BaseLayout">
        <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
          <div className="container">
            <NavLink activeStyle={{color: 'red'}} className="btn btn-link btn-lg" to='/'> Home </NavLink>
            <NavLink activeClassName="active" className="btn btn-link btn-lg" to='/about'> About </NavLink>
            <NavLink activeClassName="active" className="btn btn-link btn-lg" to='/portfolio'> Portfolio </NavLink>
            <NavLink activeClassName="active" className="btn btn-link btn-lg" to='/references'> References </NavLink>
            <NavLink activeClassName="active" className="btn btn-link btn-lg" to='/contact'> Contact </NavLink>
          </div>
        </nav>

          <div className="children">
            {this.props.children}
          </div>

        <footer>
          <div className="footer-text">
          <h1>MrBean.com <small>&#169;</small></h1>
          </div>
        </footer>

      </div>
    )
  }
}
