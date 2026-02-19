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
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';
export default function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}