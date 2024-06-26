import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

interface ServicesCardProps {
    label: string;
    href: string;
    icon: LucideIcon;
}

const poppins = Poppins({
    weight: '600',
    subsets: ['latin']
})

const ServicesCard: React.FC<ServicesCardProps> = ({ label, href, icon: Icon }) => {
    return (
        <div className='w-full flex flex-col max-sm:justify-center max-md:items-center min-h-[173px] xl:h-[173px] bg-[#F4F4F4] p-7 gap-7'>
            <div className='w-full flex flex-col-reverse md:flex-row justify-between items-center gap-7 md:gap-20'>
                <div className='max-w-[188px] max-md:text-center'>
                    <h1 className={cn('text-2xl', poppins.className)}>{ label }</h1>
                </div>
                <div className='h-[65px] w-[65px] rounded-full bg-[#40DDB6] flex justify-center items-center'>
                    <Icon className='text-white' />
                </div>
            </div>
            <Link href={href}>
                <p className='text-lg font-semibold text-[#6B77E5]'>See Detail</p>
            </Link>
        </div>
    )
}

export default ServicesCard