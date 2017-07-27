import React, { Component } from 'react';

export default class Portfolio extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    return(
        <div className="container">
          <div className="jumbotron">
            <div className="page-header">
              <h1>Previous Work</h1>
              <img className="port-images" src="http://static.wixstatic.com/media/bb2140d03a054ab3ae7829f7a5c0fff1.jpg"></img>
              <img className="port-images" src="http://gdj.graphicdesignjunction.com/wp-content/uploads/2011/02/website-template-15.jpg"></img>
              <img className="port-images" src="https://designmodo.com/wp-content/uploads/2010/12/free-flash-web-templates.jpg"></img>
              <img className="port-images" src="https://cdn1.freshdesignweb.com/wp-content/uploads/2016/01/best-car-website-templates.jpg"></img>
            </div>
          </div>
        </div>
    )
  }
}
