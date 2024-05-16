import React from 'react'
import company1 from '@/imgs/company1.svg'
import company2 from '@/imgs/company2.svg'
import company3 from '@/imgs/company3.svg'
import company4 from '@/imgs/company4.svg'
import company5 from '@/imgs/company5.svg'
import Image from 'next/image'

const clients = [
    {
        name: 'company1',
        img: company1
    },
    {
        name: 'company2',
        img: company2
    },
    {
        name: 'company3',
        img: company3
    },
    {
        name: 'company4',
        img: company4
    },
    {
        name: 'company5',
        img: company5
    },
]

const ClientList: React.FC = () => {
    return (
        <div className='w-full py-24 px-10 overflow-hidden'>
            <div className='flex max-md:animate-marquee justify-center items-center gap-28 md:flex-wrap'>
                {
                    clients.map((item, index) => (
                        <Image src={item.img} alt={item.name} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default ClientList