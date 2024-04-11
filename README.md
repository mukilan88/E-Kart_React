# Shopping Cart App

This is a simple React Frontend application that allows users to add and manage items in a shopping cart.

## Features

1. **Homepage (homepage.js)**: Displays a list of products fetched from a JSON file (`products.json`). Users can add products to the cart by clicking on the "Add to Cart" button. Once added, the button is disabled to prevent duplicate additions.

2. **Cart Page (secondpage.js)**: Shows the items added to the cart along with their quantities and prices. Users can increase or decrease the quantity of each item, remove items from the cart, and view the total cost of the items.

## Getting Started

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the dependencies.
   (a) including `react-router-dom`: This library enables you to create dynamic, navigable user interfaces within your React web application. It manages the display of different components based on the URL.
   (b) including `react-scripts`: This package provides a set of essential scripts and configuration for React projects. It gives you commands for starting your development server, building for production, testing, and more.

   ```bash
   npm install react-router-dom react-scripts
   ```

3. Start the development server by running `npm start`.

4. Open your browser and go to `http://localhost:3000` to view the application.

## Files

- **App.js**: The main component that renders the application layout.
- **App.css**: The stylesheet containing styles for the entire application.
- **CartContext.js**: Context provider for managing cart state and functions.
- **Homepage.js**: Component for the homepage, displaying product data and handling cart actions.
- **SecondPage.js**: Component for the cart page, displaying cart items and managing cart interactions.
- **index.js**: Entry point of the application.
- **products.json**: JSON file containing product data.

## Technologies Used

- React
- React Router
- JavaScript (ES6)
- CSS

## Credits

This project was created by <a href="#" target="_blank">Mukilan Selvaraj</a>.
