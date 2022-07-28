import React from 'react';

import ShuffleText from "react-shuffle-text";
import './Theme.css'
const card ={
  paddingBottom: 200,
  width: 'auto',
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
    <div className="border_color" style={card}>
      <div style={cardBody}>
        <div style={heroCardTitle}>Im Edwin, a <span style={word}><ShuffleText content="full stack developer."/></span><br></br>from NY who loves playing video games.</div>
      </div>
    </div>
        );
}
export default Hero;