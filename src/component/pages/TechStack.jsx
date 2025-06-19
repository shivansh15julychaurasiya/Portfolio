import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const techTools = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'JPA / Hibernate', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg' }
];


const TechStack = () => {
  return (
    <section className="tech-section py-5 text-center text-white">
      <div className="container">
        <h2 className="fw-bold mb-4">Our Tech Stack</h2>
        <p className="mb-5">We use powerful technologies tools to build scalable, modern apps.</p>
        <div className="row justify-content-center g-4">
          {techTools.map((tool, index) => (
            <div className="col-6 col-md-4 col-lg-2" key={index}>
              <div className="tech-card p-3 shadow-sm rounded bg-white text-dark">
                <img src={tool.logo} alt={tool.name} className="img-fluid mb-2" height="50" />
                <h6 className="fw-semibold">{tool.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
