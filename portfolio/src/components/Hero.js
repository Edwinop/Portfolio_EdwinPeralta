import React from 'react';
import Card from 'react-bootstrap/Card';
import './Hero.css'

const card ={
  backgroundColor: '#EEECE1',
  paddingBottom: 200,
  width: 'auto'
}
const cardBody = {
    marginTop: 200,
    marginLeft: 200,
    width: 'auto'
}
const heroCardTitle = {
    width: 'auto',
    fontSize: '200%',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 100,
    marginLeft: 250,
    fontSize: '300%'
}
const word={
  color: '#845123'
}
const Hero = () => {

        return(
    <Card className="border_color" style={card}>
      <Card.Body style={cardBody}>
        <Card.Title style={heroCardTitle}>Im Edwin, a <span style={word}>full stack developer</span><br></br>from NY who loves playing video games.</Card.Title>
      </Card.Body>
    </Card>
        );
}
export default Hero;