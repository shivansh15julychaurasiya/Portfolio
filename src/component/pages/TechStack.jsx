import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const techTools = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    desc: "UI library for building fast & dynamic SPAs."
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    desc: "Framework for backend REST APIs."
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    desc: "JavaScript runtime for server-side apps."
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    desc: "NoSQL database for scalable data storage."
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    desc: "CSS framework for responsive designs."
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    desc: "Version control and collaboration platform."
  }
];

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-5 bg-light shadow text-dark">
      <div className="container">
        <h2 className="text-center fw-bold mb-5" data-aos="fade-up">
          💻 Our Tech Stack
        </h2>
        <div className="row justify-content-center g-4">
          {techTools.map((tool, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index} data-aos="flip-left" data-aos-delay={index * 100}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front d-flex flex-column align-items-center justify-content-center">
                    <img src={tool.logo} alt={tool.name} height={60} />
                    <h6 className="mt-2">{tool.name}</h6>
                  </div>
                  <div className="flip-card-back d-flex align-items-center justify-content-center">
                    <p className="text-white text-center px-2">{tool.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
