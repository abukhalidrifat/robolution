import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="robots-bg flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="font-gothic-900 text-center text-amber-400 text-4xl font-bold w-[380px] leading-relaxed sm:pl-2">
          Join Robolution 2023, The Ultimate Robots Showdown.
        </h1>
        <Link href="/#enrollnow" passHref className="self-center mt-12">
          <button className="w-fit bg-orange-800 text-white hover:bg-orange-600 font-semibold py-2 px-4 rounded">
            Enroll Now!
          </button>
        </Link>
      </div>
    </div>
  );
}
