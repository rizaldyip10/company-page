import React from 'react'
import NavbarItems from './navbar-items';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import ContactUsBtn from './contact-us-btn';

interface MobileMenuProps {
  isMenuOpen: boolean;
  onMenuClose: () => void;
}

const routes = [
  {
      label: 'Home',
      href: '/'
  },
  {
      label: 'Services',
      href: '/services'
  },
  {
      label: 'Contact Us',
      href: '/contact'
  }
]

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, onMenuClose }) => {
  return (
    <div className={`w-full md:w-[50%] md:right-0 h-screen bg-[#F4F4F4] absolute top-0 z-50 px-6 py-12 ${ isMenuOpen ? 'flex animate-slide-in-right' : 'hidden'} flex-col lg:hidden`}>
      <div className='w-full'>
        <div className='w-full flex justify-end'>
          <Button variant='ghost' onClick={onMenuClose}>
            <X />
          </Button>
        </div>
        <div className='w-full flex flex-col items-start gap-3'>
          {
            routes.map((item, index) => (
                <NavbarItems key={index} href={item.href} label={item.label} variant='link' textSize='text-2xl' />
            ))
          }
          <Accordion type='single' collapsible className='w-full -mt-2 px-4'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-2xl'>Company</AccordionTrigger>
              <AccordionContent>
                <div className='flex flex-col items-start justify-start'>
                  <NavbarItems href='/about' label='About Us' variant='ghost' textSize='text-lg' />
                  <Separator />
                  <NavbarItems href='/teams' label='Teams' variant='ghost' textSize='text-lg' />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className='w-full mt-24'>
        <ContactUsBtn width='w-full' textSize='text-2xl' height='h-20' />
      </div>
    </div>
  )
}

export default MobileMenu