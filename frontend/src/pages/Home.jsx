import React from "react";
import products from "../assets/data";
import ProductCard from "../components/ProductCard";

function Home() {
        
    return (
        <>
            <h1>Home</h1>
            <div className="product-list">
                {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}          
            </div>
        </>
    )
}

export default Home;