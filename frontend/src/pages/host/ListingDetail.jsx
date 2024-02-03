import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import products from "../../assets/data";
import "../../css/pages.css";

export default function ListingDetail() {
    const params = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const matchedProduct = products.find((product) => product.id === parseInt(params.id));
  
      if (matchedProduct) {
        setProduct(matchedProduct);
      }
    }, [params.id]);
  
    if (!product) {
      return <h1>Product not found...</h1>;
    }

    return (
        <section className="listed-product-page">
          <Link
            to=".."
            className="back-button"
          >&larr; <span>Back to all products</span></Link>
  
          <h1 className="product-name">{product.name}</h1>
          <img src={product.image} alt={product.name} />
          
          <div className="item-info">
            <div>Name: {product.name}</div>
            <div><strong>Description:</strong> {product.description}</div>
            <div><strong>Category:</strong> {product.category}</div>
          </div>

        </section>
    )
}