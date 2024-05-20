import React from 'react'
import HeroSmall from '../../../components/small-hero'
import teamImg from '@/imgs/team.webp'
import PresidentSection from './_components/president-section'
import MemberSection from './_components/member-section'

const TeamsPage = () => {
    return (
        <div className='h-full'>
            <HeroSmall 
                pageName='Our Team'
                title='Meet Our Experts'
                img={teamImg}
            />
            <PresidentSection />
            <MemberSection />
        </div>
    )
}

export default TeamsPage