import './section.css'

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faComment } from '@fortawesome/free-solid-svg-icons';

export default class SectionSix extends Component {
  render() {
    return (
      <div className="SectionSix" id="contact_Me">
          <div className="container">
          <div className="info_text">
          <p>Contact Me</p>
          </div>
         
<div className="d-flex justify-content-between flex-wrap box_1">
    <p>Let me know if you want to talk <br /> about a potential collaboration. <br /> I'm available for freelance work.</p>
    <a href="#">infoname@mail.com</a>
</div>

<div className="form_input_group text-center my-5">
    <div className="form_floating mb-2">
        <input type="text" className="form-controlx" />
        <label htmlFor="">What's your name</label>
    </div>
    <div className="form_floating mb-2">
        <input type="text" className="form-controlx" />
        <label htmlFor="">Your email</label>
    </div>
    <div className="form_floating">
        <input type="text" className="form-controlx" />
        <label htmlFor="">Tell me about your project</label>
    </div>
</div>

<div className="d-flex justify-content-between align-items-center">
    <a href="#" className="btn_link">Get a Quote</a>
    <div>
    <a href="#" className="btn btn-light me-2"> <FontAwesomeIcon icon={faComment} /></a>
<a href="#" className="btn btn-light"> <FontAwesomeIcon icon={faAngleRight} /></a>
    </div>
</div>
          </div>
      </div>
    );
  }
}
