<<<<<<< HEAD
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import ContactUs from './pages/Contactus';
import ShopPage from './pages/Shop';
import ProductPage from './pages/ProductPage';
import ProductDescription from './pages/Description'; // Import the new page

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Shop Selection Page (Toys/Food/Accessories) */}
        <Route path="/" element={<ShopPage />} />
        
        {/* Dynamic Category Page (e.g., /shop/toys) */}
        <Route path="/shop/:category" element={<ProductPage />} />

        {/* Dynamic Description Page (e.g., /description/T001) */}
        <Route path="/description/:id" element={<ProductDescription />} />

        {/* Other Pages */}
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
    </Router>
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Context Provider
import { CartProvider } from './context/CartContext';

// Import Components
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Guides from './pages/Guides/Guides';
import CockatielGuide from './pages/Guides/CockatielGuide';
import CockatooGuide from './pages/Guides/CockatooGuide';
import Cart from './pages/Cart/Cart';

/**
 * Placeholder components for pages not yet fully migrated.
 * Once you create src/pages/Shop/Shop.jsx, replace the line below with an import.
 */
const Shop = () => (
  <div style={{ padding: '100px', textAlign: 'center' }}>
    <h1 style={{ fontFamily: 'var(--main-heading)' }}>Shop Page</h1>
    <p>Database products will load here soon!</p>
  </div>
);

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Navbar is outside Routes so it appears on every page */}
        <Navbar />

        <Routes>
          {/* Main Landing Page (your HTML/CSS migration) */}
          <Route path="/" element={<Home />} />

          {/* Guides Hub Page */}
          <Route path="/guides" element={<Guides />} />

          {/* Individual Detailed Guide Page */}
          <Route path="/parrot-guide/cockatiel" element={<CockatielGuide />} />
          <Route path="/parrot-guide/cockatoo" element={<CockatooGuide />} />

          {/* Shop/Products Page */}
          <Route path="/shop" element={<Shop />} />

          {/* Cart Page */}
          <Route path="/cart" element={<Cart />} />

          {/* 404 Fallback Route */}
          <Route 
            path="*" 
            element={
              <div style={{ padding: '100px', textAlign: 'center' }}>
                <h1 style={{ color: 'red' }}>404</h1>
                <p>Oops! This perch doesn't exist. Fly back to safety!</p>
              </div>
            } 
          />
        </Routes>
      </Router>
    </CartProvider>
>>>>>>> 6a48da040c752d87af736f4f5ddf92b17f17dc7b
  );
}

export default App;