import './section.css'

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import img1 from '../images/Rectangle 5.png'
import img2 from '../images/Rectangle 6.png'

export default class SectionThree extends Component {
  render() {
    return (
      <div className="SectionThree" id="portfolio">  
<div className="container">
  <div className="d-flex align-items-center justify-content-between">
 <div>
    <div className="info_text">
            <p>Portfolio</p>
    </div>
    <div className="info_texts">
      <p >WAll Creative <br />
      Projects</p>
    </div>
   </div>           
<div  className="d-flex align-items-center" >
  <a href="#" className="me-3">Explore More</a> <FontAwesomeIcon icon={faAngleRight} />
</div>

</div>
    
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-10 col-12">
        <div>
          <img src={img1} alt=""  className="w-100" />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-10 col-12">
        <div>
          <img src={img2} alt="" className="w-100" />
        </div>
      </div>
    
    </div>
    
     </div>
      </div>
    );
  }
}
