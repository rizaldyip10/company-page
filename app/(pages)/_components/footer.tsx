import React from 'react'
import FooterContact from './footer-contact'
import FooterLink from './footer-link'
import FooterCopyRight from './footer-copyright'

const Footer = () => {
    return (
        <div className='w-full flex justify-start items-center md:justify-center bg-[#37393F] px-10 md:px-40 py-24'>
            <div className='flex flex-col gap-12'>
                <FooterContact />
                <FooterLink />
                <FooterCopyRight />
            </div>
        </div>
    )
}

export default Footer