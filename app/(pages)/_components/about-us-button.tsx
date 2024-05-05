import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import React from 'react'
import NavbarItems from './navbar-items'
import { Separator } from '@/components/ui/separator'

const AboutUsBtn = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className='bg-transparent text-lg'>Company</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className='flex flex-col w-40 justify-start gap-1 py-1'>
                            <NavbarItems href='/about' label='About Us' variant='ghost' textSize='text-lg' />
                            <Separator />
                            <NavbarItems href='/teams' label='Teams' variant='ghost' textSize='text-lg' />
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default AboutUsBtn