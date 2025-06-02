import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./component/pages/Home";
import About from './component/pages/About';
import Projects from './component/pages/Projects';
import Resume from './component/pages/Resume';
import Contact from './component/pages/Contact';
import Navbar from "./component/layout/MyNavbar"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}
