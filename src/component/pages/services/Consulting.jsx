import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Consulting = () => {
  return (
    <div className="consulting-page text-dark mt-5">
      {/* Hero Section */}
      <section className="consulting-hero d-flex align-items-center text-white py-5 text-center">
        <div className="container">
          <h1 className="fw-bold display-4">IT & Software Consulting</h1>
          <p className="lead">
            Strategic guidance for startups and businesses looking to scale with smart tech.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Consulting Focus Areas</h2>
          <div className="row g-4 text-center">
            {[
              ['🧠', 'Product Strategy'],
              ['⚙️', 'Tech Stack Selection'],
              ['📈', 'Digital Transformation'],
              ['💼', 'Enterprise Solutions'],
              ['🔒', 'Security Consulting'],
              ['🤝', 'Project Planning'],
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
      <section className="cta-consulting text-white text-center py-5">
        <div className="container">
          <h3 className="fw-bold mb-3">Need Expert Guidance?</h3>
          <p className="mb-4">
            Let’s discuss your business and help you move forward with confidence.
          </p>
          <a
            href="/contact"
            className="btn btn-warning px-5 py-3 fw-bold rounded-pill"
          >
            🧩 Book a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
