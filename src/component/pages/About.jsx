import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <section className="about-section py-5 mt-5" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img
              src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500"
              alt="About Us"
              className="img-fluid rounded shadow about-image"
            />
          </div>

          {/* Content Section */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">About Vijay Software Solutions</h2>
            <p className="text-muted">
              We are a passionate team of developers and designers, crafting modern web and mobile solutions for startups, businesses, and enterprise clients. With deep technical expertise and a focus on results, we transform your ideas into digital experiences.
            </p>

            <h5 className="fw-bold mt-4">🎯 Our Mission</h5>
            <p className="text-muted">To empower businesses through custom software solutions that are fast, scalable, and user-friendly.</p>

            <h5 className="fw-bold mt-4">🚀 Why Choose Us?</h5>
            <ul className="list-unstyled mb-3">
              <li>✅ Tailor-made Web & App Development</li>
              <li>✅ CRM, ERP, and Automation Expertise</li>
              <li>✅ Client-First Approach & Fast Delivery</li>
              <li>✅ Beautiful, Conversion-Driven Design</li>
            </ul>

            <div className="row text-muted mb-4">
              <div className="col-4"><strong>5+</strong><br />Years Experience</div>
              <div className="col-4"><strong>100+</strong><br />Projects Delivered</div>
              <div className="col-4"><strong>95%</strong><br />Client Retention</div>
            </div>

            <a href="#contact" className="btn btn-primary px-4 rounded-pill">
              💬 Let’s Build Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
