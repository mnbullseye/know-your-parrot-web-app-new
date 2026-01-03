import './ProductCardStyle.css';
import { Link } from 'react-router-dom';

function ProductCard ({productImg, productName, productId, productPrice}) {
    return(
    <div className="product">
        <Link to='#'>
            <img src={productImg} alt={productName}/>
        </Link>
            <div className="pro-description">
                <span>
                    <Link to='#'>{productName}</Link>
                    <p>{productPrice}</p>
                </span>
                <Link to='#' className="add-to-cart" data-product-id={productId}>
                    <i class="fa fa-shopping-cart"></i>
                </Link>
            </div>
    </div>
    )
}
export default ProductCard;