import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';
// import './App.css'; // Make sure this is imported

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => setDarkMode(!darkMode);

  const projects = [
    {
      title: 'Banking System',
      desc: 'RESTful API for online banking using Spring Boot, JWT, and MySQL.',
    },
    {
      title: 'PDF Document Manager',
      desc: 'Upload, preview, and search documents using React, Spring Boot, and PDF.js.',
    },
    {
      title: 'User Management Portal',
      desc: 'Role-based user management app with Spring Security and React.',
    },
    {
      title: 'E-Commerce Backend',
      desc: 'Product/category REST API with JWT auth, built with Spring Boot.',
    },
  ];

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'} style={{ marginTop: '75px' }}>
      {/* Hero Section */}
      <section className={`py-5 text-center ${darkMode ? 'section-dark' : 'bg-light text-dark'}`}>
        <Container>
          <h1 className="display-4">Hi, I'm Vijay Chaurasiya</h1>
          <p className="lead">Java Full Stack Developer</p>
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <Button color="primary" className="rounded-pill" tag={Link} to="#projects">
              View Projects
            </Button>
            <Button
              className={`rounded-pill ${darkMode ? 'btn-dark-mode' : 'btn-outline-dark'}`}
              href="/resume.pdf"
              target="_blank"
            >
              Download Resume
            </Button>
            <Button
              color={darkMode ? 'light' : 'dark'}
              className="rounded-pill"
              onClick={toggleMode}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </div>
        </Container>
      </section>

      {/* Projects Section */}
      <section className={`py-5 ${darkMode ? 'section-dark' : 'bg-light text-dark'}`} id="projects">
        <Container>
          <h2 className="text-center mb-5">Projects</h2>
          <Row>
            {projects.map((project, index) => (
              <Col md="6" className="mb-4" key={index}>
                <Card className={darkMode ? 'card-dark' : ''}>
                  <CardBody>
                    <CardTitle tag="h5">{project.title}</CardTitle>
                    <CardText>{project.desc}</CardText>
                    <Button color="primary" className="rounded-pill">
                      View Project
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className={`py-5 text-center ${darkMode ? 'section-dark' : 'bg-light text-dark'}`} id="contact">
        <Container>
          <h2>Contact Me</h2>
          <p>Let’s connect and create something amazing together.</p>
          <Button
            className={`rounded-pill ${darkMode ? 'btn-dark-mode' : 'btn-dark'}`}
            href="mailto:vijay.chaurasiya@example.com"
          >
            Email Me
          </Button>
        </Container>
      </section>
      <Footer/>
    </div>

  );
}

export default Home;
