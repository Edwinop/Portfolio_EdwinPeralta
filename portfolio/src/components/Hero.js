import React from 'react';

import ShuffleText from "react-shuffle-text";
import './Theme.css'
const card ={
  paddingBottom: 200,
  marginRight: '10vw',
  width: 'auto',
}
const cardBody = {
    marginTop: 200,
    marginLeft: '25vw'
}
const heroCardTitle = {
    width: 'auto',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 100,
    fontSize: '50px'
}
const word={
  color: '#FF8412'
}
const Hero = () => {

        return(
    <div className="border_color" style={card}>
      <div style={cardBody}>
        <div style={heroCardTitle}>Im Edwin, a <span style={word}><ShuffleText content="Front Developer"/></span><br></br>from NY who loves playing video games.</div>
      </div>
    </div>
        );
}
export default Hero;