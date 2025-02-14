'use client';
import { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md w-fit">
      <button 
        onClick={decreaseQuantity} 
        className="px-3 py-2 text-lg  rounded-l-md"
      >
        -
      </button>
      <span className="px-4 py-2 text-lg font-semibold">{quantity}</span>
      <button 
        onClick={increaseQuantity} 
        className="px-3 py-2 text-lg  rounded-r-md"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
