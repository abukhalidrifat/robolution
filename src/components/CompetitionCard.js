"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CompetitionDetailsModal from "./CompetionDetailsModal";
import { useRouter } from "next/navigation";
import slugify from "react-slugify";

export default function CompetitionCrad({ logo, name }) {
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();

  const handleSelectedCard = (evName) => {
    const slug = slugify(evName);
    router.push(`?event=${slug}`, { scroll: false });
  };

  return (
    <>
      {showModal ? (
        <CompetitionDetailsModal closeModal={() => setShowModal(false)} />
      ) : null}
      <motion.div
        onClick={() => {
          setShowModal(true);
          handleSelectedCard(name);
        }}
        initial={{ y: "50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", mass: 1 }}
        className="bg-[#00243E] rounded-lg p-4 text-[#FF7D00] w-60 flex flex-col justify-between"
      >
        <Image
          className="rounded-sm ring ring-yellow-500"
          src={logo}
          width={250}
          height={250}
          style={{ height: "220px", objectFit: "fill" }}
        />
        <h1 className="text-center text-lg font-bold py-4">{name}</h1>
        <span className="text-center text-white text-xs">(click to see details)</span>
      </motion.div>
    </>
  );
}
