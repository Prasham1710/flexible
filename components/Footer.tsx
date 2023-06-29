import React from 'react'
 import Image from 'next/image'
import { footerLinks } from '@/constants'
type ColumnProps = {
  title: string
  links: Array<string>;
}
const Footer = () => {
  const FooterColumn = ( {title , links} : ColumnProps) =>(
    <div className='footer_column'>
      <h4 className='font-semibold'>{title} </h4>
        <ul className='flex flex-col gap-2 font-normal'>
          {links}</ul>
     
    </div>
  )
  return (
    <footer className='flexStart  footer '>
      <div className='flex flex-col gap-12 w-full'>
        <div className=''>
          <Image 
          src="logo-purple.svg"
          alt="Flexxible" width={115} height={38}
          />
          <p className='text-start text-sm font-normal mt-5 max-w-xs'>
          Flexibble is the world's leading community for creatives to share, grow, and get hired
          </p>
        </div>
        <div className='flex flex-wrap gap-12'>
          <FooterColumn title={footerLinks[0].title} links = {footerLinks[0].links}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer