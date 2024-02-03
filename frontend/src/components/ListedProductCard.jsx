import React from "react";
import { Link } from "react-router-dom";
import '../css/products-display.css';

function ListedProductCard({ product }) {
    return(
        <Link to={`/host/listing/${product.id}`} className="listed-product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}:</h3>
            <span>${product.price}</span>
        </Link>
    )
}

export default ListedProductCard;