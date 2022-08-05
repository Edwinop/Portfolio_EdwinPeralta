import React from 'react';
import Button from 'react-bootstrap/Button';


  const cardBody = {
      marginTop: 20,
  }
  const heroCardTitle = {
      fontSize: '30px',
      fontWeight: 400,
      marginBottom: 30
  }
  const heroCardName = {
      fontSize: '25px',
      fontStyle: 'Bold',
      fontWeight: 400
  }
  const heroCardText = {
      fontSize: '20px',
      fontWeight: 10
  }
  const button ={
    backgroundColor: '#FF8412',
    borderColor: '#845123',
    fontWeight: 50,
    marginTop: 10,
    borderRadius: 8,
    fontFamily: 'Quicksand, sans-serif'
  }

  const About = () => {
    return(
      <center>
      <section id='aboutContainer'  style={{fontFamily: 'Quicksand, sans-serif'}}>
        <div className="border_color">
          <div style={cardBody}>
            <div style={heroCardTitle}>Currently looking for an Entry Level <br></br>Web Developer Position in NY</div>
            <div style={heroCardName}>Front-End</div>
            <div style={heroCardText}>
            Javascript, React, Angular, HTML, CSS, Bootstrap
            </div>
            <div style={heroCardName}>Back-End</div>
            <div style={heroCardText}>
            Java, NodeJS, Express, PHP, MySQL, MongoDB            
            </div>
            <div style={heroCardName}>Tools</div>
            <div style={heroCardText}>
            phpMyAdmin, Git, npm, Github, Figma, VSCode
            </div>
            <Button size="sm" style={button}>MY RESUME</Button>
          </div>
        </div>
        </section>
        </center>
            );
    }
export default About
