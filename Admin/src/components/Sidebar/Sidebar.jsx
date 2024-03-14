import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <MdOutlineProductionQuantityLimits size={40} color="black" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <FaListAlt size={40} color="black" />
          <p>Product List</p>
        </div>
      </Link>
      <Link to={"/orders"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <FaBagShopping size={40} color="black" />
          <p>Orders List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
