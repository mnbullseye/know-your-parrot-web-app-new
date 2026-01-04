import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../products.json'; // Ensure this path is correct
import './DescriptionStyle.css';

const ProductDescription = () => {
    // 1. Get the ID from the URL (e.g., /description/T001)
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // 2. Search all categories (toys, food, accessories) for the matching ID
        let foundProduct = null;
        for (const category in productsData) {
            foundProduct = productsData[category].find(p => p.id === id);
            if (foundProduct) break;
        }
        setProduct(foundProduct);
    }, [id]);

    if (!product) {
        return <div className="loading">Product Not Found...</div>;
    }

    const handleAddToCart = () => {
        // Logic for adding to cart (localStorage or Context)
        console.log(`Added ${quantity} of ${product.title} to cart.`);
        alert(`Added ${quantity} x ${product.title} to cart!`);
    };

    return (
        <div className="product-detail-container">
            <header className="description-header">
                <Link to="/"><i className="fa fa-bars"></i></Link>
                <Link to="/cart"><i className="fa fa-shopping-cart"></i></Link>
            </header>

            <main className="product-detail-page">
                <div className="product-image-section">
                    <img id="product-image" src={product.image_url} alt={product.title} />
                </div>

                <div className="product-info-section">
                    <h1 className="product-name">{product.title}: {product.title_line}</h1>
                    <p className="product-price">Rs. {product.price.toFixed(2)}</p>

                    <div className="product-description">
                        <span className="description-heading">Product Details</span>
                        <p>{product.description}</p>
                        
                        <span className="description-heading">Key Features</span>
                        <ul>
                            <li>Durable, natural materials.</li>
                            <li>Bright, food-grade safe colors.</li>
                            <li>Metal clip for easy cage attachment.</li>
                        </ul>
                    </div>

                    <div className="purchase-controls">
                        <div className="quantity-control">
                            <label htmlFor="quantity">Quantity:</label>
                            <input 
                                type="number" 
                                value={quantity} 
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                min="1" 
                                max="10" 
                            />
                        </div>
                        <button className="add-to-cart-btn" onClick={handleAddToCart}>
                            <i className="fa fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductDescription;