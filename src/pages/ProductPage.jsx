import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // 1. Import useParams
import ProductCard from '../components/ProductCard';
import './ProductPageStyle.css';

const ShopPage = () => {
  const { category } = useParams(); // 2. Get the category from the URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 3. Fetch data using the category from the URL
    let url = `http://localhost:5000/api/products?category=${category}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error:", err));
  }, [category]); // Re-run if the URL category changes

  const titles = {
    toys: { h1: "Toys", h2: "Play time!" },
    food: { h1: "Food", h2: "Rawr! Give me Food" },
    accessories: { h1: "Accessories", h2: "A bird is more than just a tweet" }
  };

  // The title now automatically follows the URL parameter
  const currentTitle = titles[category] || { h1: "Shop", h2: "Our Products" };

  return (
    <div className="shop-container">
      <section className="intro">
        <h1>{currentTitle.h1}</h1>
        <h2>{currentTitle.h2}</h2>
      </section>

      <main className="products-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products">No products found in this category.</p>
        )}
      </main>
    </div>
  );
};

export default ShopPage;