import React from 'react';
import '../App.css';

const HeroSection = () => {
  return (
    <div className="heroSection d-flex flex-column ">
    <div className="container my-auto">
      <div className="row mt-5">
        <div className="col-lg-5"> <span className='customText'>big<br/>spaceShip</span></div>
        <div className="row">
        <div className="col-lg-5 ">
        <div className="vr CustomLine"></div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default HeroSection