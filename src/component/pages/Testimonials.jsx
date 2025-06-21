import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
  {
    name: "Priya Mehta",
    role: "Founder, EduTrack",
    feedback:
      "Vijay Software Solutions helped us launch our mobile app in record time. Professional, responsive, and highly skilled team!",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Ravi Sharma",
    role: "CTO, BuildSmart",
    feedback:
      "Their CRM and automation tools transformed how we manage leads. Highly recommend their services!",
    avatar: "https://i.pravatar.cc/100?img=58",
  },
  {
    name: "Anita Verma",
    role: "CEO, Bloom E-Commerce",
    feedback:
      "Great design and on-time delivery. The UI/UX was exactly what we envisioned!",
    avatar: "https://i.pravatar.cc/100?img=65",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="testimonials-section py-5 bg-white" id="testimonials">
      <div className="container">
        <h2
          className="text-center fw-bold mb-5"
          data-aos="fade-up"
        >
          💬 What Clients Say
        </h2>
        <div className="row g-4">
          {testimonials.map((testimonial, idx) => (
            <div
              className="col-md-4"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="card h-100 shadow border-0 p-4 testimonial-card">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                    style={{ border: '2px solid #ccc' }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </div>
                <p className="text-muted fst-italic">“{testimonial.feedback}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
