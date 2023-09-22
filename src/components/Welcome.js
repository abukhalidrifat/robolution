import Image from "next/image";
import React from "react";
import EventsCard from "./EventsCard";

export default function Welcome() {
  return (
    <div className="my-14">
      <h1 className="font-bold text-slate-900 text-3xl text-center my-8">
        Welcome to Robolution
      </h1>
      <p className="px-8">
        Ready to witness the most epic robot showdown of the century?
        Robolution, the Ultimate Robot Competition, brings together the best of
        engineering prowess, innovative designs, and creative problem-solving.
      </p>
      <section className="my-10 px-8">
        <EventsCard
          title="9 Amazing Events"
          subtitle="Challange your Engineering skills."
          img={
            <svg
              className="self-center"
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M200 50h-66V16a6 6 0 0 0-12 0v34H56a30 30 0 0 0-30 30v112a30 30 0 0 0 30 30h144a30 30 0 0 0 30-30V80a30 30 0 0 0-30-30Zm18 142a18 18 0 0 1-18 18H56a18 18 0 0 1-18-18V80a18 18 0 0 1 18-18h144a18 18 0 0 1 18 18Zm-54-54H92a26 26 0 0 0 0 52h72a26 26 0 0 0 0-52Zm-26 12v28h-20v-28Zm-60 14a14 14 0 0 1 14-14h14v28H92a14 14 0 0 1-14-14Zm86 14h-14v-28h14a14 14 0 0 1 0 28Zm-90-70a10 10 0 1 1 10 10a10 10 0 0 1-10-10Zm88 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10Z"
              ></path>
            </svg>
          }
        />
        <EventsCard
          title="Spectacular Prizes"
          subtitle="Aim for the top."
          img={
            <svg
              className="self-center"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 2c-.9 0-2 1-2 2H8c0-1-1.1-2-2-2H2v9c0 1 1 2 2 2h2.2c.4 2 1.7 3.7 4.8 4v2.08C8 19.54 8 22 8 22h8s0-2.46-3-2.92V17c3.1-.3 4.4-2 4.8-4H20c1 0 2-1 2-2V2h-4M6 11H4V4h2v7m14 0h-2V4h2v7Z"
              />
            </svg>
          }
        />
        <EventsCard
          title="Modest Enrollment Charges"
          subtitle="Enroll now!"
          img={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M7 11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
                <path d="M12 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0m5-5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              </g>
            </svg>
          }
        />
      </section>
    </div>
  );
}
