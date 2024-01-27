import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    
    return (
        <Link to={`/products/${product.id}`} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
        </Link>
    )
}

export default ProductCard;