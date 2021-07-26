import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css'
import React, { Component } from 'react';
import Logohdr from '../images/A.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
  render() {
    return (
      <div className="container">
          <header className="gf-header__content">
<div className="d-flex align-items-center justify-content-between container">
    <div className="d-flex align-items-center">
        <div className="logo_hdr me-2 me-sm-4">
        <img src={Logohdr} alt="" />
        </div>
        
             <ul className="nav thumbs navigation flex-wrap" id="nav" >
                <li className="me-2 "><a href="#about" className="active hover_link" >About</a></li>
                <li className="me-2 "><a href="#services" className="hover_link">Services </a></li>
                <li className="me-2 "><a href="#portfolio" className="hover_link">Portfolio</a></li>
                <li className="me-2 "><a href="#clients" className="hover_link">Clients</a></li>
                <li className="me-2 "><a href="#testimonials" className="hover_link">Testimonials</a></li>
                <li className="me-2 "><a href="#contact_Me" className="hover_link">Contact Me</a></li>
            </ul>
        
    </div>
    <div className="drop_hrd hover_icon" >
      <FontAwesomeIcon className="icon" icon={faBars}/>                                      
    </div>
</div>
          </header>
      </div>
    );
  }
}
