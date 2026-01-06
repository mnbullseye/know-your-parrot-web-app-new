<<<<<<< HEAD
import React, { createContext, useState, useContext } from 'react';
=======
import React, { createContext, useContext, useState, useEffect } from 'react';
>>>>>>> 6a48da040c752d87af736f4f5ddf92b17f17dc7b

const CartContext = createContext();

export const CartProvider = ({ children }) => {
<<<<<<< HEAD
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity = 1) => {
        setCart((prevCart) => {
            // Check if item already exists in cart
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id 
                    ? { ...item, quantity: item.quantity + quantity } 
                    : item
                );
            }
            // If new item, add it with the quantity
            return [...prevCart, { ...product, quantity }];
        });
        alert(`${product.name} added to cart!`);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
=======
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
>>>>>>> 6a48da040c752d87af736f4f5ddf92b17f17dc7b
};

export const useCart = () => useContext(CartContext);