import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FooterCopyRight = () => {
    return (
        <div className='w-full flex flex-col gap-4 pt-5 border-t justify-between border-[#6C6D72] md:flex-row'>
            <div className='flex gap-1 text-white'>
                <p>Copyright &copy;</p>
                <p className='text-[#40DDB6]'>WhiteCollar</p>
            </div>
            <div className='flex gap-2 items-center'>
                <p className='text-lg text-white'>Follow:</p>
                <div className='flex gap-3'>
                    <Link href='https://instagram.com'>
                        <Instagram className='w-5 h-5 text-white' />
                    </Link>
                    <Link href='https://facebook.com'>
                        <Facebook className='w-5 h-5 text-white' />
                    </Link>
                    <Link href='/https://twitter.com'>
                        <Twitter className='w-5 h-5 text-white' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FooterCopyRight