import React from 'react'
import { MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';

const Contact = () => {
  return (
    <section id="contacts">
      <center>
        <div className="border_color">
          <MDBCardBody>
            <MDBCardTitle className='contact-title' style={{fontFamily: 'Quicksand, sans-serif'}}>CONTACT</MDBCardTitle>
            <p  style={{fontFamily: 'Quicksand, sans-serif'}}>edwperalta3@gmail.com</p>
          </MDBCardBody>
        </div>
      </center>
    </section>
  )
}

export default Contact
