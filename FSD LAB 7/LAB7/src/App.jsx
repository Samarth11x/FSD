import { useState } from 'react'
import 'aframe'
import './App.css'

function ARScene() {
  return (
    <a-scene
      xr-mode="ar"
      renderer="colorManagement: true"
      embedded
      style={{ width: '100%', height: '80vh' }}
    >
      <a-box
        id="box"
        position="0 0 -0.8"
        color="#4CC3D9"
        scale="0.3 0.3 0.3"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 4000; easing: linear"
      ></a-box>
      <a-entity camera look-controls></a-entity>
    </a-scene>
  )
}

export default function App() {
  const [clr, setClr] = useState('#4CC3D9')
  const toggle = () => setClr((c) => (c === '#4CC3D9' ? '#EF2D5E' : '#4CC3D9'))

  if (document.querySelector('#box')) {
    document.querySelector('#box').setAttribute('color', clr)
  }

  return (
    <div className="app">
      <h1>Lab 7: A-Frame AR in React + Vite</h1>
      <button onClick={toggle}>Toggle color</button>
      <ARScene />
    </div>
  )
}
