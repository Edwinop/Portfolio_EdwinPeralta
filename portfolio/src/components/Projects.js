import React, {useState} from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Tilt from "react-parallax-tilt";
import { CardActionArea } from '@mui/material';
import './Border.css'
import logo from './img/medicinalplant.jpg'
import logo1 from './img/wordleclone.jpg'
import logo2 from './img/isaacjones.jpg'
import logo3 from './img/medicinalplant.jpg'
import logo4 from './img/isaacJoneGame.PNG'
import logo5 from './img/wordleCloneGame.jpg'
const Projects = () => {

  const [slides] = useState([
    {
        source: {logo3},
        title: "Medicinal Plant",
        desc: "Medicinal Plant is a database that allows users to search, ask questions, and challenge themselves to learn more about medicinal plants located in Korea, China, and Vietnam."
    },
    {
        source: {logo4},
        title: "IsaacJones",
        desc: "IsaacJones is a 3D platform math game maze built with Unreal Engine 4, to teach kids elementary math problem skills. The user must go through obstacles by answering math problems to collect trophies to escape the maze.This was made with one other student in our Software Engineering class."
    },
    {
        source: {logo5},
        title: "Wordle Clone",
        desc: "wordle"
    }
]);

// SET CAROUSEL DEFAULTS
let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
let currentSlide = slides[currentPosition]; // variable index value we can reference later

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
  return (
    <div>
    <center>
    <MDBCard className="border_color" style={{backgroundColor: '#EEECE1'}}>
      <MDBCardBody >
      <MDBCardTitle style={{color: '#845123',fontSize: 48, fontFamily: 'Quicksand, sans-serif',marginTop:50}}>Projects</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
    </center>
    
    <MDBCard className="border_color" style={{backgroundColor: '#EEECE1'}}>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{marginLeft: 280, marginTop: 100, marginBottom: 100}}>
      <MDBCol >
      <Tilt className="Tilt" options={{ max : 20 }} style={{ height: 325, width: 250 }}>
        <CardActionArea onClick={slideCardLeft}>
        <MDBCard className='h-100 border_color' style={{ maxWidth: '15rem',minHeight: '15rem', backgroundColor: '#D9D3B6'}} >
          <MDBCardImage
            src={logo}
            alt='...'
            position='top'
            height= '250rem'
            
          />
          <MDBCardBody>
          <center>
            <MDBCardTitle style={{color: '#845123', fontWeight: '400'}}>Medicinal Plant</MDBCardTitle>
            </center>
          </MDBCardBody>
        </MDBCard>
        </CardActionArea>
        </Tilt>
      </MDBCol>
      <MDBCol>
      <Tilt className="Tilt" options={{ max : 20 }} style={{ height: 325, width: 250 }}>
      <CardActionArea onClick={slideCardMiddle}>
        <MDBCard className='h-100 border_color' style={{ maxWidth: '15rem',minHeight: '15rem',backgroundColor: '#D9D3B6'}}>
          <MDBCardImage
            src={logo1}
            alt='...'
            position='top'
            height= '250rem'
          />
          <MDBCardBody>
          <center>
            <MDBCardTitle style={{color: '#845123', fontWeight: '400'}}>Wordle Clone</MDBCardTitle>
            </center>
          </MDBCardBody>
        </MDBCard>
        </CardActionArea>
        </Tilt>
      </MDBCol>
      <MDBCol>
      <Tilt className="Tilt" options={{ max : 20 }} style={{ height: 325, width: 250 }}>
      <CardActionArea onClick={slideCardRight}>
        <MDBCard className='h-100 border_color' style={{ maxWidth: '15rem',minHeight: '15rem',backgroundColor: '#D9D3B6'}}>
          <MDBCardImage
            src={logo2}
            alt='...'
            position='top'
            height= '250rem'
          />
          <MDBCardBody>
            <center>
            <MDBCardTitle style={{color: '#845123', fontWeight: '400'}}>IsaacJones</MDBCardTitle>
            </center>
          </MDBCardBody>
        </MDBCard>
        </CardActionArea>
        </Tilt>
      </MDBCol>   
    </MDBRow>
    </MDBCard>

    <div className="carousel-block">
            <div className="flex-container">
                <div id="slider">
                    <div className="slide">
                        <img src={currentSlide.source} alt={currentSlide.title} title={currentSlide.title} className="slider-img" />
                        <p>{currentSlide.desc}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}
export default Projects
