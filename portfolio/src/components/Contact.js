import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';

const button ={
    backgroundColor: '#845123',
    borderColor: '#845123',
    fontWeight: 100,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 8
  }

const Contact = () => {
  return (
    <center>
    <MDBCard className="border_color" style={{backgroundColor: '#EEECE1'}}>
        <MDBCardBody>
        <MDBCardTitle style={{color: '#845123',fontSize: 48, fontFamily: 'Quicksand, sans-serif'}}>CONTACT</MDBCardTitle>
        <Button size="sm" style={button}>Email Me</Button>
        <p>edwperalta3@gmail.com</p>
        </MDBCardBody>
    </MDBCard>
    </center>
  )
}

export default Contact