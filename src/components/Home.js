import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class Home extends Component {


  render() {

    return(
      <div className="jumbotron">
        <div className="row">
          <div class="col-xs-6 col-md-3">
            <Link exact to="/about">
              <img className="home-pics" src="http://www.clipartlord.com/wp-content/uploads/2013/03/desktop-computer2.png" alt="" />
            </Link>
            <p>Responsive Web Design Ensures Your Site Will Look Great Across Any Platform</p>
          </div>
        </div>
        <div className="row">
          <div class="col-xs-6 col-md-3">
            <Link exact to="/about" class="thumbnail">
              <img className="home-pics" src="http://www.clipartlord.com/wp-content/uploads/2014/06/professor3.png" alt="" />
            </Link>
            <p>Over 20 Years of Web Development Experience</p>
          </div>
        </div>
        <div className="row">
          <div class="col-xs-6 col-md-3">
            <Link exact to="/about" class="thumbnail">
              <img className="home-pics" src="http://www.clipartlord.com/wp-content/uploads/2016/05/graph8.png" alt="" />
            </Link>
            <p>Comprehensive Analysis of Web Traffic and Consumer Data</p>
          </div>
        </div>
      </div>
    )
  }
}
