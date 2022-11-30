import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./App.css";
import img1 from './images/mainpic.jpg';
import img2 from './images/pic2.jpg';
import img3 from './images/pic3.jpg';
import img4 from './images/pic4.jpg';
import img5 from './images/pic5.jpg';



function testpage () {
  return (
    <div className="background">
      <div className="gallery-page-column">
        <div className="gallery-header-container">
          <div className="gallery-header">
            <h1 className="header-text">gallery page! </h1>
          </div>
          <div className="gallery-header">
            <Link to="/" className="header-text">Go to home page</Link>
          </div>
        </div>

        
          <div className="gallery-imgs-container">
            <div>
              <img src={img2} alt="wait until the page loads" className='gal-img'/>
            </div>

            <div>
              <img src={img3} alt="wait until the page loads" className='gal-img'/>
            </div>

            <div>
              <img src={img4} alt="wait until the page loads" className='gal-img'/>
            </div>
          </div>
        
      </div>
    </div> 
  );
}

export default testpage;