import React from 'react';
import Card from 'react-bootstrap/Card';


const cardBody = {
    backgroundColor: 'EEECE1',
    marginTop: 200,
    marginLeft: 200,
}
const heroCardTitle = {
    width: 'auto',
    fontSize: 48,
    fontFamily: 'Quicksand'
}
const heroCardName = {
    fontSize: 120,
    fontStyle: 'Bold',
    fontFamily: 'Quicksand'
}
const heroCardText = {
    fontSize: 32,
    fontFamily: 'Fira Code'
}
const Hero = () => {

        return(
    <Card>
      <Card.Body style={cardBody}>
        <Card.Title style={heroCardTitle}>Hello! My name is</Card.Title>
        <Card.Subtitle style={heroCardName}>Edwin Peralta</Card.Subtitle>
        <Card.Text style={heroCardText}>
          Full Stack Developer.
        </Card.Text>
      </Card.Body>
    </Card>
        );
}
export default Hero;