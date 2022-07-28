import React from 'react';
import Button from 'react-bootstrap/Button';


  const cardBody = {
      marginTop: 20,
      marginLeft: '35vw',
  }
  const heroCardTitle = {
      fontSize: '32px',
      fontWeight: 400,
      marginBottom: 30
  }
  const heroCardName = {
      fontSize: '24px',
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
    borderRadius: 8
  }

  const About = () => {
    return(
      <section id='aboutContainer'>
      <div>
        <div className="border_color">
          <div style={cardBody}>
            <div style={heroCardTitle}>Currently looking for an Entry Level <br></br>Web Developer Position in NY</div>
            <div style={heroCardName}>Front-End</div>
            <div style={heroCardText}>
            Java, Javascript, React, HTML, CSS, Bootstrap
            </div>
            <div style={heroCardName}>Back-End</div>
            <div style={heroCardText}>
            NodeJS, Express, PHP, MySQL, MongoDB            
            </div>
            <div style={heroCardName}>Tools</div>
            <div style={heroCardText}>
            phpMyAdmin, Git, npm, Github, Figma, VSCode
            </div>
            <Button size="sm" style={button}>MY RESUME</Button>
          </div>
        </div>
        </div>
        </section>
            );
    }
export default About
