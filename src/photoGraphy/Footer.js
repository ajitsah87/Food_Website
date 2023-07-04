import React from 'react'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin';
import { GrInstagram } from '@react-icons/all-files/gr/GrInstagram';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';

function Footer() {
  return (
    <>
      <div className="f-wrapper w-full h-96 bg-[#152438] bottom-0 text-white flex flex-col ">
        <div className="f-icon flex text-3xl justify-center pt-8 gap-x-6  ">
      <FaFacebook className='cursor-pointer'/>
      <AiFillLinkedin  className='cursor-pointer'/>
      <GrInstagram  className='cursor-pointer'/>
      <FaTwitter  className='cursor-pointer'/>

        </div>
      <p className='text-3xl font-[Cinzel] text-center pt-6'>FOODADO © 2023, ALL Rights Reserved</p>
      </div>
    </>
  )
}

export default Footer
