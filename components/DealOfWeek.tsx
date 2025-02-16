import React from 'react'
import ProductCard from './ProductCard';

function DealOfWeek() {
    const products = [
        {
            id: 1,
            image: "/products/bed1.jpg", // Replace with actual image path
            title: "Limited Edition Sneakers",
            price: 100,
            link: "/product",
            stars: 5,
            percentageDiscount: 25,
            dealExpiry: "2025-12-20T23:59:59", // Example expiry date (YYYY-MM-DDTHH:mm:ss)
        },
        {
            id: 2,
            image: "/products/bed2.webp", // Replace with actual image path
            title: "Limited Edition Sneakers",
            price: 99.99,
            link: "/product",
            stars: 3,
            percentageDiscount: 50,
            dealExpiry: "2025-05-20T23:59:59", // Example expiry date (YYYY-MM-DDTHH:mm:ss)
        },
        {
            id: 3,
            image: "/products/nissan.jpeg", // Replace with actual image path
            title: "Limited Edition Sneakers",
            price: 99.99,
            link: "/product",
            stars: 4,
            percentageDiscount: 10,
            dealExpiry: "2026-05-20T23:59:59", // Example expiry date (YYYY-MM-DDTHH:mm:ss)
        },
        {
            id: 4,
            image: "/products/suzuki.jpeg", // Replace with actual image path
            title: "Limited Edition Sneakers",
            price: 109.99,
            link: "/product",
            stars: 5,
            percentageDiscount: 15,
            dealExpiry: "2025-06-20T23:59:59", // Example expiry date (YYYY-MM-DDTHH:mm:ss)
        }
    ];

    //filter out expired products
    const currentTime = new Date().getTime();

    const validDeals = products.filter((product)=>
        product.dealExpiry && new Date(product.dealExpiry).getTime() > currentTime
    )
    //condition to show ot not show the deal of the week section
    if(validDeals.length === 0){
        return null;
    }
    return (
        <div className="px-4 mb-10">
          <h2 className="font-extrabold text-3xl text-center mb-10">Deals Of The Week</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {validDeals.map((product)=>(
                    <ProductCard key={product.id} product={product} showCountDown={true} />
                ))}
            </div>
        </div>
    );
}

export default DealOfWeek