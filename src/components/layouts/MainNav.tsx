import React from 'react'
import NotiIcon from '../ui/icons/NotiIcon'
import Link from 'next/link'
import SearchIcon from '../ui/icons/SearchIcon'

function MainNav() {
  return (
    <nav>
      <ul className='flex justify-end items-center gap-4'>
        <li><Link href={'/search'}><SearchIcon /></Link></li>
        <li><NotiIcon /></li>
      </ul>
    </nav>
  )
}

export default MainNav
