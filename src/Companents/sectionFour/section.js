import './section.css'
import React, { Component } from 'react';
import clients1 from '../images/5cb480cd5f1b6d3fbadece79 1.png'
import clients2 from '../images/5841c47ba6515b1e0ad75aa3.png'
import clients3 from '../images/28350-5-microsoft-logo-photos.png'
import clients4 from '../images/256x256 1.png'
import clients5 from '../images/58482ec0cef1014c0b5e4a70 1.png'

export default class SectionFour extends Component {
  render() {
    return (
      <div className="SectionFour" id="clients">  
      <div className="container">
      <div className="info_text">
          <p>Clients</p>
          </div>
           <div className="info_texts">
              <p >Big Deal  <br />
              With</p>
           </div>
        <div className="d-flex align-items-center justify-content-between flex-wrap mt-5">
            <div className="clients_card clients1">
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
     <img src={clients1}  alt="" />
     <p>Slack</p>
                </div>
            </div>

            <div className="clients_card clients2">
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
     <img src={clients2}  alt="" />
     <p>Medium</p>
                </div>
            </div>
       

            <div className="clients_card clients3">
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
     <img src={clients3}  alt="" />
     <p>Microsoft</p>
                </div>
            </div>
       

            <div className="clients_card clients4">
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
     <img src={clients4}  alt="" />
     <p>Zeplin</p>
                </div>
            </div>
       

            <div className="clients_card clients5">
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
     <img src={clients5}  alt="" />
     <p>Shopify</p>
                </div>
            </div>
       

        </div>
      </div>
      </div>
    );
  }
}
