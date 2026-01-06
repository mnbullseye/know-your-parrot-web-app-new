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
import Login from './pages/login';
import Signup from './pages/signup';
import ContactUs from './pages/Contactus';
import ShopPage from './pages/Shop';
import ProductPage from './pages/ProductPage';
import ProductDescription from './pages/Description';

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Navbar is outside Routes so it appears on every page */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/guides" element={<Guides />} />

          <Route path="/parrot-guide/cockatiel" element={<CockatielGuide />} />
          <Route path="/parrot-guide/cockatoo" element={<CockatooGuide />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/cart" element={<Cart />} />
          
          <Route path="/" element={<ShopPage />} />

          <Route path="/shop/:category" element={<ProductPage />} />

          <Route path="/description/:id" element={<ProductDescription />} />

          <Route path="/Contactus" element={<ContactUs />} />
          
          <Route path="/login" element={<Login />} />
          
          <Route path="/signup" element={<Signup />} />
          
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

// {/* Main Shop Selection Page (Toys/Food/Accessories) */}
//         <Route path="/" element={<ShopPage />} />
        
//         {/* Dynamic Category Page (e.g., /shop/toys) */}
//         

//         {/* Dynamic Description Page (e.g., /description/T001) */}
//         <Route path="/description/:id" element={<ProductDescription />} />

//         {/* Other Pages */}
//         <Route path="/Contactus" element={<ContactUs />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         {/* <Route path="/" element={<Login />} /> */}
//         {/* <Route path="/contact" element={<ContactUs />} /> */}