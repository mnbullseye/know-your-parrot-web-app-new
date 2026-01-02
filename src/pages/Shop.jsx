import React from 'react';
import { Link } from 'react-router-dom'; 
import './ShopPageStyle.css';

const ShopPage = () => {
  return (
    <div>
      <main>
        <section className="heading">
          <h1>Shop</h1>
          <h2>Feather up your cart</h2>
        </section>

        <section className="category">
          {/* Category: Toys */}
          <div className="cat">
            <Link to="/shop-toys" id="img1"></Link>
            <Link to="/shop-toys">
              <button>Toys</button>
            </Link>
            <p>Play time!</p>
          </div>

          {/* Category: Food */}
          <div className="cat">
            <Link to="/shop-food" id="img2"></Link>
            <Link to="/shop-food">
              <button>Food</button>
            </Link>
            <p>Rawr!! I'm hungry</p>
          </div>

          {/* Category: Accessories */}
          <div className="cat">
            <Link to="/shop-accessories" id="img3"></Link>
            <Link to="/shop-accessories">
              <button>Accessories</button>
            </Link>
            <p>Human, decorate my cage</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShopPage;