import React from "react";
import Image from "next/image";

export default function SponsorCard({logo,name}) {
  return (
    <>
      <div className="bg-[#00243E] rounded-lg p-4 text-[#FF7D00] w-60">
        <Image
          className="drop-shadow-lg"
          src={logo}
          width={250}
          height={250}
        />
        <h1 className="text-center font-bold pt-4">{name}</h1>
      </div>
    </>
  );
}
