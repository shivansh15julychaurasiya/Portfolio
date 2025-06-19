import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./component/pages/Home";
import About from './component/pages/About';
import Projects from './component/pages/Projects';
import Resume from './component/pages/Resume';
import Contact from './component/pages/Contact';
import Navbar from "./component/layout/MyNavbar"
import Footer from './component/layout/Footer';
import WebDevelopment from './component/pages/services/WebDevelopement';
import MobileDev from './component/pages/services/MobileDev';
import Consulting from './component/pages/services/Consulting';
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
        <Route path="/services/web" element={<WebDevelopment />} />
        
<       Route path="/services/mobile" element={<MobileDev />} />
<Route path="/services/consulting" element={<Consulting />} />
      </Routes>
      <Footer/>
    </Router>
  )
}
