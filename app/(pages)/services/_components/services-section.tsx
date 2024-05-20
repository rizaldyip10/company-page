import { cn } from '@/lib/utils'
import { BarChartBig, Building2, FileBadge, FileCode, Handshake, LibraryBig, Square } from 'lucide-react'
import React from 'react'
import ServicesCard from '@/components/service-card'
import { Poppins } from 'next/font/google'
import AnimationWrapper from '@/components/animation'

const poppins = Poppins({
    weight: '700',
    subsets: ['latin']
})

const service = [
    {
        label: 'Financial Consultancy',
        href: '/services/financial-consultancy',
        icon: Handshake
    },
    {
        label: 'Bussiness Management',
        href: '/services/bussiness-management',
        icon: BarChartBig
    },
    {
        label: 'Consultant Programs',
        href: '/services/consultant-programs',
        icon: FileCode
    },
    {
        label: 'Company Management',
        href: '/services/company-management',
        icon: Building2
    },
    {
        label: 'Financial & Insurance Job',
        href: '/services/financial-and-insurance-jobs',
        icon: FileBadge
    },
    {
        label: 'Bank Management',
        href: '/services/bank-management',
        icon: LibraryBig
    }
]

const ServicesSection = () => {
  return (
    <div className='w-full flex justify-center items-center px-5 py-20'>
            <div className='flex w-full flex-col justify-center items-center gap-10'>
                <AnimationWrapper classname='flex flex-col max-w-[495px] items-center justify-center text-center gap-4'>
                    <div className='flex items-center gap-1'>
                        <Square className='bg-[#40DDB6] w-3 h-3 text-[#40DDB6]' />
                        <p className='text-lg font-medium'>We Are Expertise In</p>
                    </div>
                    <h1 className={cn('text-4xl', poppins.className)}>We Provide Professional Bussiness Solution</h1>
                </AnimationWrapper>

                <div className='w-full md:max-w-[1220px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {
                        service.map((item, index) => (
                            <AnimationWrapper key={index} transition={{ duration: .7, delay: index * .1}}>
                                <ServicesCard label={item.label} href={item.href} icon={item.icon} />
                            </AnimationWrapper>
                        ))
                    }
                </div>
            </div>
        </div>
  )
}

export default ServicesSection