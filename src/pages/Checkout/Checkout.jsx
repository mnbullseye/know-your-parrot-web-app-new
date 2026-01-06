import React, { useState, useEffect } from 'react';
import styles from './Checkout.module.css';

const Checkout = () => {
  // 1. This state will hold the items coming from your friend's database logic
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Premium Parrot Seed Mix", price: 1200, quantity: 1, img: "/Shop Assets/food.png" },
    { id: 2, name: "Colorful Chew Toy", price: 850, quantity: 2, img: "/Shop Assets/toys.png" }
  ]);

  // 2. Calculate Subtotal dynamically based on what's in the cart
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingFee = 250;

  return (
    <div className={styles.checkoutBody}>
      <div className={styles.checkoutContainer}>
        <div className={styles.mainContent}>
          {/* ... Shipping Details Form remains the same ... */}

          {/* RIGHT COLUMN: DYNAMIC CART SUMMARY */}
          <div className={styles.cartSummary}>
            <h2>Your Cart</h2>

            <div className={styles.cartItems}>
              {/* 3. We use .map() to loop through the database items */}
              {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemDetails}>
                    <div className={styles.itemImageContainer}>
                      <img src={item.img} alt={item.name} />
                      <span className={styles.quantityBadge}>{item.quantity}</span>
                    </div>
                    <div className={styles.itemInfo}>
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <span className={styles.itemPrice}>Rs. {item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            {/* Totals update automatically when cartItems change */}
            <div className={styles.totals}>
              <div className={styles.totalRow}>
                <span>Subtotal</span>
                <span>Rs. {subtotal.toFixed(2)}</span>
              </div>
              <div className={styles.totalRow}>
                <span>Shipping</span>
                <span>Rs. {shippingFee.toFixed(2)}</span>
              </div>
              <div className={`${styles.totalRow} ${styles.finalTotal}`}>
                <strong>Total</strong>
                <strong>Rs. {(subtotal + shippingFee).toFixed(2)}</strong>
              </div>
            </div>

            <button className={styles.checkoutBtn}>Confirm Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;