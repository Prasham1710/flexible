import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import AuthProviers from './AuthProviers'
const Navbar = () => {
  const session = {}
  return (
    <nav className='flexBetween navbar'>
            <div className=' flex-1 flexStart gap-10'>
                <Link href="/">
                    <Image 
                    src="/logo.svg" alt="logo" width={116} height={43} />
                </Link> 
                <ul className='xl:flex hidden text-small gap-7'>
                  {NavLinks .map((link) => ( 
                  <Link href={link.href} key={link.key}>{
                  link.text} </Link> ))}
                </ul>
                </div>
                <div className="flexCentre gap-4">
                  {session ? ( 
                    <>
                    UserPhoto 
                    <Link href="/create-project">Share Work
                    </Link> 
                    </>
                    ) : ( <AuthProviers/>)}
                </div>
    </nav>
  )
}

export default Navbar