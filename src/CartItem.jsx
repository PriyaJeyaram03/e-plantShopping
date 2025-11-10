import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../CartSlice";
import "./CartItem.css";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.substring(1));
    return (price * item.quantity).toFixed(2);
  };

  const calculateTotalAmount = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total + parseFloat(item.cost.substring(1)) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, amount: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className="cart-card" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="details">
                <h4>{item.name}</h4>
                <p>Unit Price: {item.cost}</p>
                <p>Subtotal: ${calculateTotalCost(item)}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => handleRemove(item)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
          <h3>Total: ${calculateTotalAmount()}</h3>
          <div className="cart-buttons">
            <button onClick={onContinueShopping}>Continue Shopping</button>
            <button onClick={handleCheckoutShopping}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;



