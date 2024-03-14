import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    address: "",
    pinCode: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("checkout clicked", formData);
    let responseData;
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      window.location.replace("/");
      alert("order placed successfully");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pinCode">Pin Code:</label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Checkout;

// import React, { useState } from "react";
// import "./Checkout.css";

// const Checkout = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobileNumber: "",
//     address: "",
//     pinCode: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = () => {
//   //   console.log("Form Data:", formData);
//   // };

//   const handleSubmit = async () => {
//     // e.preventDefault();
//     console.log("checkout clicked", formData);
//     let responseData;
//     await fetch("http://localhost:4000/checkout", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => (responseData = data));

//     if (responseData.success) {
//       window.location.replace("/");
//       alert("order placed succesfully");
//     } else {
//       alert(responseData.errors);
//     }
//   };

//   return (
//     <div className="checkout">
//       <h2>Checkout</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="mobileNumber">Mobile Number:</label>
//           <input
//             type="text"
//             id="mobileNumber"
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Address:</label>
//           <textarea
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="pinCode">Pin Code:</label>
//           <input
//             type="text"
//             id="pinCode"
//             name="pinCode"
//             value={formData.pinCode}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button
//           onClick={() => {
//             handleSubmit();
//           }}
//           type="submit"
//         >
//           Submit Order
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Checkout;
