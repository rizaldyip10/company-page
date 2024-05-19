import SectionTitle from '@/components/section-title'
import React from 'react'
import client1 from '@/imgs/client1.png'
import client2 from '@/imgs/client2.jpg'
import TestimonialCard from './testimonial-card'
import AnimationWrapper from './animation'

const userReviews = [
    {
        user: {
            name: 'Natasha Kelvin',
            job: 'Designer',
            img: client1
        },
        review: 'dd an excerpt from your personal biography, or simply let the world know who you are and what you have to offer. Connect with your site visitor’s on a personal level and make sure that your site.',
        rating: 4.5
    },
    {
        user: {
            name: 'Cincinnati',
            job: 'Designer',
            img: client2
        },
        review: 'Leverage agile frameworks to provide a robust synopsis for high level overviews',
        rating: 4.5
    },
]

const Testimonial = () => {
    return (
        <div className='w-full flex justify-center items-center px-10 lg:px-20 pb-64'>
            <div className='max-w-[1220px] justify-center items-center md:items-start flex flex-col xl:flex-row gap-9 pt-36 border-t'>
                <div className='flex flex-col gap-5 px-5'>
                    <SectionTitle title='Testimonial' />
                    <h1 className='font-bold text-4xl'>What Our Client Say&apos;s</h1>
                    <p className='text-lg text-[#7D7D7D]'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-9'>
                    {
                        userReviews.map((review, index) => (
                            <AnimationWrapper key={index} transition={{ duration: 0.5, delay: index * .1}}>
                                <TestimonialCard user={review.user} reviews={review.review} rating={review.rating} />
                            </AnimationWrapper>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonial