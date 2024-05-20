import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

interface SocialLinksItems {
  instagram: string;
  facebook: string;
  twitter: string;
}

interface ProfileItems {
  name: string;
  position: string;
  photoURL: string;
  socialLinks: SocialLinksItems[];
}

interface TeamCardProps {
  profile: ProfileItems;
}

const TeamCard: React.FC<TeamCardProps> = ({ profile }) => {
  
  return (
    <div className='w-[300px] h-[400px] xl:w-96 xl:h-[532px] flex relative justify-center group'>
      <div className='w-4/5 flex flex-col items-center justify-center absolute bg-white bottom-0 mb-5 p-5 z-30'>
        <h1 className='font-semibold text-2xl'>{profile.name}</h1>
        <p className='text-[#7D7D7D]'>{profile.position}</p>
      </div>
      <div className='w-full h-full flex justify-center items-center bg-[#6b77e5c0] opacity-0 absolute hover:opacity-100 transition-opacity duration-300'>
        {
          profile?.socialLinks?.map((item, index) => (
            <div key={index} className='flex items-center absolute gap-2'>
              <Link className='h-11 w-11 rounded-full bg-[#40DDB6] flex items-center justify-center opacity-100' href={item?.instagram ? `https://${item.instagram}` : 'https://instagram.com'}>
                <Instagram className='text-white' />
              </Link>
              <Link className='h-11 w-11 rounded-full bg-[#40DDB6] flex items-center justify-center opacity-100' href={item?.facebook ? `https://${item.facebook}` : 'https://facebook.com'}>
                <Facebook className='text-white' />
              </Link>
              <Link className='h-11 w-11 rounded-full bg-[#40DDB6] flex items-center justify-center opacity-100' href={item?.twitter ? `https://${item.twitter}` : 'https://x.com'}>
                <Twitter className='text-white' />
              </Link>
            </div>
          ))
        }
      </div>
      <Image alt='member' src={profile.photoURL} width={300} height={400} className='w-[300px] h-[400px] xl:w-96 xl:h-[532px]' quality={100} />
    </div>
  )
}

export default TeamCard