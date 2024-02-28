import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/home';
import Yahaha from './components/Yahaha';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to="/home/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red/">Red</Link>
        <Link to="Yahaha">Yahaha</Link>
      </div>
      <div id="main-section">
        <Routes>
          
          <Route path="/blue" element={<Blue />}></Route>
          <Route path="/red/" element={<Red />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/yahaha" element={<Yahaha />}></Route>
      
        </Routes>
        </div>

        <div id="footer">
        <Link to="/home/">Home</Link><br/>
        <Link to="/blue">Blue</Link><br/>
        <Link to="/red/">Red</Link><br/>
        <Link to="Yahaha">Yahaha</Link><br/>
        </div>
    </div>
    </>
  )
}

export default App
