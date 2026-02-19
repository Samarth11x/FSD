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


export default function Contact() {
  return (
    <Container id="contact" className="py-5">
    <Row className="justify-content-center">
      <Col lg={6} md={8}>
        <div className="bg-white p-4 p-md-5 shadow-sm rounded-4 border">
          <h2 className="fw-bold mb-2 text-center">Get In Touch</h2>
          <p className="text-center text-muted mb-4">Have a project in mind? Let's talk.</p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Email Address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Your Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="How can I help you?" />
            </Form.Group>
            <Button variant="primary" type="button" className="w-100 py-2 fw-bold">Send Message</Button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
  )
}