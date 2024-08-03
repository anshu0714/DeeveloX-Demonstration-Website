import React from "react";
import "./Footer.css";
import companyLogo from "../assets/company_logo.png";

const handleGetInTouchClick = () => {
  window.location.href = "/contact";
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
      </div>
      <div className="footer-center">
        <p>Copyright &copy; Images from Freepik.</p>
      </div>
      <div className="footer-right">
        <button className="get-in-touch-button" onClick={handleGetInTouchClick}>
          Get in Touch
        </button>
      </div>
    </footer>
  );
};

export default Footer;
