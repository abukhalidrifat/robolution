import React from "react";
import CompetitionCrad from "./CompetitionCard";
import soccerbot from '@/../public/soccerbot.jpg'
import lfr from '@/../public/lfr.jpg'
import battlebot from '@/../public/battlebot.webp'
import cosmo from '@/../public/cosmoclench.jpg'
import droneracing from '@/../public/droneracing.webp'
import projectshow from '@/../public/projectshow.webp'
import arduino from '@/../public/arduino.jpg'
import chess from '@/../public/chess.jpg'
import cad from '@/../public/cad.png'

export default function Events() {
  return (
    <div className="my-14 px-8">
      <h1 className="font-bold text-slate-900 text-3xl text-center my-8">
        Our Events
      </h1>
      <div className="my-14 flex flex-wrap justify-around gap-y-14 gap-x-52 2xl:gap-x-32 xl:gap-x-24 lg:gap-x-16">
        <CompetitionCrad name="Soccerbot" logo={soccerbot} />
        <CompetitionCrad name="Line Following Robot (LFR)" logo={lfr} />
        <CompetitionCrad name="Battle Bot" logo={battlebot} />
        <CompetitionCrad name="Cosmo Clench" logo={cosmo} />
        <CompetitionCrad name="Drone Racing" logo={droneracing} />
        <CompetitionCrad name="Project Show" logo={projectshow} />
        <CompetitionCrad name="Arduino" logo={arduino} />
        <CompetitionCrad name="Chess" logo={chess} />
        <CompetitionCrad name="CAD" logo={cad} />
      </div>
    </div>
  );
}
