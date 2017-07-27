import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    return(
      <div>
        <div className="container">
          <div className="jumbotron">
            <div className="page-header">
              <h1>About Me</h1>
              <img id="bean" src="http://www.elasperger.org/wp-content/uploads/2013/10/atkinson-says-goodbye-to-beloved-character-mr-bean1.jpg"></img>
              <ul>
                <li><strong>Name: </strong>Rowan Atkinson</li>
                <li><strong>Experience: </strong>22 Years</li>
                <li><strong>Specialties: </strong>HTML CSS JAVASCRIPT</li>
                <li><strong>Website: </strong><a href="mrbean.com">MrBean.com</a></li>
                <li><strong>Contact: </strong>BeanBaby@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
