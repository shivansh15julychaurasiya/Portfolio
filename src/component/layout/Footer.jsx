import React from 'react';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section text-white pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Column 1: Logo + Description */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold mb-2">Vijay Software Solutions</h4>
            <p>We design modern websites, apps & automation tools that empower your business.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/#services" className="footer-link">Services</a></li>
              <li><a href="/#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social + Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold mb-3">Connect With Us</h5>
            <div className="d-flex gap-3 mb-3 justify-content-center justify-content-md-start">
              <a href="https://instagram.com/vijaysoftwaresolutions" target="_blank" rel="noreferrer" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:contact@vijaysolutions.com" className="social-icon">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
            <p>📧 contact@vijaysolutions.com</p>
            <p>📞 +91 9721308763</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center pt-3 border-top border-light mt-4">
          <small>© {new Date().getFullYear()} Vijay Software Solutions. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
