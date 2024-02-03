import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../assets/data";

export default function ListingPricing() {
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
        <section className="pricing-container">
            <h1>Pricing</h1>

            <div>
                <p>Price: ${product.price}</p>
            </div>
        </section>
    )
}