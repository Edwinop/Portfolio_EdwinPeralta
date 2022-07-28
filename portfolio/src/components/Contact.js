import React from 'react'
import {MDBCardBody, MDBCardTitle} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';

const button ={
    backgroundColor: '#FF8412',
    borderColor: '#845123',
    fontWeight: 100,
    marginBottom: 30,
    borderRadius: 8
  }

  const Contact = () => {
  return (
    <section id="contacts">
    <div>
    <center>
    <div className="border_color">
        <MDBCardBody>
        <MDBCardTitle style={{fontSize: 48, fontFamily: 'Quicksand, sans-serif'}}>CONTACT</MDBCardTitle>
        <div>
        <Button size="sm" style={button}>Email Me</Button>
        </div>
        <p>edwperalta3@gmail.com</p>
        </MDBCardBody>
    </div>
    </center>
    </div>
    </section>
  )
}

export default Contact
