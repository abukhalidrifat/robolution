"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="robots-bg flex items-center justify-center"
    >
      <div className="flex flex-col">
        <motion.h1
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", mass: 1 }}
          className="font-gothic-900 text-center text-amber-400 text-4xl font-bold w-[380px] leading-relaxed sm:pl-2"
        >
          Join Robolution 2023, The Ultimate Robots Showdown.
        </motion.h1>
        <Link href="/#enrollnow" passHref className="self-center mt-12">
          <motion.button
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", mass: 1 }}
            className="w-fit bg-orange-800 text-white hover:bg-orange-600 font-semibold py-2 px-4 rounded"
          >
            Enroll Now!
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
