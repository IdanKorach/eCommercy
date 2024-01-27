import React from 'react'
import products from "../assets/data";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div className="product-list">
        {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}          
    </div>
  )
}

export default Products