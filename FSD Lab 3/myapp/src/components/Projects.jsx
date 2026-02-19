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


export default function Projects() {
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
    },
    {
      id: 4,
      title: "Weather Dashboard",
      desc: "Visualizing real-time weather data with dynamic charts and geolocation support.",
      tech: ["JavaScript", "API"],
      img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      desc: "Visualizing real-time weather data with dynamic charts and geolocation support.",
      tech: ["JavaScript", "API"],
      img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 6,
      title: "Weather Dashboard",
      desc: "Visualizing real-time weather data with dynamic charts and geolocation support.",
      tech: ["JavaScript", "API"],
      img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 7,
      title: "Weather Dashboard",
      desc: "Visualizing real-time weather data with dynamic charts and geolocation support.",
      tech: ["JavaScript", "API"],
      img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 8,
      title: "Weather Dashboard",
      desc: "Visualizing real-time weather data with dynamic charts and geolocation support.",
      tech: ["JavaScript", "API"],
      img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 9,
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
  )
}