import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src="/images/logo.png" alt="Company Logo" className="footer-logo" />
          <div className="social-icons">
            <FaLinkedinIn />
            <FaInstagram />
            <FaFacebookF />
            <FaYoutube />
            <FaXTwitter />  
          </div>
        </div>

        <div className="footer-links">
          <div>
            <p>Solutions</p>
            <ul>
              <li><a href="/product-overview">Product Overview</a></li>
              <li><a href="/donation-forms">Donation Forms</a></li>
              <li><a href="/crowdfunding">Crowdfunding</a></li>
              <li><a href="/recurring-giving">Recurring Giving</a></li>
            </ul>
          </div>

          <div>
            <p>Who We Serve</p>
            <ul>
              <li><a href="/nonprofits">Nonprofits</a></li>
              <li><a href="/healthcare">Healthcare</a></li>
              <li><a href="/churches">Churches</a></li>
            </ul>
          </div>

          <div>
            <p>Resources</p>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/webinars">Webinars</a></li>
              <li><a href="/research">Research</a></li>
            </ul>
          </div>

          <div>
            <p>Company</p>
            <ul>
              <li><a href="/story">Story</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          x</div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Your Company. All rights reserved.</p>
        <div className="legal-links">
          <a href="/terms">Terms & Conditions</a> | 
          <a href="/privacy">Privacy Notice</a> | 
          <a href="/cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
