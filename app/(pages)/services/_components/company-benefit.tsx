import CheckList from '@/components/check-list'
import React from 'react'

const CompanyBenefit = () => {
    return (
        <div className='w-full flex flex-col gap-4'>
            <h1 className='font-semibold text-xl'>Our Benefits</h1>
            <h1 className='font-semibold text-lg text-[#40DDB6]'>Incubate standards compliant channels benefits.</h1>
            <div className='w-full flex flex-col gap-7'>
                <CheckList bgColor='#6B77E5' textStyle='text-base text-[#7D7D7D]' p='Credibly reintermediate backend' checkColor='#ffffff' />
                <CheckList bgColor='#6B77E5' textStyle='text-base text-[#7D7D7D]' p='Holistically foster superior' checkColor='#ffffff' />
                <CheckList bgColor='#6B77E5' textStyle='text-base text-[#7D7D7D]' p='Distinctively exploit optimal' checkColor='#ffffff' />
            </div>
        </div>
    )
}

export default CompanyBenefit