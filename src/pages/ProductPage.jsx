import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../products.json'; // Direct import or fetch
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
  // 1. Get the category from the URL (e.g., /shop/:category)
  const { category } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 2. Filter products based on category (toys, food, or accessories)
    if (productsData[category]) {
      setProducts(productsData[category]);
    }
  }, [category]);

  // Dynamic Headings based on category
  const titles = {
    toys: { h1: "Toys", h2: "Play time!" },
    food: { h1: "Food", h2: "Rawr! Give me Food" },
    accessories: { h1: "Accessories", h2: "A bird is more than just a tweet" }
  };

  const currentTitle = titles[category] || { h1: "Shop", h2: "Our Products" };

  return (
    <div className="shop-container">
      <section className="intro">
        <h1>{currentTitle.h1}</h1>
        <h2>{currentTitle.h2}</h2>
      </section>

      <main id="products-container" className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            // In React, pass the addToCart logic via context or props
          />
        ))}
      </main>
    </div>
  );
};

export default ShopPage;