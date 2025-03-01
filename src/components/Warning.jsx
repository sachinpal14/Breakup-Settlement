import React from "react";
import { useForm } from "../contexts/FormContext";
import { motion } from "motion/react";

const Warning = () => {
  const {warning,setwarning} =useForm()
  return (
    <motion.div
    initial={{scale:0,opacity:0}}
    whileInView={{scale:1,opacity:1}}
    transition={{duration:0.4,delay:0.1}}
    className="bg-black rounded w-72 flex flex-col p-4 items-center gap-3">
      <h1 className="text-red-700 text-4xl text-center underline font-semibold">
        Disclamer
      </h1>
    <div className="w-56">
    <p className="text-red-500 text-center ">
        The thoughts and and the suggestion are just for fun. I respect everyone
        sentiments and emotions. So don't take serious. 
      </p>
    </div>
      <h1 className="text-xl text-gray-200 font-semibold">Are you Comfortable ?</h1>
      <div className="flex w-full justify-between items-center px-4 py-1">
        <button
        onClick={()=>{
          setwarning(1)
        }}
        className="px-6 cursor-pointer active:scale-75 transition-all duration-500 hover:text-gray-900 hover:bg-gray-300 py-2 text-xl text-white bg-gray-900 rounded outline-none border-none">Yes</button>
        <button
        onClick={()=>{
          setwarning(2)
        }}
        className="px-6 cursor-pointer active:scale-75 transition-all duration-500 hover:text-gray-900 hover:bg-gray-300 py-2 text-xl text-white bg-gray-900 rounded outline-none border-none">No</button>
      </div>
    </motion.div>
  );
};

export default Warning;
