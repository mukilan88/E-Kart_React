// CartContext.js

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...item, quantity: 1 }, // Initialize quantity to 1
    ]);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== itemToRemove.id
    );
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
