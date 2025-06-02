import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md="6">
            <p className="mb-2 mb-md-0">
              © {new Date().getFullYear()} Vijay Chaurasiya. All rights reserved.
            </p>
          </Col>
          <Col md="6" className="text-md-end">
            <a href="mailto:vijay.chaurasiya@example.com" className="footer-link">
              Email
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://www.linkedin.com/in/vijay-chaurasiya"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://github.com/vijay-chaurasiya"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
