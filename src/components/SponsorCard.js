'use client'
import React from "react";
import Image from "next/image";
import {motion} from 'framer-motion'

export default function SponsorCard({logo,name}) {
  return (
    <>
      <motion.div 
      initial={{ y: "50px",opacity:0 }}
      whileInView={{ y: 0,opacity:1 }}
      transition={{  type:'spring',mass:1}}
      className="bg-[#00243E] rounded-lg p-4 text-[#FF7D00] w-60">
        <Image
          className="drop-shadow-lg"
          src={logo}
          width={250}
          height={250}
        />
        <h1 className="text-center font-bold pt-4">{name}</h1>
      </motion.div>
    </>
  );
}
