import React from 'react';
import './index.css';
import { FiMail, FiLinkedin, FiMapPin } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-links">
        <a href="mailto:yourname@example.com" className="contact-item">
          <FiMail className="icon" />
          <span>yourname@example.com</span>
        </a>

        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FiLinkedin className="icon" />
          <span>linkedin.com/in/yourprofile</span>
        </a>
      </div>

      <div className="map-box">
        <iframe
          title="My Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.8472597814245!2d106.8271835!3d-6.1751105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e5f7485a5f%3A0x501f8f1fc28b4c0!2sMonas!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
          width="100%"
          height="250"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
