import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav>
        <div className='flexBetween navbar'>
            <div className=' flex-1 flexStart gap-10'>
                <Link href="/">
                    <Image 
                    src="/logo.svg" alt="logo" width={50} height={50} />
                </Link> 
            </div>
        </div>
    </nav>
  )
}

export default Navbar