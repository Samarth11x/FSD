import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0', textAlign: 'center' }}>
      {/* We use Link instead of <a href> to prevent page refresh */}
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}
