'use client';
import StarRating from "../ui/StarRating";
import { Star,User } from "lucide-react";
import { useState } from "react";

interface Review  {
    count: number; //review count
    averageRating: number; //average review rating
    productName: string; //name of the product been reviewed
    reviews: IndividualReviews[];
}

interface IndividualReviews {
    id: number;
    user: string; //name of the user who left a review
    title?: string; //title of the review
    description: string; //text description of the user
    rating: number; // user rating between 0 to 5
    date: string; //date the review was made
}
const ProductReviews:React.FC<{reviews: Review}> = ({reviews}) => {
    //fill star on hover 
    const [fillStar, setFillStar] = useState<number | null>(null);
    //use state to store the users rating value on click
    const [rating, setRating] = useState<number | null>(null);
  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-4 ">
            {reviews.count === 0 ? (
                <p className="text-xl">No reviews yet. <span className="font-semibold"> Be the first to write a review.</span></p>
            ): <p className="text-xl">{reviews.count} reviews for <span className="font-semibold">{reviews.productName}</span></p>}
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex justify-center bg-gray-100 shadow-md p-8 w-full">
                    <div className="font-bold text-2xl lg:text-xl"><span className="text-primary">{reviews.averageRating}</span> out of 5 stars</div>
                </div>
                <div className="flex justify-center bg-gray-100 shadow-md p-8 w-full">
                    <div className="flex flex-col items-center space-y-2">
                        <div className="font-bold text-2xl  lg:text-xl">Average Rating</div>
                        <StarRating stars={reviews.averageRating} size={14}/>
                    </div>
                </div>
            </div>
            {reviews.reviews.map((review) => (
                <div key={review.id} className="p-6 border-2 border-gray-300 hover:shadow-md">
                <div  className="flex items-center flex-row space-x-2">
                    <User size={20} className="border-gray-500 p-2 border-2 rounded-full w-[75px] h-[50px] md:w-[50px] md:h-[50px]"/>
                    <div className="flex flex-col space-y-2">
                        <div className="flex flex-row justify-between">
                            <p className="text-sm">{review.date}</p>
                            <StarRating size={12} stars={review.rating} />
                        </div>
                        <div className="text-gray-400">{review.description}</div>
                        {review.title != undefined && (
                            <div className="font-bold">{review.title}</div>
                        )}
                    </div> 
                </div>
                </div>
            ))}
        </div>
        <div className="flex flex-col space-y-4">
            <p className="font-semibold text-xl">Add a review</p>
            <div className="shadow-md bg-gray-100">
                <form className="p-4">
                    <div className="text-gray-700 flex flex-col space-y-2">
                        <p className="text-xs">Your email will not published, Required fields are marked <span className="text-red-600">*</span></p>
                        <label htmlFor="your rating">Your Rating</label>
                        <div className="flex space-x-2 items-center"
                        onMouseLeave={() => setFillStar(null)}>
                            {[...Array(5)].map((_,i) => (
                                <Star
                                key={i}
                                size={16}
                                onMouseEnter={() => setFillStar(i)}
                                onClick={() => {setRating(i + 1); console.log("selected rating:",i+1);}}
                                className={`cursor-pointer ${((fillStar !== null && i <= fillStar) || (rating !== null && i < rating)) ? "text-primary fill-current":"text-gray-700" } `}
                                /> 
                            ))}
                        </div>
                        <label htmlFor="Review Title">Review Title <span className="text-red-600">*</span></label>
                        <input type="text" className="h-8 focus:outline-none px-2 focus:border border-black" />
                        <label htmlFor="Your Review">Your Review <span className="text-red-600">*</span></label>
                        <textarea rows={2} cols={4} className="focus:outline-none px-2 focus:border border-black" ></textarea>
                        <label htmlFor="Name">Name <span className="text-red-600">*</span></label>
                        <input type="text" className="h-8 focus:outline-none px-2 focus:border border-black" />
                        <label htmlFor="Email">Email <span className="text-red-600">*</span></label>
                        <input type="text" className="h-8 focus:outline-none px-2 focus:border border-black" />
                    </div>
                    <button type="submit" className="p-2 text-black bg-primary hover:text-white hover:bg-black mt-4 rounded-full px-8">SUBMIT</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ProductReviews