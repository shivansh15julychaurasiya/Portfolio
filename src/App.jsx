import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './component/pages/Home';
import About from './component/pages/About';
import Projects from './component/pages/Projects';
import Resume from './component/pages/Resume';
import Contact from './component/pages/Contact';
import Navbar from './component/layout/MyNavbar';
import Footer from './component/layout/Footer';
import WebDevelopment from './component/pages/services/WebDevelopement';
import MobileDev from './component/pages/services/MobileDev';
import Consulting from './component/pages/services/Consulting';
import Login from './component/auth/Login';

// ✅ New admin components
import UserList from './component/admin/UserList';
import Settings from './component/admin/Setting';

import AdminProjects from './component/admin/AdminProjets'; // To avoid name clash with normal Projects
import Dashboard from './component/admin/Dashboard';
import OurTeam from './component/pages/OurTeam';


function AppContent() {
  const location = useLocation();

  // Hide footer ONLY on the /login route
  const hideFooterOnRoutes = ['/login','/admin/dashboard','/admin/users','/admin/projects'];
  const shouldShowFooter = !hideFooterOnRoutes.includes(location.pathname);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services/web" element={<WebDevelopment />} />
        <Route path="/services/mobile" element={<MobileDev />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/team" element={<OurTeam />} />
        {/* Admin panel routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/projects" element={<AdminProjects />} />
        <Route path="/admin/setting" element={<Settings />} />

      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
