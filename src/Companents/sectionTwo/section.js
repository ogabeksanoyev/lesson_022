import './section.css'
import React, { Component } from 'react';
import CardLogo1 from '../images/Polygon-1-copy-2 1.png';
import CardLogo2 from '../images/Vector (2).png'
import CardLogo3 from '../images/Vector (3).png'
import CardLogo4 from '../images/Vector (4).png'

export default class SectionTwo extends Component {
  render() {
    return (
      <div className="SectionTwo" id="services"> 
        <div className="container">
          <div className="info_text">
          <p>Services</p>
          </div>
           <div className="info_texts">
              <p >What actually <br />
              I love to do</p>
           </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="cards mb-2">
              <div className="d-flex align-items-center mb-3">
  <div className="card_logo me-2">
<img src={CardLogo1}  className="CardLogo1" alt="" />
<div className="CardLogo2">
  <img src={CardLogo2}  alt="" />
</div>
  </div>
  <div className="card-title mb-0">
<p className="mb-0">Brand Design</p>
  </div>
                    </div>
  <div className="card-text">
    <p>New demos are continually added and buying a single license for Mak gives 
      you access to all of what's shown below, plus everything that will be added in the future.</p>
  </div>
                </div>
              </div>
            
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="cards mb-2">
              <div className="d-flex align-items-center mb-3">
  <div className="card_logo me-2">
<img src={CardLogo1}  className="CardLogo1" alt="" />
<div className="CardLogo2">
  <img src={CardLogo3}  alt="" />
</div>
  </div>
  <div className="card-title mb-0">
<p className="mb-0">Web Development</p>
  </div>
                    </div>
  <div className="card-text">
    <p>New demos are continually added and buying a single license for Mak gives 
      you access to all of what's shown below, plus everything that will be added in the future.</p>
  </div>
                </div>
              </div>



              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="cards">
              <div className="d-flex align-items-center mb-3">
  <div className="card_logo me-2">
<img src={CardLogo1}  className="CardLogo1" alt="" />
<div className="CardLogo2">
  <img src={CardLogo4}  alt="" />
</div>
  </div>
  <div className="card-title mb-0">
<p className="mb-0">UX Research</p>
  </div>
                    </div>
  <div className="card-text">
    <p>New demos are continually added and buying a single license for Mak gives 
      you access to all of what's shown below, plus everything that will be added in the future.</p>
  </div>
                </div>
              </div>
            
            </div>
            
            </div>
        </div>  
    
    );
  }
}
