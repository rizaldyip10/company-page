import React from 'react'
import contactImg from '@/imgs/contactdetail.webp'
import Image from 'next/image'
import SectionTitle from '@/components/section-title'
import { Mail, MapPin, Phone } from 'lucide-react'
import ContactCard from '@/components/contact-card'
import AnimationWrapper from '@/components/animation'

const contact = [
    {
        label: 'Have any question?',
        address: 'Free +01 569 896 654',
        icon: Phone
    },
    {
        label: 'Write email',
        address: 'info@example.com',
        icon: Mail
    },
    {
        label: 'Visit Anytime',
        address: 'King Street, Amsterdam',
        icon: MapPin
    },
]

const ContactDetail = () => {
    return (
        <div className='w-full pt-36 flex justify-center items-center max-xl:px-5 mb-12'>
            <AnimationWrapper classname='flex flex-col lg:flex-row max-w-[1220px] h-full gap-12'>
                <Image alt='contact' src={contactImg} width={585} height={454}  />
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-4'>
                        <SectionTitle title="Let's Talk" />
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-bold text-4xl text-[#37393F]'>Get in touch with us</h1>
                            <p className='text-lg text-[#7D7D7D]'>Completely synergize resource taxing relationships via premier niche ynamically innovate state of the art customer service.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-7'>
                        {
                            contact.map((item, index) => (
                                <ContactCard key={index} label={item.label} address={item.address} icon={item.icon} color='#6B77E5' gap='gap-4' />
                            ))
                        }
                    </div>
                </div>
            </AnimationWrapper>
        </div>
    )
}

export default ContactDetail