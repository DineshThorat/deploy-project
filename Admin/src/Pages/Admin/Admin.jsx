import React from "react";
import "./Admin.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import ListProduct from "../../components/ListProduct/ListProduct";
import AddProduct from "../../components/AddProduct/AddProduct";
import Orders from "../../components/Orders/Orders";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default Admin;
