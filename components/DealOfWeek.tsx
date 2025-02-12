import React from 'react'
import ProductCard from './ProductCard';

function DealOfWeek() {
    const products = [{
        id: 1,
        image: "/banner1.jpg", // Replace with actual image path
        title: "Limited Edition Sneakers",
        price: "$99.99",
        link: "/product/1",
        stars: 4,
        percentageDiscount: 20,
        dealExpiry: "2025-02-20T23:59:59", // Example expiry date (YYYY-MM-DDTHH:mm:ss)
    }];

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
          <h2 className="font-extrabold text-3xl text-center mb-10">Deal Of The Week</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {validDeals.map((product)=>(
                    <ProductCard key={product.id} product={product} showCountDown={true} />
                ))}
            </div>
        </div>
    );
}

export default DealOfWeek