import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Context Provider
import { CartProvider } from './context/CartContext';

// Import Components
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Guides from './pages/Guides/Guides';
import CockatielGuide from './pages/Guides/CockatielGuide';
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
  );
}

export default App;