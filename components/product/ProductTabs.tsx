'use client';
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import ProductReviews from './ProductReviews';

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
    return (
      <div className="px-4 mb-10">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          {/* Tab List */}
          <Tab.List className="flex justify-start md:justify-center space-x-2 border-b whitespace-nowrap overflow-x-auto scrollbar-hide">
            {['Description', 'Additional Information', `Reviews (${reviews.count})`].map((tab, index) => (
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
              <ProductDescription />
            </Tab.Panel>
            <Tab.Panel>
              <AdditionalInfo />
            </Tab.Panel>
            <Tab.Panel>
              <ProductReviews reviews={reviewData} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    )
  }
  
  // Description Component
  const ProductDescription = () => (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-bold">Product Description</h3>
      <p>This product is made from high-quality materials and offers amazing benefits...</p>
      <ul className="list-disc ml-5">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
    </div>
  )
  
  // Additional Info Component

  const AdditionalInfo: React.FC = () => (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-bold">Additional Information</h3>
      <table className="w-full border-collapse border border-gray-300 mt-2">
        <tbody>
          <tr className="border border-gray-300">
            <td className="p-2 font-semibold">Brand</td>
            <td className="p-2">XYZ Brand</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="p-2 font-semibold">Weight</td>
            <td className="p-2">500g</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="p-2 font-semibold">Manufacturer</td>
            <td className="p-2">ABC Ltd.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
  
  export default ProductTabs
  
