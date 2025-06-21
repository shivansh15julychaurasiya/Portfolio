import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
  {
    title: "CRM for Real Estate",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500",
    description: "A CRM system with lead tracking and automation.",
    link: "#"
  },
  {
    title: "E-commerce Mobile App",
    image: "./images/shopping.png",
    description: "A shopping app with online payments and product listing.",
    link: "#"
  },
  {
    title: "Custom ERP Dashboard",
    image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500",
    description: "ERP system for managing HR, sales, and finance.",
    link: "#"
  }
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="portfolio-section py-5 bg-light" id="portfolio">
      <div className="container">
        <h2 className="text-center fw-bold mb-5" data-aos="fade-up">🚀 Our Work</h2>
        <div className="row g-4">
          {projects.map((project, idx) => (
            <div
              className="col-md-4"
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 200}
            >
              <div className="card shadow-sm h-100">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-outline-primary btn-sm rounded-pill"
                  >
                    🔗 View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
