import React from "react";
import "./Footer.css";

import Logo from "../../assests/Logo.jpeg";
import Landline from "../../assests/landline.png";
import Email from "../../assests/at.png";
import Location from "../../assests/location.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact-item">
          <div className="footer-contact-item-image">
          <img src={Landline} alt="Landline" />
          </div>
          <div className="footer-contact-item-text">
          <h4>Phone Number</h4>
          <p>+974 3118 1843</p>
          </div>
        </div>

        <div className="footer-contact-item">
          <div className="footer-contact-item-image">
          <img src={Email} alt="Email" />
          </div>
          <div className="footer-contact-item-text">
          <h4>Email Address</h4>
          <p>Elbrithcahr@gmail.com</p>
          </div>
        </div>

        <div className="footer-contact-item">
          <div className="footer-contact-item-image">
          <img src={Location} alt="Location" />
          </div>
          <div className="footer-contact-item-text">
          <h4>Office Location</h4>
          <p>Ambassador Street, Zone 61</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <img src={Logo} alt="Elbrit Logo" className="footer-logo" />
        <p className="description">
          Your health, physical, and emotional well-being is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </p>
      </div>
      
      <div className="copyright">
        <p>
          © Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
          400051
        </p>
      </div>
    </footer>
  );
};

export default Footer;
