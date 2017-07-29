import React, { Component } from 'react';

export default class Portfolio extends Component {


  render() {

    return(
      <div className="jumbotron port-jumbo">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
          </ol>


          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img className="car-pics" src="http://static.wixstatic.com/media/bb2140d03a054ab3ae7829f7a5c0fff1.jpg" alt="..." />
              <div className="carousel-caption">
                ...
              </div>
            </div>

            <div className="item">
              <img className="car-pics" src="https://s3.amazonaws.com/menumaker-blog/post_images/2017/05/Karma.png" alt="" />
              <div className="carousel-caption">
                ...
              </div>
            </div>
            <div className="item">
              <img className="car-pics" src="http://hypecreative.net/wp-content/uploads/2013/12/shine3.jpg" alt="" />
              <div className="carousel-caption">
                ...
              </div>
            </div>
            <div className="item">
              <img className="car-pics" src="http://3.bp.blogspot.com/-Zt_-pzttcGQ/Ut7AAxO1Y0I/AAAAAAAAA3c/HaiNtRRofFU/s1600/Screen+Shot+2014-01-21+at+18.26.50.png" alt="" />
              <div className="carousel-caption">
                ...
              </div>
            </div>
            ...
          </div>

          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </div>

    )
  }
}
