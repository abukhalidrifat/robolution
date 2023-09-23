import { useSearchParams } from "next/navigation";
import React from "react";
import slugify from "react-slugify";

export default function CompetitionDetailsModal({ closeModal }) {
  const searchParams = useSearchParams();

  const eventQuery = searchParams.get("event");

  const feesAndPrizes = [
    {
      event: "Soccerbot",
      one: "Only 1 person in a team (Registration fee :600/-)",
      two: "2-4 persons - 500/- (If any team wants to add extra member(or more than 4 member) (Registration fee 600/- for each extra member))",
      first: "25,000/-",
      second: "15,000/-",
      third: "10,000/-",
    },
    {
      event: "Line Following Robot (LFR)",
      one: "Only 1 person in a team (Registration fee :600/-)",
      two: "2-4 person in a team (Registration fee :500/- each).",
      first: "20,000/-",
      second: "12,000/-",
      third: "8000/-",
    },
    {
      event: "Battle Bot",
      one: "Only 1 person in a team (Registration fee :1000/-)",
      two: "2-6 person in a team (Registration fee :1000/- each).",
      first: "50,000/-",
      second: "25,000/-",
      third: "15,000/-",
    },
    {
      event: "Cosmo Clench",
      one: "Only 1 person in a team (Registration fee :600/-)",
      two: "2-4 person in a team (Registration fee :600/- each).",
      first: "25,000/-",
      second: "10,000/-",
      third: "5000/-",
    },
    {
      event: "Drone Racing",
      one: "Only 1 person in a team (Registration fee :1200/-)",
      two: "2-6 person in a team (Registration fee :1200/- each).",
      first: "50,000/-",
      second: "25,000/-",
      third: "15,000/-",
    },
    {
      event: "Project Show",
      one: "University Level (Team Member 1-4): Registration fee: 500/- (Each)",
      two: "Junior Level (Team Member 1-4): Registration fee: 500/- (Each)",
      first: "10,000/-",
      second: "6000/-",
      third: "4000/-",
    },
    {
      event: "Arduino",
      one: "Only 1 person in a team (Registration fee :500/-)",
      two: null,
      first: "8000/-",
      second: "4000/-",
      third: "3000/-",
    },
    {
      event: "Chess",
      one: "Only 1 person in a team (Registration fee :500/-)",
      two: null,
      first: "15,000/-",
      second: "8000/-",
      third: "7000/-",
    },
    {
      event: "CAD",
      one: "Only 1 person in a team (Registration fee :500/-)",
      two: null,
      first: "15,000/-",
      second: "8000/-",
      third: "7000/-",
    },
  ];

  const filtered = feesAndPrizes.filter((data) => slugify(data.event) == eventQuery);
  const data = filtered.length > 0 ? filtered[0] : [];

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-96 overflow-auto">
            <button
              className="w-fit fixed z-10 m-2 self-end bg-red-500 text-white active:bg-red-600 font-bold text-sm px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={closeModal}
            >
              x
            </button>
            {/*body*/}
            <div className="relative py-2 px-2 flex-auto">
              <div className="my-4 px-4">
                <h1 className="text-xl text-center text-slate-900 font-bold italic mb-4">
                  {data.event}
                </h1>
                <h1 className="text-lg text-amber-800 font-bold underline mb-3">
                  Registration fees
                </h1>
                <ul className="list-disc text-slate-900">
                  <li className="ml-4">{data.one}</li>
                  {data.two ? <li className="ml-4">{data.two}</li> : null}
                </ul>
                <br />
                <h1 className="text-lg text-amber-800 font-bold underline mb-3">
                  Prizes
                </h1>
                <ul className="list-disc text-slate-900">
                  <li key={data.event} className="py-2">
                    <span className="font-bold">Champion: </span>
                    {data.first}
                  </li>
                  <li key={data.event} className="py-2">
                    <span className="font-bold">1st Runners Up: </span>
                    {data.second}
                  </li>
                  <li key={data.event} className="py-2">
                    <span className="font-bold">2nd Runners Up: </span>
                    {data.third}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
