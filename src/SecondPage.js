// SecondPage.js

import React, { useState } from "react";
import { useCart } from "./CartContext";
import "./App.css";

const SecondPage = () => {
  const { cartItems, setCartItems } = useCart();
  const [totalCost, setTotalCost] = useState(calculateTotalCost(cartItems));

  // Function to calculate the total cost of the items in the cart
  function calculateTotalCost(items) {
    return items.reduce((total, item) => total + item.cost * item.quantity, 0);
  }

  // Function to handle increasing quantity of an item
  const increaseQuantity = (item) => {
    // console.log("Before incrementing quantity:", item.quantity);
    item.quantity++;
    // console.log("After incrementing quantity:", item.quantity);
    setTotalCost(calculateTotalCost(cartItems));
  };
  // Function to handle decreasing quantity of an item
  const decreaseQuantity = (item) => {
    if (item.quantity > 0) {
      item.quantity--;
      if (item.quantity === 0) {
        removeItem(item);
      } else {
        setTotalCost(calculateTotalCost(cartItems));
      }
    }
  };
  // Function to handle removing an item from the cart
  const removeItem = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== itemToRemove.id
    );
    setCartItems(updatedCartItems);
    setTotalCost(calculateTotalCost(updatedCartItems));
  };

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} className="image" />
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <button onClick={() => increaseQuantity(item)}>+</button>
            <button onClick={() => decreaseQuantity(item)}>-</button>
            <button onClick={() => removeItem(item)}>Remove</button>
            <span>Price: {item.cost}</span>
          </li>
        ))}
      </ul>
      <h3>Total Cost: {totalCost.toFixed(2)}</h3>
    </div>
  );
};

export default SecondPage;
