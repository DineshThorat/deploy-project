import React from "react";
import "./Breadcrums.css";
import { FaArrowCircleRight } from "react-icons/fa";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrums">
      HOME <FaArrowCircleRight /> SHOP <FaArrowCircleRight />
      {product.category} <FaArrowCircleRight /> {product.name}
    </div>
  );
};

export default Breadcrums;
