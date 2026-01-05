import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DescriptionStyle.css';

const ProductDescription = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
    
  // 1. ADDED: State for quantity
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Product not found");
          return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching details:", err);
        setLoading(false);
      });
  }, [id]);

  // 2. ADDED: Simple handler for the button


  if (loading) return <p className="loading">Loading product details...</p>;
  if (!product) return <p className="error">Product not found!</p>;

  return (
    <div className="product-detail-container">
      <header className="description-header">
        <Link to="/"><i className="fa fa-arrow-left"></i> Back to Shop</Link>
          <Link to="/cart"><i className="fa fa-shopping-cart"></i></Link>
      </header>

      <main className="product-detail-page">
        <div className="product-image-section">
          <img id="product-image" src={product.image_url} alt={product.name} />
        </div>

        <div className="product-info-section">
        {/* 3. FIXED: Changed .title to .name and handled title_line */}
          <h1 className="product-name">
            {product.name} {product.title_line ? `- ${product.title_line}` : ''}
          </h1>

          <p className="product-price">Rs. {Number(product.price).toFixed(2)}</p>

          <div className="product-description">
            <span className="description-heading">Product Details</span>
            <p>{product.description || "No description available for this item."}</p>
                        
            <span className="description-heading">Key Features</span>
            <ul>
              <li>Durable materials.</li>
              <li>Pet-safe quality.</li>
              <li>Easy to use/install.</li>
            </ul>
          </div>

          <div className="purchase-controls">
            <div className="quantity-control">
              <label htmlFor="quantity">Quantity:</label>
              <input 
                type="number" 
                id="quantity"
                value={quantity} 
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1" 
                max="10" 
              />
            </div>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              <i className="fa fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDescription;