import React from "react";
import abcLogo from "@/../public/abc-logo.png";
import SponsorCard from "./SponsorCard";

export default function Sponsor() {
  return (
    <div className="my-14 px-8">
      <h1 className="font-bold text-slate-900 text-3xl text-center my-8">
        Our Sponsors
      </h1>
      <div className="my-14 flex flex-wrap justify-around gap-y-14 gap-x-52 2xl:gap-x-32 xl:gap-x-24 lg:gap-x-16">
        <SponsorCard name="ABC Company" logo={abcLogo} />
        <SponsorCard name="ABC Company" logo={abcLogo} />
        <SponsorCard name="ABC Company" logo={abcLogo} />
        <SponsorCard name="ABC Company" logo={abcLogo} />
        <SponsorCard name="ABC Company" logo={abcLogo} />
        <SponsorCard name="ABC Company" logo={abcLogo} />
      </div>
    </div>
  );
}
