import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <span className={styles.navBtn} onClick={() => setIsOpen(true)}>
                <i className="fas fa-bars"></i>
            </span>
            <nav className={`${styles.sidebar} ${isOpen ? styles.show : ''}`}>
                <div className={styles.navbarHeader}>
                    <span className={styles.closeIcon} onClick={() => setIsOpen(false)}>
                        <i className="fas fa-times"></i>
                    </span>
                </div>
                <ul className={styles.navLinks}>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/guides">Guides</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/Contactus">Contact us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </nav>
        </>
    );
};
export default Navbar;