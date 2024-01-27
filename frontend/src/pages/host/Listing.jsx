import React from "react";
import products from "../../assets/data";
import ListedProductCard from "../../components/ListedProductCard";
import '../../css/listing.css';

export default function Listing() {
    return (
        <div className="listing-page">
            <header className="listing-heading">Your listed products</header>
            <div className="listing-list">
                {products.map(product => (
                        <ListedProductCard key={product.id} product={product} />
                    ))}          
            </div>
        </div>
    )
}