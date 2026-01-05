import React from 'react';
import { useCart } from '../../context/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, updateQuantity, subtotal, total, SHIPPING_COST } = useCart();

  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.title}>Your Parrot Cart</h2>
      <div className={styles.cartWrapper}>
        <div className={styles.itemsContainer}>
          {cart.length === 0 ? (
            <p className={styles.emptyMsg}>Your cart is empty. Check the database for new treats!</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className={styles.item}>
                <img src={item.image} alt={item.name} className={styles.itemImg} />
                <div className={styles.itemSummary}>
                  <h4>{item.name}</h4>
                  <div className={styles.countContainer}>
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span className={styles.count}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <p className={styles.priceDetail}>
                    Rs.{ (parseFloat(item.price) * item.quantity).toFixed(2) }
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className={styles.summaryContainer}>
          <h4>Order Summary</h4>
          <div className={styles.summaryRow}>
            <span>SubTotal</span>
            <span>Rs.{subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping (XAMPP Delivery)</span>
            <span>Rs.{SHIPPING_COST.toFixed(2)}</span>
          </div>
          <div className={styles.line}></div>
          <div className={`${styles.summaryRow} ${styles.total}`}>
            <span>Total</span>
            <span>Rs.{total.toFixed(2)}</span>
          </div>
          <button className={styles.checkoutBtn} disabled={cart.length === 0}>
            Place Database Order
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;