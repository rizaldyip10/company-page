import SectionTitle from '@/components/section-title'
import React from 'react'
import InputSection from './input-section'

const ContactUsSection = () => {
    return (
        <div className='w-full flex justify-center items-center max-xl:px-10 px-36 mt-12 mb-36'>
            <div className='w-full flex flex-col items-center gap-10'>
                <div className='flex flex-col items-center gap-4 text-center'>
                    <SectionTitle title='Contact Us' />
                    <h1 className='font-bold text-4xl'>Request a Callback !</h1>
                </div>
                <InputSection />
            </div>
        </div>
    )
}

export default ContactUsSection