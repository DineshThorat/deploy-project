import React from "react";
import "./Navbar.css";
import { FaShopify } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <FaShopify size={60} className="nav-logo" />
        {/* <h1>SHOPPER</h1> */}
      </div>
      <div>
        <CgProfile size={60} className="nav-profile" />
      </div>
    </div>
  );
};

export default Navbar;
