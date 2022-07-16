import React from 'react';
import Card from 'react-bootstrap/Card';
import './Hero.css'
const card ={
  backgroundColor: '#EEECE1',
}
const cardBody = {
    marginTop: 200,
    marginLeft: 200,
}
const heroCardTitle = {
    width: 'auto',
    fontSize: '200%',
    fontFamily: 'Quicksand'
}
const heroCardName = {
    fontSize: '500%',
    fontStyle: 'Bold',
    fontFamily: 'Quicksand'
}
const heroCardText = {
    fontSize: '200%',
    fontFamily: 'Fira Code'
}
const Hero = () => {

        return(
    <Card className="border_color" style={card}>
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