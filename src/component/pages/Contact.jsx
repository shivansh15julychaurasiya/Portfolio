import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <section className="contact-section text-white py-5" id="contact">
      <div className="overlay">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Side: Form */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Let’s Connect</h2>
              <p className="mb-4">
                Have a project or idea? Let’s bring it to life. Fill out the form and we’ll get back to you shortly.
              </p>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold text-white">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold text-white">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold text-white">Your Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Type your message here..."></textarea>
                </div>
                <button type="submit" className="btn btn-warning btn-lg px-4 rounded-pill shadow">
                  ✉️ Send Message
                </button>
              </form>
            </div>

            {/* Right Side: Image */}
           {/* Right Side: Image */}
<div className="col-lg-6 text-center">
  <img
    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500"
    alt="Contact Illustration"
    className="img-fluid rounded shadow-lg contact-image"
  />
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
