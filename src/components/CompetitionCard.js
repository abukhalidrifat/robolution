import React from "react";
import Image from "next/image";

export default function CompetitionCrad({logo,name}) {
  return (
    <>
      <div className="bg-[#00243E] rounded-lg p-4 text-[#FF7D00] w-60 flex flex-col justify-between">
        <Image
          className="rounded-sm ring ring-yellow-500"
          src={logo}
          width={250}
          height={250}
          style={{ height:"220px",objectFit:"fill", }}
        />
        <h1 className="text-center text-lg font-bold py-4">{name}</h1>
      </div>
    </>
  );
}
