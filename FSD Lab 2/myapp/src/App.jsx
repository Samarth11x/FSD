import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/home'
import About from './components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
