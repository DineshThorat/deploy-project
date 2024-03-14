import React, { useEffect, useState } from "react";
import "./Orders.css";
import { TiTick } from "react-icons/ti";

const Orders = () => {
  const [allorders, setAllOrders] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allorders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeOrder = async (_id) => {
    await fetch("http://localhost:4000/removeorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: _id }),
    });
    await fetchInfo();
    console.log("order deleted");
  };
  return (
    <div className="list-orders">
      <h1>All Order List</h1>
      <div className="listorders-format-main">
        <p>Name</p>
        <p>Mobile No</p>
        <p>Address</p>
        <p>Pin Code</p>
        <p>Email</p>
        <p>Confirm Order</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allorders.map((order, index) => {
          return (
            <>
              <div
                key={index}
                className="listorders-format-main listorders-format"
              >
                <p>{order.name}</p>
                <p>{order.mobileNumber}</p>
                <p>{order.address}</p>
                <p>{order.pinCode}</p>
                <p>{order.email}</p>
                {/* <img className="listproduct-remove-icon" src="" alt="" /> */}
                <TiTick
                  onClick={() => {
                    removeOrder(order._id);
                  }}
                  className="listproduct-remove-icon"
                  size={30}
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
