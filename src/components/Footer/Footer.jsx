import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Parrot Row */}
      <div className={styles.footerParrotContainer}>
        <div className={styles.footerParrotImagesContainerLeft}>
          <img src="/Project Assets/chat scarlet macaw.png" alt="Scarlet Macaw" />
          <img src="/Project Assets/chat green parrot.png" alt="Green Parrot" />
        </div>
        <div className={styles.footerParrotImagesContainerRight}>
          <img src="/Project Assets/chat cockatiel.png" alt="Cockatiel" />
          <img src="/Project Assets/chat blue gold macaw.png" alt="Blue and Gold Macaw" />
        </div>
      </div>

      {/* Main Footer Info */}
      <div className={styles.footerInfo}>
        <div className={styles.icons}>
          <a href="https://x.com/" target="_blank" rel="noreferrer">
            <span className={styles.footerIcon}><i className="fa-brands fa-x-twitter"></i></span>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <span className={styles.footerIcon}><i className="fab fa-facebook"></i></span>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <span className={styles.footerIcon}><i className="fab fa-instagram"></i></span>
          </a>
          <Link to="/contact">
            <span className={styles.footerIcon}><i className="fa-solid fa-phone"></i></span>
          </Link>
        </div>
        <p>&copy; Know Your Parrot all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;