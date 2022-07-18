import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Tilt from "react-parallax-tilt";
import { CardActionArea } from '@mui/material';
import './Border.css'
import logo from './img/medicinalplant.jpg'
import logo1 from './img/wordleclone.jpg'
import logo2 from './img/isaacjones.jpg'

const Projects = () => {  
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
      <Tilt id="card" className="Tilt" options={{ max : 20 }} style={{ height: 325, width: 250 }}>
        <CardActionArea>
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
      <CardActionArea>
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
      <CardActionArea>
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
    </div>
  );
}
export default Projects