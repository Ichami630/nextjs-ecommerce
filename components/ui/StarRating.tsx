import { Star } from "lucide-react";

const StarRating: React.FC<{stars?: number,size: number}> = ({stars,size}) => {
  return (
    <div className="flex space-x-1 items-center">
        {[...Array(5)].map((_,i) => (
            <Star
            key={i}
            size={size}
            className={`fill-current ${(stars && i < stars) ? "text-primary":"text-gray-300"}`}
            /> 
        ))}
    </div>
  )
}

export default StarRating