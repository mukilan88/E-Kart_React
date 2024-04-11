// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SecondPage from "./SecondPage";
import { CartProvider } from "./CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SecondPage" element={<SecondPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
