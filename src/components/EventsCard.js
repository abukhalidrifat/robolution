"use client"
import React from "react";
import { motion } from "framer-motion";

export default function EventsCard({ title, subtitle, img }) {
  return (
    <>
      <motion.div
        initial={{ x: "-100%",opacity:0 }}
        whileInView={{ x: 0,opacity:1 }}
        transition={{  type:'spring',mass:1}}
        className="bg-slate-700 my-6 px-8 py-4 rounded-lg flex hover:bg-slate-600"
      >
        <div className="bg-white w-fit h-fit self-center p-1 rounded-md flex">
          {img}
        </div>
        <div className="text-white px-16 w-11/12 sm:px-6">
          <h3 className="font-semibold sm:text-sm:w-full">{title}</h3>
          <p className="text-sm pt-1 sm:w-full">{subtitle}</p>
        </div>
        <div className="pt-2 self-center sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <path
              fill="#ffffff"
              d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17Z"
            />
          </svg>
        </div>
      </motion.div>
    </>
  );
}
