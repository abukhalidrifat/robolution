import React from "react";
import Regfees from "./RegFees";

export default function EnrollNow() {
  return (
    <section id="enrollnow" className="my-8">
      <div className="bg-slate-900 py-12 px-8 text-white">
        <h1 className="text-[#FF7D00] text-2xl font-bold text-center pb-4">
          Enroll Now!
        </h1>
        <p className="text-[#e39144] text-md text-center pb-4 w-2/3 m-auto">
          Don't let go of this amazing opportunity to be a part of Robolution
          2023. Enroll now and secure your place in the most epic robot
          competition ever!
        </p>
        <div className="my-2 flex justify-center gap-8">
          <Regfees />
          <button className="bg-orange-800 text-white hover:bg-orange-600 font-medium py-2 px-4 rounded">
            Register
          </button>
        </div>
      </div>
    </section>
  );
}
