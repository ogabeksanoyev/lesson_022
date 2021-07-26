import './footer.css'
import CardLogo1 from '../images/Polygon-1-copy-2 1.png';
import CardLogo2 from '../images/Vector (6).png';
import CardLogo3 from '../images/Vector (7).png';
import CardLogo4 from '../images/Vector (8).png';
import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer"> 
    <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
            <p>Let’s be Friends</p>
            <div className="d-flex">
            <div className="card_logo ">
<img src={CardLogo1}  className="CardLogo1" alt="" />
<div className="CardLogo2">
  <img src={CardLogo2}  alt="" />
</div>
  </div>

  <div className="card_logo mx-4">
<img src={CardLogo1}  className="CardLogo1" alt="" />
<div className="CardLogo2">
  <img src={CardLogo3}  alt="" />
</div>
  </div>

  <div className="card_logo ">
<img src={CardLogo1}  className="CardLogo1" alt="" />
<div className="CardLogo2">
  <img src={CardLogo4}  alt="" />
</div>
  </div>

            </div>
       <span className="small text-secondary mt-2">Web Developer Ogabek Sanoyev</span>
        </div>
    </div>
     </div>
    );
  }
}
