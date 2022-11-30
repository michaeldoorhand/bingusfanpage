import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import img1 from "./images/mainpic.jpg";
import img2 from "./images/pic2.jpg";
import img3 from "./images/pic3.jpg";
import img4 from "./images/pic4.jpg";
import img5 from "./images/pic5.jpg";
import img6 from "./images/pic6.jpg";
import img7 from "./images/pic7.jpg";
import img8 from "./images/pic8.jpg";
import halfbing0 from "./images/halfbings/mainbing.jpg";
import halfbing1 from "./images/halfbings/darthbing.jpg";
import halfbing2 from "./images/halfbings/thanosbing.jpg";
import halfbing3 from "./images/halfbings/drbing.jpg";
import halfbing4 from "./images/halfbings/hankbing.jpg";
import halfbing5 from "./images/halfbings/obamabing.jpg";
import halfbing6 from "./images/halfbings/shrekbing.jpg";
import halfbing7 from "./images/halfbings/jokerbing.jpg";
import halfbing8 from "./images/halfbings/minionbing.jpg";
import halfbing9 from "./images/halfbings/mobamabing.jpg";
import halfbing10 from "./images/halfbings/stevebing.jpg";

import dancingbing from "./gifs/dancingbing.gif";
import ketabing from "./gifs/ketabing.gif";
import ScrollToTop from "./ScrollToTop";

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState();

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow">
      <img className="main-img" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  );
};

function gallerypage() {
  return (
    <div className="background">
      <h1 className="header">gallery page! </h1>

      <ScrollToTop>
        <Link to="/" className="header">
          Go to home page
        </Link>
      </ScrollToTop>
      <div className="gal-img-container">
        <div>
          <img src={img7} alt="wait until the page loads" className="gal-img" />
        </div>
        <div>
          <img src={img4} alt="wait until the page loads" className="gal-img" />
        </div>
        <div>
          <img src={img3} alt="wait until the page loads" className="gal-img" />
        </div>
        <div>
          <img src={img6} alt="wait until the page loads" className="gal-img" />
        </div>
        <div>
          <img src={img2} alt="wait until the page loads" className="gal-img" />
        </div>
      </div>

      <div className="row">
        <div className="yobing">
          <img
            src={dancingbing}
            alt="wait until the page loads"
            className="sidegifs"
          />
        </div>

        <div className="center">
          <div className="header">Cycle through bingus's alter egos!</div>

          <Slideshow
            imgs={[
              halfbing0,
              halfbing1,
              halfbing2,
              halfbing3,
              halfbing4,
              halfbing5,
              halfbing6,
              halfbing7,
              halfbing8,
              halfbing9,
              halfbing10,
            ]}
          />
        </div>
        <div className="yobing">
          <img
            src={ketabing}
            alt="wait until the page loads"
            className="sidegifs"
          />
        </div>
      </div>
      <div className="gal-img-container">
        <div>
          <img src={img7} alt="wait until the page loads" className="gal-img" />
        </div>
        <div>
          <img src={img4} alt="wait until the page loads" className="gal-img" />
        </div>
        <div>
          <img src={img3} alt="wait until the page loads" className="gal-img" />
        </div>
        <div>
          <img src={img6} alt="wait until the page loads" className="gal-img" />
        </div>
        <div>
          <img src={img2} alt="wait until the page loads" className="gal-img" />
        </div>
      </div>
    </div>
  );
}

export default gallerypage;
