import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'


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
      </Routes>
    </BrowserRouter>
  )
}




export default App;
