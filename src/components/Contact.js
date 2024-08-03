import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all required fields");
    } else {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-form-container">
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Send
            </button>
          </form>
        </div>

        <div className="contact-info">
          <div className="contact-info-inner">
            <h2>Get in Touch</h2>
            <p>
              Contact us about anything related to our company or services.
              We'll do our best to get back to you as soon as possible.
            </p>

            <div className="social-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>

            <div className="contact-details">
              <h2>Contact Details</h2>
              <p>Trivion Technologies Private Limited</p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                <a
                  href="https://maps.google.com/?q=G-03,%20Capital%20High%20Street,%20Mahal%20Road,%20Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  G-03, Capital High Street, Mahal
                  Road, Jaipur
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} />{" "}
                <a href="tel:+918005642075">+91 80056 42075</a>
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <a href="mailto:hello@deevelox.com">hello@deevelox.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
