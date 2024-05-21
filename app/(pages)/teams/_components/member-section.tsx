"use client";

import AnimationWrapper from '@/components/animation';
import SectionTitle from '@/components/section-title'
import TeamCard from '@/components/team-card';
import useFetchTeams from '@/hooks/useFetchTeams'
import React from 'react'

const MemberSection = () => {
    const { teamList, loading, error } = useFetchTeams()
    return (
        <div className='w-full flex justify-center items-center py-16'>
            <div className='w-full flex flex-col items-center gap-12'>
                <div className='w-full flex flex-col items-center'>
                    <SectionTitle title='Our Team' />
                    <h1 className='font-semibold text-4xl text-center'>Meet the Experts</h1>
                </div>
                <div className='w-full flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-5'>
                    {
                        teamList?.map((item, index) => (
                            <AnimationWrapper key={index} transition={{ duration: 1, delay: index * .1}}>
                                <TeamCard profile={item} />
                            </AnimationWrapper>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MemberSection