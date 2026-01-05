import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
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
};

export const useCart = () => useContext(CartContext);