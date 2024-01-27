import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import products from "../../assets/data";

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
        <>
            <div className='product-details'>
                <h1>Name: {product.name}</h1>
                <p>Description: {product.description}</p>
                <img src={product.image} alt={product.name} />
            </div>
        </>
    )
}