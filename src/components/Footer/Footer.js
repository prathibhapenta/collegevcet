import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="vcet-footer">
      <div className="vcet-footer-content">

       
        <div className="vcet-footer-section about">
          <div className="vcet-footer-logo">
            <img
              src="/images/college_logo.png"
              alt="VCET Logo"
              className="vcet-footer-logo-img"
            />
            <h2>VCET</h2>
          </div>

          <p>
            Visvesvaraya College of Engineering & Technology is committed to
            excellence in technical education, innovation, and holistic student
            development. Approved by AICTE & affiliated to JNTUH.
          </p>

          <div className="vcet-footer-socials">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="tel:+919581452787">
              <FaPhone />
            </a>
          </div>
        </div>

       
        <div className="vcet-footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us/the-college">About VCET</Link></li>
            <li><Link to="/infrascture/library">Library</Link></li>
            <li><Link to="/alumni">Alumni</Link></li>
            
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="vcet-footer-section academics">
          <h3>Academics</h3>
          <ul>
            <li>B.Tech Programs</li>
            <li>M.Tech Programs</li>
            <li>MBA</li>
            <li>Research & Innovation</li>
            <li>Faculty</li>
          </ul>
        </div>

        <div className="vcet-footer-section contact">
          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt /> Hyderabad, Telangana, India
          </p>
          <p>
            <FaPhone /> +91 95814 52787
          </p>
          <p>
            <FaEnvelope /> info@vcet.edu.in
          </p>
        </div>
      </div>

      <div className="vcet-footer-bottom">
        <p>© {new Date().getFullYear()} VCET. All Rights Reserved. Designed, Developed & Maintained by Zorvixe Technologies</p>
        <p className="dev-credit">
          Designed & Developed by <strong>Zorvixe Technologies</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
