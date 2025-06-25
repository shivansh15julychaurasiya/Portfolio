import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section
      className="contact-section py-5"
      id="contact"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1599423300746-b62533397364?auto=compress&dpr=2&h=750)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "6rem",
        color: "#fff",
      }}
    >
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Left: Contact Form */}
          <div className="col-lg-6" data-aos="fade-up">
            <div
              className="p-5 shadow-lg rounded-4"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <h2 className="fw-bold mb-3 text-dark">📩 Let’s Connect</h2>
              <p className="text-dark mb-4">
                Have a project or idea? Fill the form below and we’ll get back
                to you shortly.
              </p>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <div className="mb-3">
                      <label className="form-label text-dark">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control rounded-pill px-4"
                        placeholder="Enter your name "
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <label className="form-label text-dark">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control rounded-pill px-4"
                        placeholder="vijay@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <div className="mb-3">
                      <label className="form-label text-dark">Phone</label>
                      <PhoneInput
                        country={"in"}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputStyle={{
                          width: "100%",
                          borderRadius: "50px",
                          padding: "6px 20px",
                          border: "1px solid #ced4da",
                        }}
                        enableSearch
                        required
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <label className="form-label text-dark">Service</label>
                      <select
                        name="service"
                        className="form-select rounded-pill px-4"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service</option>
                        <option>Custom Website</option>
                        <option>Mobile App</option>
                        <option>CRM/ERP</option>
                        <option>UI/UX Design</option>
                        <option>API Integration</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </Col>
                </Row>

                <div className="mb-3">
                  <label className="form-label text-dark">Your Message</label>
                  <textarea
                    name="message"
                    className="form-control rounded-4"
                    rows="3"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-warning btn-lg w-100 rounded-pill shadow-sm"
                  style={{ letterSpacing: "1px" }}
                >
                  🚀 Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right: Info + Map + Social */}
          <div className="col-lg-6 text-dark shadow" data-aos="fade-left">
            <div className="mb-4 mt-4">
              <h4 className="fw-bold">📍 Office Location</h4>
              <p>Vijay Software Solutions, New Delhi, India</p>

              <h4 className="fw-bold">📞 Phone</h4>
              <p>+91 9721308763</p>

              <h4 className="fw-bold">✉️ Email</h4>
              <p>contact@vijaysoftwaresolution.com</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">⏰ Working Hours</h5>
              <p>Monday to Saturday: 10 AM – 6 PM</p>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">🔗 Follow Us</h5>
              <div className="d-flex gap-4 fs-4">
                <div className="d-flex gap-3">
                  <a
                    href="https://www.instagram.com/vijaysoftwaresolution"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#E1306C" }} // Instagram pink
                  >
                    <i className="bi bi-instagram fs-4"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/vijaysoftwaresolution"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0A66C2" }} // LinkedIn blue
                  >
                    <i className="bi bi-linkedin fs-4"></i>
                  </a>

                  <a
                    href="https://wa.me/919721308763"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#25D366" }} // WhatsApp green
                  >
                    <i className="bi bi-whatsapp fs-4"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="map-responsive rounded-4 overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Vijay Software Solutions Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
