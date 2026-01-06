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
  );
}

export default App;