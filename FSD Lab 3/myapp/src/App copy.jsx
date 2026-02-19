import React, { useEffect } from 'react';
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

/**
 * Navigation Component
 * Simplified to a permanent horizontal layout for maximum reliability.
 */
const Navigation = () => (
  <Navbar bg="dark" variant="dark" sticky="top" className="shadow-sm py-3">
    <Container className="d-flex justify-content-between align-items-center">
      <Navbar.Brand href="#home" className="fw-bold fs-4 m-0">
        <span className="text-primary">DEV</span>PORTFOLIO
      </Navbar.Brand>
      <Nav className="flex-row gap-3 gap-md-4">
        <Nav.Link href="#home" className="text-white opacity-75 px-1 px-sm-2">Home</Nav.Link>
        <Nav.Link href="#projects" className="text-white opacity-75 px-1 px-sm-2">Projects</Nav.Link>
        <Nav.Link href="#contact" className="text-white opacity-75 px-1 px-sm-2">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

/**
 * Hero Section Component
 */
const Hero = () => (
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
);

/**
 * Projects Section Component
 */
const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      desc: "A full-featured store with payment gateway integration and real-time inventory.",
      tech: ["React", "Bootstrap"],
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      title: "Task Management Tool",
      desc: "A productivity app featuring drag-and-drop tasks and team collaboration suites.",
      tech: ["Vite", "Firebase"],
      img: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      desc: "Visualizing real-time weather data with dynamic charts and geolocation support.",
      tech: ["JavaScript", "API"],
      img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <Container id="projects" className="py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold fs-1">My Recent Work</h2>
        <p className="text-muted">A showcase of technical skills and creative solutions.</p>
      </div>
      <Row>
        {projectData.map((project) => (
          <Col key={project.id} lg={4} md={6} className="mb-4">
            <Card className="h-100 border-0 shadow-sm project-card">
              <Card.Img variant="top" src={project.img} alt={project.title} style={{height: '220px', objectFit: 'cover'}} />
              <Card.Body className="d-flex flex-column p-4">
                <div className="mb-3">
                  {project.tech.map(t => <Badge key={t} bg="light" text="dark" className="me-1 border">{t}</Badge>)}
                </div>
                <Card.Title className="fw-bold fs-4">{project.title}</Card.Title>
                <Card.Text className="text-muted small">
                  {project.desc}
                </Card.Text>
                <Button variant="link" className="mt-auto p-0 text-decoration-none fw-bold text-primary">
                  Learn More →
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

/**
 * Contact Form Component
 */
const Contact = () => (
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
);

/**
 * Main Application Component
 */
export default function App() {
  // Inject custom styles for hover effects and smooth scrolling
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      html { scroll-behavior: smooth; }
      body { background-color: #f8f9fa; }
      .project-card { 
        transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease; 
      }
      .project-card:hover { 
        transform: translateY(-8px); 
        box-shadow: 0 1rem 3rem rgba(0,0,0,.12)!important; 
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* CDN for Bootstrap CSS */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      />
      
      <Navigation />
      
      <main className="flex-grow-1">
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-dark text-white py-4 mt-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <span className="fw-bold text-primary">DEVPORTFOLIO</span> &copy; 2026
            </Col>
            <Col md={6} className="text-center text-md-end mt-2 mt-md-0">
              <small className="text-muted">Built with React & Bootstrap</small>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}