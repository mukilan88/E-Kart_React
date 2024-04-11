// HomePage.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import productsData from "./Products.json";
import "./App.css";

const HomePage = () => {
  const [addedProducts, setAddedProducts] = useState([]);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    // Initialize added products based on cart items
    setAddedProducts(cartItems.map((item) => item.id));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProducts([...addedProducts, product.id]);
  };

  return (
    <div>
      <Link to="/SecondPage">Go to Second Page</Link>

      <div className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">{cartItems.length}</span>
      </div>

      <div className="products">
        {productsData.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} className="image" />
            <h3>{product.name}</h3>
            <p>{product.cost}</p>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={addedProducts.includes(product.id)}
            >
              {addedProducts.includes(product.id)
                ? "Added to Cart"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
