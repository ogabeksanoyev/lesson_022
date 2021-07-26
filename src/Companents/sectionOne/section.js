import 'bootstrap/dist/css/bootstrap.min.css';
import './section.css';
import  Section_img from '../images/user-image 1.png'
import Section_img_logo from '../images/Vector (1).png'
import React, { Component } from 'react';

export default class SectionOne extends Component {
  render() {
    return (
      <div className="sectionOne py-5" id="about"> 
          <div className="container">
              <div className="row align-items-center  justify-content-center ">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="s_info">
                          <h3>Hello,</h3>
                          <div className="animated-text">
                              <p>Og'abek Sanoyev</p>
                              <p>Frontend Developer</p>
                              <p>PDP Academy</p>
                          </div>
                          <p>Fullstack Developer</p>
                        <a href="#" className="btn_link">Let’s Talk</a>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="section_img">
                          <img src={ Section_img} alt="" />
                          <div className="d-none d-sm-block">
                              <img src={Section_img_logo} className="Section_img_logo1" alt="" />
                              <img src={Section_img_logo} className="Section_img_logo2" alt="" />
                              <img src={Section_img_logo} className="Section_img_logo3" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
           </div>
    );
  }
}

