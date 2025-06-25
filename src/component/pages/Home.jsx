import React, { useEffect ,useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GetFreeQuoteModal from "./GetFreeQuoteModel";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import StatsSection from "./StatsSection";
import TechStack from "./TechStack";
import FAQSection from "./FAQSection";
import ConnectWithUs from "./ConnectWithUs";
import { Button } from 'reactstrap';

const LandingPage = () => {

    const [modalOpen, setModalOpen] = useState(false);



  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-white d-flex align-items-center">
        <div className="container text-center text-md-start">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <h1 className="display-4 fw-bold mb-3" data-aos="fade-up">
                Build Your <span className="text-warning">Dream App</span> Today
              </h1>
              <p className="lead mb-b fw-bold mt-4" data-aos="fade-up" data-aos-delay="100">
                We craft websites, mobile apps, CRMs & automation tools for businesses like yours.
              </p>
                <Button className="mt-3" color="danger" onClick={() => setModalOpen(true)}>
        Get Free Quote
      </Button>
      <GetFreeQuoteModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-5" data-aos="fade-down">Our Services</h2>
          <div className="row g-4">
            {[
              ["🌐", "Custom Websites"],
              ["📱", "Mobile Apps"],
              ["⚙️", "CRM & ERP Systems"],
              ["🎨", "UI/UX Design"],
              ["🔌", "API Integration"],
              ["🤖", "Business Automation"],
            ].map(([icon, title], i) => (
              <div className="col-md-4" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="card shadow service-card h-100 p-4">
                  <div className="fs-1 mb-3">{icon}</div>
                  <h5 className="fw-semibold">{title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Portfolio />
      <Testimonials />
      <StatsSection />
      <ConnectWithUs/>
      <TechStack />
      <FAQSection />

      {/* CTA Section */}
      <section className="py-5 bg-light text-dark shadow text-center" id="contact" data-aos="fade-up">
        <div className="container">
          <h3 className="mb-3 fw-bold">Let’s build something amazing together</h3>
          <p className="mb-4">
            DM us on Instagram @vijaysoftwaresolutions or contact below.
          </p>
          <a
            href="https://instagram.com/vijaysoftwaresolutions"
            className="btn btn-warning btn-lg px-5 fw-bold rounded-pill"
            target="_blank"
            rel="noreferrer"
          >
            📩 Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
