import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'
import NavContext from './context/NavContext.jsx'
import Navbar from './components/Navigation/Navbar.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavContext>
        <Stairs>
          <App />
        </Stairs>
      </NavContext>
    </BrowserRouter>
  </StrictMode>,
)
