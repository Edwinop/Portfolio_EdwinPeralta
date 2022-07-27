import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle} from 'mdb-react-ui-kit';
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
    <MDBCard className="border_color" style={{backgroundColor: '#D0D0DC'}}>
        <MDBCardBody>
        <MDBCardTitle style={{fontSize: 48, fontFamily: 'Quicksand, sans-serif'}}>CONTACT</MDBCardTitle>
        <div>
        <Button size="sm" style={button}>Email Me</Button>
        </div>
        <p>edwperalta3@gmail.com</p>
        </MDBCardBody>
    </MDBCard>
    </center>
    </div>
    </section>
  )
}

export default Contact
