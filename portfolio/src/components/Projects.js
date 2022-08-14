import React, {useState} from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Tilt from "react-parallax-tilt";
import { CardActionArea } from '@mui/material';
import './Theme.css'
import logo from './img/travel.jpg'
import logo1 from './img/weather.jpg'
import logo2 from './img/notes.jpg'

const Projects = () => {

  const [slides] = useState([
    {
        source: 'traveler',
        title: "Travel Advisor",
        desc: "Travelor helps people find restaurants, hotels, and attractions from any area they choose. The projects includes React, Material UI, Google API's, and Rapid API",
        link: "https://cs.newpaltz.edu/p/s22-01/v7/home.php"
    },
    {
        source: 'weatherapp',
        title: "Weather Project",
        desc: "Developed a project which can tell you the weather in certain cities, it consist of 2 widgets, one for current weather and a 7- day forecast The webpage is built with ReactJS, HTML ,CSS, and tools such as webpack and npmGathered city data from the RapidAPI, and weather data from the OpenWeather API",
        link: "https://github.com/Edwinop/weather-app-ep"
    },
    {
        source: 'notesapp',
        title: "Notes Project",
        desc: "A project thats lets you create notes to stay organized! It uses React and tools like webpack and tools. It consist of a search bar that lets you query through your notes and allows you to color your notes to keep organized!",
        link: "https://github.com/Edwinop/Notes-ep"
    }
]);

// SET CAROUSEL DEFAULTS
let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
let currentSlide = slides[currentPosition]; // variable index value we can reference later
let currentPicture;
const slideCardLeft = () => {
    setCurrentPosition(0);
    currentSlide = slides[currentPosition];
}
const slideCardMiddle = () => {
    setCurrentPosition(1);
    currentSlide = slides[currentPosition];
}
const slideCardRight = () => {
  setCurrentPosition(2);
  currentSlide = slides[currentPosition];
}
currentPicture = require('./img/'+currentSlide.source+'.jpg');
  return (
    <section id="projects">
    <div>
    <center>
    <div className="border_color">
      <MDBCardBody >
      <MDBCardTitle className='container-title'  style={{fontFamily: 'Quicksand, sans-serif', fontSize:'40px'}}>Projects</MDBCardTitle>
      </MDBCardBody>
    </div>
    </center>
    <center>
    <div className="border_color">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{ marginBottom: 40,fontFamily: 'Quicksand, sans-serif'}}>
      <MDBCol >
      <Tilt className="Tilt" options={{ max : 20 }} style={{ height: 325, width: 250 }}>
        <CardActionArea onClick={slideCardLeft}>
        <MDBCard className='h-100 border_color image_position' style={{ maxWidth: '15rem',minHeight: '20rem', borderRadius: 8, backgroundImage: `url(${logo})` }} >
          <center>
          <h1 className='card-title'>Traveler</h1>
          </center>
        </MDBCard>
        </CardActionArea>
        </Tilt>
      </MDBCol>
      <MDBCol>
      <Tilt className="Tilt" options={{ max : 20 }} style={{ height: 325, width: 250 }}>
      <CardActionArea onClick={slideCardMiddle}>
        <MDBCard className='h-100 border_color image_position' style={{ maxWidth: '15rem',minHeight: '20rem', borderRadius: 8,backgroundImage: `url(${logo1})` }}>
          <center>
            <h1 className='card-title'>Weather<br></br>App</h1>
          </center>
        </MDBCard>
        </CardActionArea>
        </Tilt>
      </MDBCol>
      <MDBCol>
      <Tilt className="Tilt" options={{ max : 20 }} style={{ height: 325, width: 250 }}>
      <CardActionArea onClick={slideCardRight}>
        <MDBCard className='h-100 border_color image_position' style={{ maxWidth: '15rem',minHeight: '20rem', borderRadius: 8,backgroundImage: `url(${logo2})` }}>
        <center>
            <h1 className='card-title'>Notes<br></br>App</h1>
          </center>
        </MDBCard>
        </CardActionArea>
        </Tilt>
      </MDBCol>   
    </MDBRow>
    </div>
    </center>
    <center>
    <div className='h-100 border_color' style={{ maxWidth: '100%',minHeight: '32rem'}}>
    <div className="carousel-block">
            <div className="flex-container">
                <div id="slider">
                    <div className="slide">
                        <img src={currentPicture} alt={currentSlide.title} title={currentSlide.title} className="slider-img" width = '500rem' height= '400rem'/>
                        <p style={{fontWeight: '400',fontFamily: 'Quicksand, sans-serif'}}>{currentSlide.title}</p>
                        <p style={{fontSize: '100%',fontFamily: 'Quicksand, sans-serif',fontWeight: '400',width: '30vw'}}>{currentSlide.desc}</p>
                        <a href={currentSlide.link}><button className='link-button'  style={{fontFamily: 'Quicksand, sans-serif'}} >Link</button></a>
                    </div>

                </div>
            </div>
      </div>
      </div>
      </center>
    </div>
    </section>
  );
}
export default Projects
