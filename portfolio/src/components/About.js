import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const card ={
    backgroundColor: '#D0D0DC',
  }
  const cardBody = {
      marginTop: 40,
      marginLeft: 600,
  }
  const heroCardTitle = {
      fontSize: '200%',
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: 600,
      marginBottom: 50
  }
  const heroCardName = {
      fontSize: '150%',
      fontStyle: 'Bold',
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: 600
  }
  const heroCardText = {
      fontSize: '100%',
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: 400
  }
  const button ={
    backgroundColor: '#FF8412',
    borderColor: '#845123',
    fontWeight: 100,
    marginTop: 10,
    borderRadius: 8
  }

  const About = () => {
    return(
      <section id='aboutContainer'>
      <div>
        <Card className="border_color" style={card} >
          <Card.Body style={cardBody}>
            <Card.Title style={heroCardTitle}>Currently looking for an Entry Level <br></br>Web Developer Position in NY</Card.Title>
            <Card.Subtitle style={heroCardName}>Front-End</Card.Subtitle>
            <Card.Text style={heroCardText}>
            Java, Javascript, React, HTML, CSS, Bootstrap
            </Card.Text>
            <Card.Subtitle style={heroCardName}>Back-End</Card.Subtitle>
            <Card.Text style={heroCardText}>
            NodeJS, Express, PHP, MySQL, MongoDB            
            </Card.Text>
            <Card.Subtitle style={heroCardName}>Tools</Card.Subtitle>
            <Card.Text style={heroCardText}>
            phpMyAdmin, Git, npm, Github, Figma, VSCode
            </Card.Text>
            <Button size="sm" style={button}>MY RESUME</Button>
          </Card.Body>
        </Card>
        </div>
        </section>
            );
    }
export default About
