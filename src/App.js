import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'

import "./server"


function App() {




  return (
    <BrowserRouter>
    <header>
          <Link className="logo" to="/">#Vanlife</Link>
        <nav>
          <div className="nav--links">
            <Link className="nav--link" to="/about">About</Link>
            <Link className="nav--link" to="/vans">Vans</Link>
          </div>
      </nav>
    </header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}




export default App;
