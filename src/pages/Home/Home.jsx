import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <h1>Know Your Parrot</h1>
        <h3>Everything your parrot needs — from care to comfort</h3>
      </header>

      <div className={styles.gradientBar}>
        <img src="/Project Assets/grad-bar-img.png" alt="gradient" />
      </div>

      {/* About Us */}
      <section className={styles.aboutUs}>
        <div className={styles.aboutUsImgContainer}>
          <img src="/Project Assets/about us img.png" id={styles.aboutUsImg} alt="Parrots" />
        </div>
        <div className={styles.aboutUsInfo}>
          <div className={styles.headingContainer}>
            <img src="/Project Assets/chat green parrot fly.png" id={styles.headingImg} alt="" />
            <h2>About Us</h2>
          </div>
          <p>At Know Your Parrot, we believe every parrot deserves a happy and healthy life.</p>
          <p>We provide reliable care guides and quality supplies — all in one place.</p>
          
          <div className={styles.btnAndTextContainer}>
            <p>Explore our curated range of food, cages, treats, and toys...</p>
            <Link to="/shop">
              <div className={styles.btnContainer}>
                <div className={styles.btnImgContainer}>
                  <img src="/Project Assets/chat cockatiel.png" className={styles.btnImg} alt="" />
                  <img src="/Project Assets/chat blue gold macaw.png" className={styles.btnImg} alt="" />
                </div>
                <button>Check Out our Products</button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className={styles.guidesSection}>
        <div className={styles.guidesAll}>
          <div className={styles.guidesInfo}>
            <h3 style={{fontFamily: 'var(--side-notes)', color: 'var(--text-subheading-clr)'}}>Feather Facts</h3>
            <h2>Guides</h2>
            <p>Because raising a parrot is more than just a tweet...</p>
            <Link to="/guides">
              <div className={styles.btnContainer}>
                <button>Check Out our Guides</button>
              </div>
            </Link>
          </div>

          <div className={styles.mulGuides}>
            <div className={styles.guideCard}>
              <Link to="/parrot-guide/cockatiel">
                <img src="/Project Assets/chat cockatoo.png" alt="Cockatoo" />
                <button>Cockatoo</button>
              </Link>
              <p>Loud, proud, and always the drama queen of the flock!</p>
            </div>
            <div className={styles.guideCard}>
              <Link to="/parrot-guide/cockatiel">
                <img src="/Project Assets/chat cockatiel.png" alt="Cockatiel" />
                <button>Cockatiel</button>
              </Link>
              <p>The whistling diva with bedhead vibes!</p>
            </div>
          </div>
        </div>
      </section>

    {/* Shop Section */}
<section className={styles.shopSection}>
  <div className={styles.shopAll}>
    <div className={styles.products}>
      <div className={styles.productCard}>
        <Link to="/shop-toys">
          <img src="/Shop Assets/toys.png" alt="Toys" />
          <button>Toys</button>
        </Link>
      </div>
      <div className={styles.productCard}>
        <Link to="/shop-food">
          <img src="/Shop Assets/food.png" alt="Food" />
          <button>Food</button>
        </Link>
      </div>
      <div className={styles.productCard}>
        <Link to="/shop-accessories">
          <img src="/Shop Assets/accessories.png" alt="Accessories" />
          <button>Cage Accessories</button>
        </Link>
      </div>
    </div>

    <div className={styles.shopInfo}>
      <div className={styles.shopHeadingContainer}>
        <h3 style={{ fontFamily: 'var(--side-notes)', color: 'var(--text-subheading-clr)' }}>
          Feather Up Your Cart
        </h3>
        <img src="/Project Assets/Parrot cart img.png" className={styles.cartIcon} alt="" />
      </div>
      <Link to="/shop">
        <h2 className={styles.shopNowText}>Shop Now</h2>
      </Link>
      <p>From toys to treats — keep your bird chirpy and chic!</p>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default Home;