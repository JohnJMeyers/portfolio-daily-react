import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    return(
      <div className="jumbotron">
        <div className="row">
          <div class="col-xs-6 col-md-3">
            <a href="/about" class="thumbnail">
              <img className="home-pics" src="http://www.clipartlord.com/wp-content/uploads/2013/03/desktop-computer2.png" alt="..." />
            </a>
            <p>Responsive Web Design Ensures Your Site Will Look Great Across Any Platform</p>
          </div>
        </div>
        <div className="row">
          <div class="col-xs-6 col-md-3">
            <a href="/about" class="thumbnail">
              <img className="home-pics" src="http://www.clipartlord.com/wp-content/uploads/2014/06/professor3.png" alt="..." />
            </a>
            <p>Over 20 Years of Web Development Experience</p>
          </div>
        </div>
        <div className="row">
          <div class="col-xs-6 col-md-3">
            <a href="/about" class="thumbnail">
              <img className="home-pics" src="http://www.clipartlord.com/wp-content/uploads/2016/05/graph8.png" alt="..." />
            </a>
            <p>Comprehensive Analysis of Web Traffic and Consumer Data</p>
          </div>
        </div>
      </div>
    )
  }
}
