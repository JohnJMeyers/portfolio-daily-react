import React, { Component } from 'react';

export default class About extends Component {

  render() {

    return(
      <div className="container">
        <div id="jumbo-about" className="jumbotron">

          <div className="page-header about-header">
            <h1>About Me</h1>
          </div>

          <div className="about-panels">

            <div className="panel panel-primary">
              <div className="panel-body">
                Name:
              </div>
              <div className="panel-footer">Rowan Atkinson</div>
            </div>

            <div className="panel panel-success">
              <div className="panel-body">
                Occupation:
              </div>
              <div className="panel-footer">Web Developer</div>
            </div>

            <div className="panel panel-info">
              <div className="panel-body">
                Experience
              </div>
              <div className="panel-footer">22 Years</div>
            </div>

            <div className="panel panel-warning">
              <div className="panel-body">
                Location:
              </div>
              <div className="panel-footer">Houston, Texas</div>
            </div>

          </div>

            <img className="img-thumbnail" alt="" id="bean" src="https://pbs.twimg.com/profile_images/451489167659524096/5eHq-FXQ.jpeg"></img>

        </div>
        <h3 className="bar-header">Language Proficiencies</h3>
        <br />
        <br />
        <br />
        <div className="progress">
          <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
            70%
          </div>
          <span>JAVASCRIPT</span>
        </div>
        <br />
        <div className="progress">
          <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
            80%
          </div>
          <span>RUBY</span>
        </div>
        <br />
        <div className="progress">
          <div className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}>
            90%
          </div>
          <span>SQL</span>
        </div>

      </div>
    )
  }
}
