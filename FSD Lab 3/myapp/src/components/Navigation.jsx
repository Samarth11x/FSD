import React from 'react'
import { 
  Navbar, 
  Nav, 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Badge, 
  Form 
} from 'react-bootstrap';


export default function Hero() {
  return (
     <div id="home" className="bg-white py-5 mb-5 border-bottom">
    <Container className="py-5 text-center">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Badge bg="primary" className="mb-3 px-3 py-2">AVAILABLE FOR HIRE</Badge>
          <h1 className="display-4 fw-bold mb-3 text-dark">Creative Developer Building Scalable Apps</h1>
          <p className="lead text-muted mb-4">
            Specializing in modern JavaScript frameworks like React and Vite to create 
            seamless user experiences and robust backend integrations.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="primary" size="lg" className="px-4 fw-bold">View Projects</Button>
            <Button variant="outline-dark" size="lg" className="px-4">Contact Me</Button>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}