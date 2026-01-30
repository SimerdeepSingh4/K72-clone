import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import Loader from './components/common/Loader'
import NavContext from './context/NavContext'
import Contact from './pages/Contact'
import Blogue from './pages/Blogue'

const App = () => {
  return (
    <NavContext>
      <div className='text-white selection:bg-[#D3FD50] selection:text-black overflow-x-hidden'>
        <Navbar />
        <Loader />
        <FullScreenNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agence' element={<Agence />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogue' element={<Blogue />} />
        </Routes>
      </div>
    </NavContext>
  )
}

export default App
