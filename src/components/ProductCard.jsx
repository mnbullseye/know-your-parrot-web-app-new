import { Link } from 'react-router-dom';
import './ProductCardStyle.css';

// Destructure the product object from props
function ProductCard({ product }) {
    return (
        <div className="product">
            {/* Link to the dynamic description page using the product ID */}
            <Link to={`/description/${product.id}`}>
                <img src={product.image_url} alt={product.name} />
            </Link>
            <div className="pro-description">
                <span>
                    <Link to={`/description/${product.id}`}>{product.name}</Link>
                    <p>Rs.{product.price}</p>
                </span>
                {/* This Link will eventually trigger your addToCart function */}
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                    <i className="fa fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;