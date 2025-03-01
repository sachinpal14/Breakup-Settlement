import { motion } from 'motion/react';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div 
 
    className='w-full h-12 flex px-5 py-2 justify-between items-center   text-white absolute top-0'>
       <div>
        <motion.h2
           initial={{y:-20,opacity:0}}
           whileInView={{y:0,opacity:1}}
           transition={{duration:0.8,delay:0.4}}
        className='md:text-4xl text-2xl font-semibold uppercase '> @Pikachu</motion.h2>
       </div>
       <div className='flex justify-end items-center gap-4 text-xl'>
       <motion.a
          initial={{y:-20,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.8,delay:0.6}}
       href="https://x.com/sachinpalsp1402"><FaTwitter/> </motion.a>
        <motion.a 
           initial={{y:-20,opacity:0}}
           whileInView={{y:0,opacity:1}}
           transition={{duration:0.8,delay:0.8}} href="https://www.linkedin.com/in/sachinpal14-02-"><FaLinkedin/> </motion.a>
        <motion.a
           initial={{y:-20,opacity:0}}
           whileInView={{y:0,opacity:1}}
           transition={{duration:0.8,delay:1}} href="https://github.com/settings/profile"><FaGithub/></motion.a>
       </div>
    </div>
  )
}

export default Navbar