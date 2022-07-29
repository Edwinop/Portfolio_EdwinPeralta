import React, {useState} from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Tilt from "react-parallax-tilt";
import { CardActionArea } from '@mui/material';
import './Theme.css'
import logo from './img/medicinalplant.jpg'
import logo1 from './img/wordleclone.jpg'
import logo2 from './img/isaacjones.jpg'

const Projects = () => {

  const [slides] = useState([
    {
        source: 'medicinalPlantPicture',
        title: "Medicinal Plant Knowledge Base",
        desc: "Medicinal Plant is a database that allows users to search, ask questions, and challenge themselves to learn more about medicinal plants located in Korea, China, and Vietnam."
    },
    {
        source: 'isaacJoneGame',
        title: "IsaacJones",
        desc: "IsaacJones is a 3D platform math game maze built with Unreal Engine 4, to teach kids elementary math problem skills. The user must go through obstacles by answering math problems to collect trophies to escape the maze.This was made with one other student in our Software Engineering class."
    },
    {
        source: 'wordleCloneGame',
        title: "Wordle Clone",
        desc: "wordle"
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
      <MDBCardTitle style={{fontSize: 48, fontFamily: 'Quicksand, sans-serif',marginTop:60}}>Projects</MDBCardTitle>
      </MDBCardBody>
    </div>
    </center>
    
    <div className="border_color">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{marginLeft: '14vw', marginBottom: 40}}>
      <MDBCol >
      <Tilt className="Tilt" options={{ max : 20 }} style={{ height: 325, width: 250 }}>
        <CardActionArea onClick={slideCardLeft}>
        <MDBCard className='h-100 border_color' style={{ maxWidth: '15rem',minHeight: '15rem', backgroundColor: '#FF8412'}} >
          <MDBCardImage
            src={logo}
            alt='...'
            position='top'
            height= '250rem'
            
          />
          <MDBCardBody>
          <center>
            <MDBCardTitle style={{fontWeight: '400'}}>Medicinal Plant</MDBCardTitle>
            </center>
          </MDBCardBody>
        </MDBCard>
        </CardActionArea>
        </Tilt>
      </MDBCol>
      <MDBCol>
      <Tilt className="Tilt" options={{ max : 20 }} style={{ height: 325, width: 250 }}>
      <CardActionArea onClick={slideCardMiddle}>
        <MDBCard className='h-100 border_color' style={{ maxWidth: '15rem',minHeight: '15rem',backgroundColor: '#FF8412'}}>
          <MDBCardImage
            src={logo1}
            alt='...'
            position='top'
            height= '250rem'
          />
          <MDBCardBody>
          <center>
            <MDBCardTitle style={{fontWeight: '400'}}>Wordle Clone</MDBCardTitle>
            </center>
          </MDBCardBody>
        </MDBCard>
        </CardActionArea>
        </Tilt>
      </MDBCol>
      <MDBCol>
      <Tilt className="Tilt" options={{ max : 20 }} style={{ height: 325, width: 250 }}>
      <CardActionArea onClick={slideCardRight}>
        <MDBCard className='h-100 border_color' style={{ maxWidth: '15rem',minHeight: '15rem',backgroundColor: '#FF8412'}}>
          <MDBCardImage
            src={logo2}
            alt='...'
            position='top'
            height= '250rem'
          />
          <MDBCardBody>
            <center>
            <MDBCardTitle style={{fontWeight: '400'}}>IsaacJones</MDBCardTitle>
            </center>
          </MDBCardBody>
        </MDBCard>
        </CardActionArea>
        </Tilt>
      </MDBCol>   
    </MDBRow>
    </div>
    <center>
    <div className='h-100 border_color' style={{ maxWidth: '100%',minHeight: '32rem'}}>
    <div className="carousel-block">
            <div className="flex-container">
                <div id="slider">
                    <div className="slide">
                        <img src={currentPicture} alt={currentSlide.title} title={currentSlide.title} className="slider-img" width = '700rem' height= '400rem'/>
                        <p style={{fontWeight: '400'}}>{currentSlide.title}</p>
                        <p style={{fontSize: '100%',fontFamily: 'Quicksand, sans-serif',fontWeight: '400'}}>{currentSlide.desc}</p>
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
