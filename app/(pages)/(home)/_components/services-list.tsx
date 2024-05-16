import { BarChartBig, Building2, FileBadge, FileCode, Handshake, Square } from 'lucide-react'
import React from 'react'
import ServicesCard from '@/components/service-card'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import ColoredBtn from '@/components/colored-btn'

const poppins = Poppins({
    weight: '700',
    subsets: ['latin']
})

const service = [
    {
        label: 'Financial Consultancy',
        href: '',
        icon: Handshake
    },
    {
        label: 'Bussiness Management',
        href: '',
        icon: BarChartBig
    },
    {
        label: 'Consultant & Programs',
        href: '',
        icon: FileCode
    },
    {
        label: 'Company Management',
        href: '',
        icon: Building2
    },
    {
        label: 'Financial & Insurance Job',
        href: '',
        icon: FileBadge
    },
]

const ServicesList: React.FC = () => {
    return (
        <div className='w-full flex justify-center items-center px-5'>
            <div className='flex w-full flex-col justify-center items-center gap-10'>
                <div className='flex flex-col max-w-[495px] items-center justify-center text-center gap-4'>
                    <div className='flex items-center gap-1'>
                        <Square className='bg-[#40DDB6] w-3 h-3 text-[#40DDB6]' />
                        <p className='text-lg font-medium'>We Are Expertise In</p>
                    </div>
                    <h1 className={cn('text-4xl', poppins.className)}>We Provide Professional Bussiness Solution</h1>
                </div>

                <div className='w-full md:max-w-[1220px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {
                        service.map((item, index) => (
                            <ServicesCard label={item.label} href={item.href} icon={item.icon} key={index} />
                        ))
                    }
                    <ColoredBtn 
                        text='More Services'
                        href='/'
                        className='w-full min-h-[173px] bg-[#6B77E5] text-white text-center rounded-none hover:bg-[#40DDB6]'
                    />
                </div>
            </div>
        </div>
    )
}

export default ServicesList