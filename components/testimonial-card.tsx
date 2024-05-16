import RatingStars from '@/components/star-generator';
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface UserItems {
    img: StaticImageData;
    name: string;
    job: string;
}

interface TestimonialCardProps {
    user: UserItems;
    reviews: string;
    rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ user, reviews, rating }) => {
    return (
        <div className='w-80 md:w-[411px] flex flex-col bg-[#F6F6F6] gap-9 px-9 py-12'>
            <div className='flex gap-4'>
                <Image src={user.img} alt={user.name} className='w-24 h-24 rounded-full' />
                <div className='flex flex-col gap-1'>
                    <h3 className='text-xl font-semibold'>{ user.name }</h3>
                    <p className='text-base text-[#7D7D7D]'>{ user.job }</p>
                    <RatingStars rating={rating} />
                </div>
            </div>
            <div>
                <p className='text-xl text-[#7D7D7D] italic'>&quot; { reviews } &quot;</p>
            </div>
        </div>
    )
}

export default TestimonialCard