import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './Border.css'

const Projects = () => {
  return (
    <div>
    <center>
    <MDBCard className="border_color" style={{backgroundColor: '#EEECE1'}}>
      <MDBCardBody >
      <MDBCardTitle style={{color: '#845123',fontSize: 48, fontFamily: 'Quicksand, sans-serif'}}>Projects</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
    </center>
    <MDBCard className="border_color" style={{backgroundColor: '#EEECE1'}}>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{marginLeft: 280, marginTop: 100, marginBottom: 100}}>
      <MDBCol >
        <MDBCard className='h-100' style={{ maxWidth: '15rem',minHeight: '20rem'}} >
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Medicinal Plant</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' style={{ maxWidth: '15rem',minHeight: '20rem' }}>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Wordle Clone</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' style={{ maxWidth: '15rem',minHeight: '20rem' }}>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>IsaacJones</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </MDBCard>
    </div>
  );
}
export default Projects