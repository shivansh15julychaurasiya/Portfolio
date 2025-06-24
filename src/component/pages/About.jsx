import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <section className="about-section py-5 " id="about" style={{marginTop:"16px"}}>              
      <div className="container">
        <div className="section-header text-center mb-5">
          <h6 className="text-primary mb-3">WHO WE ARE</h6>
          <h2 className="fw-bold display-5">Crafting Digital Excellence</h2>
          <div className="divider mx-auto my-4"></div>
        </div>

        <div className="row align-items-center g-5">
          {/* Image Section */}
          <div className="col-lg-6">
            <div className="about-image-container position-relative">
              <img
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our Team"
                className="img-fluid rounded-4 shadow-lg main-image"
              />
              <div className="experience-badge bg-primary text-white rounded-4 p-3 shadow">
                <h3 className="mb-0">5+</h3>
                <p className="mb-0 small">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4">About <span className="text-primary">Vijay Software Solutions</span></h3>
            <p className="lead text-muted mb-4">
              We transform complex challenges into elegant digital solutions through innovative technology and design thinking.
            </p>

            <div className="about-features mb-4">
              <div className="feature-item d-flex mb-3">
                <div className="feature-icon bg-light-primary text-primary rounded-3 p-2 me-3">
                  <i className="bi bi-bullseye fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Our Mission</h5>
                  <p className="text-muted mb-0">To empower businesses through custom software solutions that drive growth and efficiency.</p>
                </div>
              </div>

              <div className="feature-item d-flex mb-3">
                <div className="feature-icon bg-light-primary text-primary rounded-3 p-2 me-3">
                  <i className="bi bi-lightning-charge fs-4"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Why Choose Us?</h5>
                  <ul className="text-muted mb-0 list-unstyled">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Tailor-made Web & App Development</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>CRM, ERP & Automation Expertise</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Client-First Approach & Fast Delivery</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Beautiful, Conversion-Driven Design</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="stats-container bg-light p-4 rounded-4 mb-4">
              <div className="row g-3 text-center">
                <div className="col-4">
                  <div className="stat-item">
                    <h3 className="text-primary mb-0">100+</h3>
                    <p className="text-muted mb-0 small">Projects</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-item">
                    <h3 className="text-primary mb-0">95%</h3>
                    <p className="text-muted mb-0 small">Retention</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-item">
                    <h3 className="text-primary mb-0">24/7</h3>
                    <p className="text-muted mb-0 small">Support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary px-4 py-3 rounded-pill fw-bold">
                <i className="bi bi-chat-left-text me-2"></i> Let's Build Together
              </a>
              <a href="#portfolio" className="btn btn-outline-primary px-4 py-3 rounded-pill fw-bold">
                <i className="bi bi-collection me-2"></i> View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;