import React, { useEffect, useState } from "react";
import PlayersTabProps from "./PlayersTab.types";
import HeartRateChart from "../HeartRate/HeartRate";
import RunningDistanceSimulator from "../RunningDistance/RunningDistance";
import RunningSpeed from "../RunningSpeed/RunningSpeed";
import PlayerBodyTemperature from "../PlayerBodyTemperature/PlayerBodyTemperature";
import PlayersStats from "../PlayerStats/PlayerStats";

const PlayersTab: React.FC<PlayersTabProps> = ({
  players,
  selectedPlayer,
  setSelectedPlayer,
  isTimerRunning,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white rounded-xl py-5 px-10">
        <ul className="flex justify-between">
          {players.map((player) => (
            <li
              key={player.number}
              className={selectedPlayer === player.number ? "active" : ""}
              onClick={() => setSelectedPlayer(player.number)}
            >
              <div className="flex flex-col gap-2 justify-center cursor-pointer">
                <img
                  className="rounded-full h-28 w-28 object-cover cursor-pointer"
                  src={`/images/players/${player.number}.jpeg`}
                  alt={player.name}
                />
                <div
                  className={`text-center cursor-pointer ${
                    selectedPlayer === player.number
                      ? "text-red-500 font-bold"
                      : ""
                  }`}
                >
                  {player.name}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedPlayer && (
        <div className="flex gap-5">
          {players.map((player, index) => (
            <PlayersStats
              key={index}
              isTimerRunning={isTimerRunning}
              player={player}
              selectedPlayer={selectedPlayer}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlayersTab;
