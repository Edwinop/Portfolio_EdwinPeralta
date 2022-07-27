import React from 'react';
import Card from 'react-bootstrap/Card';
import ShuffleText from "react-shuffle-text";
import './Theme.css'
const card ={
  backgroundColor: '#333341',
  paddingBottom: 200,
  width: 'auto',
  color: 'white'
}
const cardBody = {
    marginTop: 200,
    marginLeft: '20vw'
}
const heroCardTitle = {
    width: 'auto',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 100,
    fontSize: '3vw'
}
const word={
  color: '#FF8412'
}
const Hero = () => {

        return(
    <Card className="border_color" style={card}>
      <Card.Body style={cardBody}>
        <Card.Title style={heroCardTitle}>Im Edwin, a <span style={word}><ShuffleText content="full stack developer."/></span><br></br>from NY who loves playing video games.</Card.Title>
      </Card.Body>
    </Card>
        );
}
export default Hero;