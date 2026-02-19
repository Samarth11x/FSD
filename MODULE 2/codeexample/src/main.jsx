import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Propexample from './Propexample.jsx'
import Useeffect from './Useeffect.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Useeffect />
  </StrictMode>,
)