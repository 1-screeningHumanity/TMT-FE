'use client'
import React from 'react'
import Logo from './Logo'
import MainNav from './MainNav'
import { usePathname } from 'next/navigation'

function MainHeader() {

    const pathName = usePathname()

    return (
        <header 
            className='w-full p-[1.5rem] flex justify-between items-center fixed top-0 z-[20] backdrop-blur-sm'
            style={{
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
            }}
        >
            <Logo />
            <MainNav />
        </header>
    )
}

export default MainHeader
