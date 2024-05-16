import HeroSmall from '@/components/small-hero'
import React from 'react'
import serviceDetailImg from '@/imgs/serviceDetail.webp'
import serviceHeroImg from '@/imgs/service-hero.webp'
import Image from 'next/image'
import CompanyBenefit from '../_components/company-benefit'
import SideMenu from '../_components/side-menu'
import FileDownload from '../_components/file-download'

const ServiceDetailPage = ({ params }: { params: { servicesDetail: string } }) => {
  const serviceName = params.servicesDetail.split("-").join(" ");
  return (
    <div className='h-full'>
      <HeroSmall title={serviceName} img={serviceDetailImg} pageName='About the Service' />
      <div className='w-full flex flex-col md:flex-row-reverse py-32 px-10 lg:px-64 gap-12'>
        <div className='flex flex-col gap-10 w-full md:w-3/5'>
          <Image alt='hero' src={serviceHeroImg} />
          <div className='w-full flex flex-col gap-1'>
            <h1 className='capitalize text-2xl font-semibold'>Why Us For International {serviceName} Consulting!</h1>
            <p className='text-base text-[#7D7D7D]'>Completely synergized resourced taxings relationships premiers markets ultivate one-to-one customer service with robust ideas dynamically innovated resources leveling customer service for state of the art  customer service innovate product  for reliable supply engage web services cutting-edge deliverables.</p>
          </div>
          <div className='w-full flex flex-col gap-3'>
            <h2 className='text-xl text-[#6B77E5] font-semibold'>Proactively envisioned multimedia based expertise media growth superior collaboration.</h2>
            <p className='text-base text-[#7D7D7D]'>One-to-one customer service with robust ideas dynamically innovated resources for reliable supply engage web services cutting-edge deliverables.</p>
          </div>
          <div className='w-full'>
            <CompanyBenefit />
          </div>
        </div>
        <div className='flex flex-col gap-12 w-full md:w-2/5'>
          <SideMenu />
          <FileDownload />
        </div>
      </div>
    </div>
  )
}

export default ServiceDetailPage