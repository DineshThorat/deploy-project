import React from "react";
import "./Footer.css";
import { GrInstagram } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        {/* <img src="/images/logo.png" alt="" /> */}
        <FaShopify size={60} />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <GrInstagram size={30} />
        </div>
        <div className="footer-icons-container">
          <FaFacebook size={30} />
        </div>
        <div className="footer-icons-container">
          <SiWhatsapp size={30} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
