import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Contact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">

      {/* Heading */}
      <h2 className={`fw-bold mb-4 display-6 text-dark fade-heading ${show ? "show" : ""}`}>
        Get in <span className="text-warning">Touch</span>
      </h2>

      {/* Contact Card */}
      <div className={`row shadow-lg rounded-4 overflow-hidden contact-card fade-card ${show ? "show" : ""}`}>

        {/* LEFT SIDE */}
        <div className="col-md-6 d-flex flex-column justify-content-center p-4 text-white contact-left">
          <h4 className="fw-bold mb-3">IntBuddy Support</h4>
          <p className="small">
            Have questions or want to share feedback about IntBuddy? 
            We’d love to hear from you.
          </p>

          <div className="mt-3 small">
            <p><i className="bi bi-envelope-fill me-2"></i> support@intbuddy.com</p>
            <p><i className="bi bi-geo-alt-fill me-2"></i> India</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 bg-white p-4">
          <h5 className="mb-3 fw-bold text-center">Contact Us</h5>

          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-2">
              <input
                type="email"
                className="form-control custom-input"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-2">
              <textarea
                rows="3"
                className="form-control custom-input"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark w-100 custom-btn mt-2">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;