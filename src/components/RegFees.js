"use client";

import React from "react";

export default function Regfees() {
  const [showModal, setShowModal] = React.useState(false);
  const fees = [
    {
      event: "Soccerbot",
      one: "Only 1 person in a team (Registration fee :600/-)",
      two: "2-4 persons - 500/- (If any team wants to add extra member(or more than 4 member) (Registration fee 600/- for each extra member))",
    },
    {
      event: "LFR",
      one: "Only 1 person in a team (Registration fee :600/-)",
      two: "2-4 person in a team (Registration fee :500/- each).",
    },
    {
      event: "Battle Bot",
      one: "Only 1 person in a team (Registration fee :1000/-)",
      two: "2-6 person in a team (Registration fee :1000/- each).",
    },
    {
      event: "Cosmo Clench",
      one: "Only 1 person in a team (Registration fee :600/-)",
      two: "2-4 person in a team (Registration fee :600/- each).",
    },
    {
      event: "Drone Racing",
      one: "Only 1 person in a team (Registration fee :1200/-)",
      two: "2-6 person in a team (Registration fee :1200/- each).",
    },
    {
      event: "Project Show",
      one: "University Level (Team Member 1-4): Registration fee: 500/- (Each)",
      two: "Junior Level (Team Member 1-4): Registration fee: 500/- (Each)",
    },
    {
      event: "Arduino",
      one: "Only 1 person in a team (Registration fee :500/-)",
      two: null,
    },
    {
      event: "Chess",
      one: "Only 1 person in a team (Registration fee :500/-)",
      two: null,
    },
    {
      event: "CAD",
      one: "Only 1 person in a team (Registration fee :500/-)",
      two: null,
    },
  ];
  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="bg-amber-600 text-white hover:bg-amber-500 font-medium py-2 px-4 rounded"
      >
        Fees
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-96 overflow-auto">
                <button
                  className="w-fit fixed z-10 m-2 self-end bg-red-500 text-white active:bg-red-600 font-bold text-sm px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  x
                </button>
                {/*body*/}
                <div className="relative py-2 px-2 flex-auto">
                  <div className="my-4 px-4">
                    <ul className="list-disc text-slate-900">
                      {fees.map((data) => (
                        <li key={data.event} className="py-2">
                          <span className="font-bold">Event Name: </span>
                          {data.event}
                          <ul className="list-decimal">
                            <li className="ml-4">{data.one}</li>
                            {data.two ? (
                              <li className="ml-4">{data.two}</li>
                            ) : null}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
