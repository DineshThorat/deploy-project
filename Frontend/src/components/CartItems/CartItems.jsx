import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CartItems.css";
import { ShopContext } from "./../../context/ShopContext";
import { TiDelete } from "react-icons/ti";
import Checkout from "../Checkout/Checkout";

const CartItems = () => {
  const navigate = useNavigate();
  const { all_products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    // Check if cart is empty when cartItems change
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        setIsCartEmpty(false);
        return; // Exit loop early if a non-zero quantity is found
      }
    }
    setIsCartEmpty(true);
  }, [cartItems]);

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cartitems">
      {isCartEmpty ? (
        <h1>Your cart is empty.</h1>
      ) : (
        <>
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {all_products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div key={e.id}>
                  <div className="cartitems-format cartitems-format-main">
                    <img
                      src={e.image}
                      alt=""
                      className="cartitem-product-icon"
                    />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cartitems-quantity">
                      {cartItems[e.id]}
                    </button>
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <TiDelete
                      className="cartitem-remove-icon"
                      size={40}
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
          <div className="cartitems-down">
            <div className="cartitems-total">
              <h1>Cart Totals</h1>
              <div className="container">
                <div className="cartitems-total-item">
                  <p>Sub Total</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <h3>Total</h3>
                  <h3>${getTotalCartAmount()}</h3>
                </div>
              </div>
              <button onClick={handleProceedToCheckout}>
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className="cartitems-promocode">
              <p>If you have a promo code, Enter it here</p>
              <div className="cartitems-promobox">
                <input type="text" placeholder="promo Code" />
                <button>Apply</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;

// import React, { useContext } from "react";
// import "./CartItems.css";
// import { ShopContext } from "./../../context/ShopContext";
// import { TiDelete } from "react-icons/ti";

// const CartItems = () => {
//   const { all_products, cartItems, removeFromCart, getTotalCartAmount } =
//     useContext(ShopContext);

//   if (!all_products) {
//     return null;
//   }

//   return (
//     <div className="cartitems">
//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {all_products.map((e) => {
//         if (cartItems[e.id] > 0) {
//           return (
//             <div key={e.id}>
//               <div className="cartitems-format cartitems-format-main">
//                 <img src={e.image} alt="" className="cartitem-product-icon" />
//                 <p>{e.name}</p>
//                 <p>${e.new_price}</p>
//                 <button className="cartitems-quantity">
//                   {cartItems[e.id]}
//                 </button>
//                 <p>${e.new_price * cartItems[e.id]}</p>
//                 <TiDelete
//                   className="cartitem-remove-icon"
//                   size={40}
//                   onClick={() => {
//                     removeFromCart(e.id);
//                   }}
//                 />
//               </div>
//             </div>
//           );
//         }
//         return null;
//       })}
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>Cart Totals</h1>
//           <div className="container">
//             <div className="cartitems-total-item">
//               <p>Sub Total</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Shipping Fee</p>
//               <p>Free</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <h3>Total</h3>
//               <h3>${getTotalCartAmount()}</h3>
//             </div>
//           </div>
//           <button>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cartitems-promocode">
//           <p>If you have a promo code, Enter it here</p>
//           <div className="cartitems-promobox">
//             <input type="text" placeholder="promo Code" />
//             <button>Apply</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;
