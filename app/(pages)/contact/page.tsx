import React from 'react'
import HeroSmall from '@/components/small-hero'
import contactImg from '@/imgs/contact.webp'
import ContactDetail from './_components/contact-detail'
import ContactUsSection from './_components/contact-us-section'
import useFetchTeams from '@/hooks/useFetchTeams'

const ContactPage = () => {
    return (
        <div className='h-full'>
            <HeroSmall 
                pageName='Contact Us'
                title='Feel Free to Reach Us'
                img={contactImg}
            />
            <ContactDetail />
            <ContactUsSection />
        </div>
    )
}

export default ContactPage