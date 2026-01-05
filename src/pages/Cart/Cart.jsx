import React from 'react';
import { useNavigate } from 'react-router-dom'; // To go to checkout
import { useCart } from '../../context/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, updateQuantity, subtotal, total, SHIPPING_COST } = useCart();
  const navigate = useNavigate();

  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.title}>Your Parrot Cart</h2>
      
      <div className={styles.cartWrapper}>
        {/* LEFT SIDE: LIST OF ITEMS */}
        <div className={styles.itemsContainer}>
          {cart.length === 0 ? (
            <div className={styles.emptyCartBox}>
                <p className={styles.emptyMsg}>Your cart is empty.</p>
                <button onClick={() => navigate('/shop')} className={styles.shopNowBtn}>Go to Shop</button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className={styles.itemCard}>
                <img src={item.image} alt={item.name} className={styles.itemImg} />
                <div className={styles.itemSummary}>
                  <h4>{item.name}</h4>
                  <div className={styles.controlsRow}>
                      <div className={styles.countContainer}>
                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <span className={styles.count}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                      <p className={styles.priceDetail}>
                        Rs. { (parseFloat(item.price) * item.quantity).toFixed(2) }
                      </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT SIDE: ORDER SUMMARY */}
        <div className={styles.summaryContainer}>
          <h4 className={styles.summaryHeading}>Order Summary</h4>
          <div className={styles.summaryRow}>
            <span>SubTotal</span>
            <span>Rs.{subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>Rs.{SHIPPING_COST.toFixed(2)}</span>
          </div>
          <div className={styles.line}></div>
          <div className={`${styles.summaryRow} ${styles.totalRow}`}>
            <strong>Total</strong>
            <strong>Rs.{total.toFixed(2)}</strong>
          </div>
          
          <button 
            className={styles.checkoutBtn} 
            disabled={cart.length === 0}
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;