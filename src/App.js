import "./App.css";
import img1 from "./images/mainpic.jpg";
import yobing from "./gifs/yo-bingus.gif";
import georgebush from "./sounds/georgebush.mp3";
import { Howl, Howler } from "howler";
import { Link, Navigate } from "react-router-dom";
import galleryPage from "./Gallerypage";
import testpage from "./Testpage";
import ScrollToTop from "./ScrollToTop";
import aboutbing from "./images/aboutbing.jpg";
import { Helmet } from "react-helmet";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function sayHello() {
  alert("You clicked me!");
}

function App() {
  const soundSrc = georgebush;

  const callMySound = () => {
    const sound = new Howl({
      src: georgebush,
      html5: true,
    });
    sound.play();
  };

  return (
    <div className="background">
      <Helmet>
        <meta charSet="utf-8" />
        <title>OFFICIAL Bingus Fan Page</title>
      </Helmet>
      <div className="welcome-text-container">
        <h1 className="welcome-text">
          Welcome to the official <br /> bingus fan page!
        </h1>
      </div>
      <div className="row">
        <div className="yobing">
          <img src={yobing} alt="wait until the page loads" className="flex" />
        </div>
        <div className="yobing">
          <img
            onClick={() => callMySound(soundSrc)}
            src={img1}
            alt=""
            className="flex"
          />
        </div>
        <div className="yobing">
          <img
            src={yobing}
            alt="wait until the page loads"
            className="reverse"
          />
        </div>
      </div>
      <ScrollToTop>
        <Link to="/gallerypage" className="header">
          Click me to go to the official bingus gallery!
        </Link>

        <Link to="/otters" className="header">
          {" "}
          What is bingus' favorite animal?
        </Link>
      </ScrollToTop>
      <h1 className="header">Meet the man, the myth, the Bing:</h1>
      <div className="about-section">
        <img src={aboutbing} alt="" className="about-img"></img>

        <h2 className="about-txt">
          &nbsp;&nbsp;&nbsp;&nbsp;Hello! My name is Pollo, but you probably know
          me as bingus. I am a munchkin sphynx cat who enjoys lounging around
          and being a silly boy. Some of my favorite activities include knocking
          over glasses, chasing string, and making biscuits on the lap of this
          websites creator. As far as my ambitions go, my dream in life is to
          aid and abet in the overthrow of the U.S. government. My secondary
          goal in life is to release my Latin claymation love story "Lorem
          Ipsum" to Bollywood. Overall im just your average bing trying to find
          his way in life. If you're interested to hear more about me or to
          follow my progress with these goals feel free to follow my blog "Word
          on the bing." I hope you enjoy my site!
        </h2>
      </div>
      <div className="twitter">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="dailycatpics"
          options={{ height: 800 }}
        />
      </div>

      <div className="footer">
        website icon by Rohim:&nbsp;{" "}
        <a target="_blank" href="https://www.flaticon.com/authors/rohim">
          {" "}
          https://www.flaticon.com/authors/rohim
        </a>
      </div>
    </div>
  );
}

export default App;
