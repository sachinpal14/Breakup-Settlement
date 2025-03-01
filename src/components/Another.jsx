import React from 'react'
import image1 from '../assets/portfolio.png'
import { motion } from 'motion/react'
const Another = ({title,id,link,desc,image}) => {

  return (
    <div className=' w-full items-center h-full rounded m-10 flex  gap-6'>

      
        <motion.div
        initial={{x:-100, opacity :0}}
        whileInView={{x:0, opacity:1 }}
        transition={{duration:1,delay:0.2}}
        className='h-full  w-[40%]  rounded flex items-center justify-center px-4 py-2'> 
         <img className='rounded object-center object-cover' src= {image} alt="" />
        </motion.div>
        <motion.div 
        initial={{x:100 ,opacity:0}}
        whileInView={{x:0,opacity:1}}
      transition={{duration:1,delay:0.2}}
        className='text-white flex justify-evenly  flex-col w-[70%] px-4 py-2 gap-2'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-zinc-400 '>{desc}</p>
            <a className='text-red-500' href={link}>Click here to visit.</a>
        </motion.div>
    </div>
  )
}

export default Another