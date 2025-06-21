import React, { useEffect } from "react";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Vijay Chaurasiya",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer with expertise in React, Spring Boot",
    img: "/images/team/Vijay.png",
    linkedin: "https://linkedin.com/in/vijaychaurasiya",
    github: "https://github.com/vijaychaurasiya",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    bio: "Passionate about creating intuitive and delightful user experiences.",
    img: "/images/team/Priya.png",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Vedprakash Sharma",
    role: "Fronted Engineer",
    bio: "Frontend Engineer specializing in building secure, scalable web app",
    img: "/images/team/Vedprakash.png",
    linkedin: "#",
    github: "#",
  },
];

const OurTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(to right, #e0eafc, #cfdef3)",
        padding: "4rem 0",
      }}
    >
      <Container  style={{ marginTop: "5rem" }}>
        <h2 className="text-center fw-bold mb-5" data-aos="fade-down">
          👨‍💻 Meet Our Awesome Team
        </h2>

        {/* Horizontal scroll wrapper for small screens */}
        <div
          className="d-flex flex-row overflow-auto gap-4 pb-4"
          style={{ scrollSnapType: "x mandatory", padding: "0 1rem" }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="flex-shrink-0"
              style={{
                scrollSnapAlign: "center",
                minWidth: "280px",
                maxWidth: "300px",
                margin: "auto",
              }}
            >
              <Card
                className="text-center border-0 h-100 p-3"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(14px)",
                  borderRadius: "20px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-circle mx-auto mt-3"
                  style={{
                    width: "110px",
                    height: "110px",
                    objectFit: "cover",
                    border: "4px solid #fff",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                />
                <CardBody>
                  <CardTitle tag="h5" className="fw-bold mt-3">
                    {member.name}
                  </CardTitle>
                  <CardText className="text-primary mb-2">{member.role}</CardText>
                  <CardText className="text-muted small">{member.bio}</CardText>
                  <div className="d-flex justify-content-center gap-3 mt-3">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noreferrer">
                        <FaLinkedin size={22} color="#0e76a8" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noreferrer">
                        <FaGithub size={22} color="#333" />
                      </a>
                    )}
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;
