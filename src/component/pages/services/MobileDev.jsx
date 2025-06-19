import React from 'react';

const MobileDev = () => {
  return (
    <div className="mobiledev-page text-dark mt-5">
      {/* Hero */}
      <section className="mobile-hero d-flex align-items-center text-white py-5 text-center">
        <div className="container">
          <h1 className="fw-bold display-4">Mobile App Development</h1>
          <p className="lead">Powerful apps for Android & iOS tailored to your business needs.</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Our Capabilities</h2>
          <div className="row g-4 text-center">
            {[
              ['📱', 'Android & iOS Apps'],
              ['🚀', 'Performance Optimization'],
              ['🎨', 'User-Centric UI/UX'],
              ['🔗', 'API & Backend Integration'],
              ['💬', 'Push Notifications'],
              ['📊', 'Analytics & Monitoring'],
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
      <section className="cta-mobile text-white text-center py-5">
        <div className="container">
          <h3 className="fw-bold mb-3">Let’s Build Your App</h3>
          <p className="mb-4">Start reaching your users with fast, scalable mobile solutions.</p>
          <a
            href="/contact"
            className="btn btn-warning px-5 py-3 fw-bold rounded-pill"
          >
            📲 Get a Free App Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default MobileDev;
