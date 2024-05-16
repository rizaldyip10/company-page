import React from 'react'
import Hero from './_components/hero'
import CompanyDetail from './_components/company-detail'
import ClientList from './_components/client-list'
import ServicesList from './_components/services-list'
import ChooseUs from './_components/choose-us'
import ProjectsList from './_components/projects-list'
import Testimonial from '@/components/testimonial'
import TeamSection from './_components/team-section'

const HomePage = () => {
    return (
        <div className='w-full -mt-20'>
            <Hero />
            <CompanyDetail />
            <ClientList />
            <ServicesList />
            <ChooseUs />
            <ProjectsList />
            <Testimonial />
            <TeamSection />
        </div>
    )
}

export default HomePage