import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-logo">
        <h2 className="social-logo">MovieHub</h2>
      </div>
      <small className="website-rights">
        Made with ♥ by Ceavin Rufus © 2021
      </small>
      <div className="social-icons">
        <a
          className="social-icon-link facebook"
          href="https://facebook.com/ceavinrufus3"
          target="_blank"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          className="social-icon-link instagram"
          href="https://instagram.com/ceavinrufus"
          target="_blank"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          className="social-icon-link twitter"
          href="https://twitter.com/16521xxx"
          target="_blank"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          className="social-icon-link twitter"
          href="https://linkedin.com/in/ceavinrufus"
          target="_blank"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </>
  );
}

export default Footer;
