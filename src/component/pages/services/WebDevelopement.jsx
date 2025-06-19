import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './WebDevelopment.css';

const WebDevelopment = () => {
  return (
    <div className="webdev-page text-dark mt-5 ">
      {/* Hero */}
      <section className="webdev-hero d-flex align-items-center text-white py-5  text-center">
        <div className="container">
          <h1 className="fw-bold display-4">Custom Web Development</h1>
          <p className="lead">Crafting fast, modern & scalable websites for your business success.</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">What We Offer</h2>
          <div className="row g-4 text-center">
            {[
              ['⚡', 'Responsive Websites'],
              ['🛒', 'eCommerce Platforms'],
              ['📈', 'SEO Optimization'],
              ['☁️', 'Cloud Hosting'],
              ['🔐', 'Secure Web Apps'],
              ['⚙️', 'Admin Dashboards'],
            ].map(([icon, title], i) => (
              <div className="col-md-4" key={i}>
                <div className="card p-4 h-100 shadow-sm">
                  <div className="fs-1 mb-3">{icon}</div>
                  <h5>{title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-white text-center py-5">
        <div className="container">
          <h3 className="fw-bold mb-3">Ready to build your website?</h3>
          <p className="mb-4">Let’s bring your vision to life with modern design & powerful backend.</p>
          <a
            href="/contact"
            className="btn btn-warning px-5 py-3 fw-bold rounded-pill"
          >
            🚀 Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
