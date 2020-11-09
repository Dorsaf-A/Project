import React, { Component } from "react";

export default class ContactUs extends Component {
    render() {
        return (
  <form>
    <h3>Contact Us</h3>
    <p>Leave us a message:</p>
  <div>
      <form >
      <div className="form-group">
        <label for="fname">First Name</label><br/>
        <input type="text" id="fname" className="form-control" name="firstname" placeholder="Your name.."/>
      </div>
      <div className="form-group">
        <label for="lname">Last Name</label><br/>
        <input type="text" id="lname" className="form-control" name="lastname" placeholder="Your last name.."/>
      </div>
      <div className="form-group">
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" className="form-control" placeholder="Write something.." style={{height:"170px"}}></textarea><br/>
      </div>
      <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    </div>
  </form>
    )
}
}
