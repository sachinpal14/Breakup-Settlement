import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='w-full h-12 flex px-5 py-2 justify-between items-center   text-white absolute top-0'>
       <div>
        <h2 className='text-4xl font-semibold uppercase '> @Pikachu</h2>
       </div>
       <div className='flex justify-end items-center gap-4 text-xl'>
       <a href="https://x.com/sachinpalsp1402"><FaTwitter/> </a>
        <a href="https://www.linkedin.com/in/sachinpal14-02-"><FaLinkedin/> </a>
        <a href="https://github.com/settings/profile"><FaGithub/></a>
       </div>
    </div>
  )
}

export default Navbar