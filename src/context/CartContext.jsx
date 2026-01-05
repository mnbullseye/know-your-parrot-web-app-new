import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Database items
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const SHIPPING_COST = 250;

  // FETCH FROM XAMPP DATABASE
  useEffect(() => {
    fetch("http://localhost/parrot-api/get_products.php")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Database error:", err));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ).filter(item => item.quantity > 0));
  };

  const subtotal = cart.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
  const total = subtotal > 0 ? subtotal + SHIPPING_COST : 0;

  return (
    <CartContext.Provider value={{ products, cart, updateQuantity, subtotal, total, SHIPPING_COST }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);