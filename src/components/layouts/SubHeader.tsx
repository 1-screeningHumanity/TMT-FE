'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import CloseIcon from '../ui/icons/CloseIcon'
import Logo from './Logo'

function SubHeader() {

    const router = useRouter()

    return (
        <nav className='w-full fixed top-0 z-[1001]'>
            <ul 
                className='p-[1.5rem] flex justify-between items-center bg-white'
                style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                }}
            >
                <li onClick={()=>router.push('/')}>
                    <Logo />
                </li>
                <li onClick={()=>router.back()}>
                    <CloseIcon />
                </li>
            </ul>
        </nav>
    )
}

export default SubHeader
