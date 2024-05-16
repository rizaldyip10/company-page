import React from 'react'
import HeroSmall from '@/components/small-hero'
import aboutUsImg from '@/imgs/aboutus.jpg'
import VisionMision from './_components/vision-mission'
import WorkProcess from './_components/work-process'
import StatsSection from './_components/stats-section'
import Timeline from './_components/company-timeline'

const AboutPage = () => {
    return (
        <div className='w-full'>
            <HeroSmall 
                pageName='About Us' 
                img={aboutUsImg}
                title='Know About Us'
                content='Collaboratively administrate empowered markets plug and play networks dynamically procrastinated'
            />
            <VisionMision />
            <WorkProcess />
            <StatsSection />
            <Timeline />
        </div>
    )
}

export default AboutPage