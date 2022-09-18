import './App.css';
import img1 from './images/mainpic.jpg';
import yobing from './gifs/yo-bingus.gif';
import georgebush from './sounds/georgebush.mp3';
import {Howl, Howler} from "howler";
import { Link, Navigate } from "react-router-dom";
import galleryPage from './Gallerypage';
import testpage from './Testpage';
import ScrollToTop from "./ScrollToTop";
import aboutbing from "./images/aboutbing.jpg"




function sayHello() {
  alert('You clicked me!');
}

function App() {
  const soundSrc = georgebush;

  const callMySound = () => {
    const sound = new Howl({
      src: georgebush,
      html5: true,
    });
    sound.play()
  }

  return (
    <div className='background'>
      <div className='home-container'>
        
        <div className='welcome-text-container'>
          <div>
            <h1 className='welcome-text'>Welcome to the official bingus fan page!</h1>
          </div>
        </div>
          
        
        <div className='bingus-container'>
          <div className='bingus'>
            <img src={yobing} alt="wait until the page loads" className='flex'/>
          </div>

          <div className='bingus'>
            <img onClick={() => callMySound(soundSrc)} className ="flex"src={img1} alt=""/> 
          </div>

          <div className='bingus'>
            <img src={yobing} alt="wait until the page loads" className='flex reverse'/>
          </div>
        </div>
        <ScrollToTop>
        <div>
        <Link to="/gallerypage" className='header-text'>Click me to go to the official bingus gallery!</Link>
        </div>
        </ScrollToTop>

          <h1 className='about-bing-header'>Meet the man, the myth, the Bing:</h1>
          <div className='about-container'>
            <img src={aboutbing} alt="" className='aboutimg'></img>
            <div className='about-text-container'>
            <h2 className='about-txt'>&nbsp;&nbsp;&nbsp;&nbsp;Hello! My name is Pollo, but you probably know me as bingus. I am a munchkin sphynx cat who enjoys lounging
             around and being a silly boy. Some of my favorite activities include knocking over glasses, chasing string, and making biscuits on the lap of this websites creator.
              As far as my ambitions go, my dream in life is to aid and abet in the overthrow of the U.S. government. My secondary goal in life is to release my Latin claymation love story "Lorem Ipsum" to Bollywood.
            Overall im just your average bing trying to find his way in life. If you're interested to hear more about me or to follow my progress with these goals feel free to follow my 
            blog "Word on the bing." I hope you enjoy my site! Bush did 9/11.  
            </h2>
            </div>
          </div>

      </div>
    </div>    
  );
}

export default App;
