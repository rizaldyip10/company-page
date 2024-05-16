import React from 'react'
import HeroSmall from '../../../components/small-hero'
import teamImg from '@/imgs/team.webp'

const TeamsPage = () => {
    return (
        <div className='h-full'>
            <HeroSmall 
                pageName='Our Team'
                title='Meet Our Experts'
                img={teamImg}
            />
        </div>
    )
}

export default TeamsPage