import React from 'react'
import image1 from '../assets/portfolio.png'
import { motion } from 'motion/react'
const Another = ({title,id,link,desc,image}) => {

  return (
<div className='w-full h-full rounded flex flex-wrap md:flex-nowrap mt-5 gap-5 justify-center items-center md:px-4 py-2'>
    <motion.div 
    initial={{x:-100, opacity :0}}
    whileInView={{x:0, opacity:1 }}
    transition={{duration:1,delay:0.2}}
    className='w-full h-full md:w-[40%]  rounded flex items-center justify-center px-4 py-2'>
      <img className='rounded h-full w-full object-center object-cover' src={image} alt="" />
    </motion.div>
    <motion.div
    initial={{x:100 ,opacity:0}}
    whileInView={{x:0,opacity:1}}
    transition={{duration:1,delay:0.2}}
    className='w-full   h-full flex flex-col py-2 md:justify-evenly text-white md:w-[70%] px-4 gap-2'>
    <h1 className=' text-xl md:text-4xl font-bold'>{title}</h1>
    <p className= ' tracking-tighter md:tracking-normal md:text-xl text-zinc-400 '>{desc}</p>
    <a className='text-red-500 text-lg md:text-2xl' href={link}>Click here to visit.</a>
    </motion.div>
</div>
  )
}

export default Another


 