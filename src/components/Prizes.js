import React from "react";

export default function Prizes() {
  const prizes = [
    {
      event: "Soccerbot",
      first: "25,000/-",
      second: "15,000/-",
      third: "10,000/-",
    },
    {
      event: "LFR",
      first: "20,000/-",
      second: "12,000/-",
      third: "8000/-",
    },
    {
      event: "Battle Bot",
      first: "50,000/-",
      second: "25,000/-",
      third: "15,000/-",
    },
    {
      event: "Cosmo Clench",
      first: "25,000/-",
      second: "10,000/-",
      third: "5000/-",
    },
    {
      event: "Drone Racing",
      first: "50,000/-",
      second: "25,000/-",
      third: "15,000/-",
    },
    {
      event: "Project Show",
      first: "10,000/-",
      second: "6000/-",
      third: "4000/-",
    },
    {
      event: "Arduino",
      first: "8000/-",
      second: "4000/-",
      third: "3000/-",
    },
    {
      event: "Chess",
      first: "15,000/-",
      second: "8000/-",
      third: "7000/-",
    },
    {
      event: "CAD",
      first: "15,000/-",
      second: "8000/-",
      third: "7000/-",
    },
  ];
  return (
    <>
    <h1 className="font-bold text-slate-900 text-3xl text-center my-14">
        Prizes
      </h1>
      <div className="my-4 px-4">
        <table className="border border-slate-900 w-full">
          <thead>
          <tr className="border border-slate-900">
            <th className="py-2">Event Name</th>
            <th className="py-2">Champion</th>
            <th className="py-2">1st Runners up</th>
            <th className="py-2">2nd Runners up</th>
          </tr>
          </thead>
          <tbody>
          {prizes.map((data) => (
            <tr key={data.event} className="border border-slate-900 hover:bg-slate-300">
              <td className="text-center py-2">{data.event}</td>
              <td className="text-center py-2">{data.first}</td>
              <td className="text-center py-2">{data.second}</td>
              <td className="text-center py-2">{data.third}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
