import { Star, StarHalf } from 'lucide-react'
import React from 'react'

interface RatingStarsProps {
    rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
    // Calculate full stars
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
    // Function to generate an array of stars based on the count
    const generateStars = (count: number, type: string) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars.push(<Star className='h-5 w-5 text-[#FFA722]' key={i} />);
      }
      if (type === 'half') {
        stars.push(<StarHalf className='h-5 w-5 text-[#FFA722]' key="half" />);
      }
      return stars;
    };
  
    return (
      <div className='flex'>
        {generateStars(fullStars, 'full')}
        {hasHalfStar && generateStars(0, 'half')}
        {generateStars(emptyStars, 'empty')}
      </div>
    );
  };
  
  export default RatingStars;