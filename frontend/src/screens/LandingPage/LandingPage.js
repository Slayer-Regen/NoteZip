import React from 'react'
import './LandingPage.css'
import { Container,Row,Button  } from "react-bootstrap";
const LandingPage = () => {
  return (
    <div className="main">
        <Container>
            <Row>
            <div className="intro-text">
             <div>
              
              <p className="subtitle">One Safe place for all your notes.</p>
             </div>
             <div className="buttonContainer">
             
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              
              
                <Button variant="outline-primary" size="lg" className="landingbutton">
                  Signup
                </Button>
             
             </div>
          </div>
                

            </Row>
        </Container>
        </div>
  )
}

export default LandingPage