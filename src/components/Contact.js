import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Contact extends Component {

  render() {

    return (
      <div className="container contact-div">

        <div className="page-header">
          <h1 className="contact-header"> Contact Me </h1>
        </div>

        <div className="jumbotron contact-jumbo">
          <ul className="contact-ul">
            <li><div className="well"><p>Name:</p> Rowan Atkinson</div></li>
            <li><div className="well"><p>Cell:</p> (555)555-5555</div></li>
            <li><div className="well"><p>Home:</p> (888)888-8888</div></li>
            <li><div className="well"><p>Email:</p> <Link to="#">Bean@gmail.com</Link> </div></li>
            <li><div className="well"><p>GitHub:</p> <Link to="#">Github.com/bean</Link> </div></li>
          </ul>
        </div>

        <div className="page-header">
          <h1 className="contact-header"> Send a Message </h1>
        </div>


        <form >

          <div className="form-group">
            <input type="text"  id="exampleInputEmail1" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email"  id="exampleInputPassword1" placeholder="Email" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" rows="8" cols="50" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
          
        </form>

      </div>
    )

  }
}
