'use client';
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import ProductReviews from './ProductReviews';
import ProductDescTab from './ProductDescTab';

const ProductTabs = () => {
    const [selectedIndex, setSelectedIndex] = useState(2);
    const reviews = {
      count: 1,
    }

    //review data
    const reviewData = {
      count: 1,
      averageRating: 4,
      productName: "Thrustmaster TH8S Shifter Add-On Mannual Ge",
      reviews: [
    {
      id: 1,
      user: "John Doe",
      date: "Feb 10, 2024",
      title: "Great product!",
      description: "This product exceeded my expectations. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      user: "Mary Anne",
      date: "Jan 10, 2025",
      // title: "Fast Delivery",
      description: "This product exceeded my expectations. Highly recommended!",
      rating: 3,
    },
    ]
    }

    //description data
    const description = {
      id: 1,
      about: "The Easy One Touch 5 Dash and Windshield Mount is the next generation of our best-selling, universal smartphone car mount. Engineered to safely enhance your driving experience, the Easy One Touch 5 features our patented Easy One Touch mechanism, which allows you to lock and release smartphones quickly with an easy one handed motion. Recognized for its superior quality and sleek design, the new Easy One Touch 5 series includes a new finish that complements modern automotive interiors.",
      technicalDetails: [
        { name: "Manufacturer", value: "Lisle",},
        {name: "Brand",value: "Lisle"},{name: "Product Dimemsions", value: "27.94 x 27.94 x 12.7 cm; 861.83 Grams"},
        {name: "Item model number", value: "25750"},{name: "Manufacturer Part Number", value: "25750"},
        {name: "Country of Origin", value: "USA"},{name: "Item Weight", value: "3 kg"}
      ]
    }
    return (
      <div className="px-4 mb-10">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          {/* Tab List */}
          <Tab.List className="flex justify-start md:justify-center space-x-2 border-b whitespace-nowrap overflow-x-auto scrollbar-hide">
            {['Description', `Reviews (${reviews.count})`].map((tab, index) => (
              <Tab key={index} className={({ selected }) =>
                `px-4 py-2 text-lg font-medium flex-shrink-0 focus:outline-none ${
                  selected ? 'border-b-2 border-primary font-semibold' : 'text-gray-700'
                }`
              }>
                {tab}
              </Tab>
            ))}
          </Tab.List>
  
          {/* Tab Panels */}
          <Tab.Panels className="mt-4">
            <Tab.Panel>
              <ProductDescTab description={description} />
            </Tab.Panel>
            <Tab.Panel>
              <ProductReviews reviews={reviewData} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    )
  }
  
  export default ProductTabs
  
