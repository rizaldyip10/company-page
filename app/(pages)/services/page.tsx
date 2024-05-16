import React from 'react'
import HeroSmall from '@/components/small-hero'
import servicesImg from '@/imgs/ourservices.webp'
import ServicesSection from './_components/services-section'
import OffersSection from './_components/offers-section'
import Testimonial from '@/components/testimonial'

const ProductPage = () => {
    return (
        <div className='h-full'>
            <HeroSmall 
                pageName='Our Services'
                img={servicesImg}
                title="We're Offering"
                content='Collaboratively administrate empowered markets plug and play networks dynamically procrastinated '
            />
            <ServicesSection />
            <OffersSection />
            <Testimonial />
        </div>
    )
}

export default ProductPage