import React from "react";
import PlayersTabProps from "./PlayersTab.types";

const PlayersTab: React.FC<PlayersTabProps> = ({ players }) => {
  return (
    <div className="bg-white rounded-xl py-5 px-10">
      <ul className="flex justify-between">
        {players.map((player) => (
          <li>
            <a
              className="flex flex-col gap-2 justify-center"
              key={player.number}
              href=""
            >
              <img
                className="rounded-full h-28 w-28 object-cover"
                src={`/images/players/${player.number}.jpeg`}
                alt={player.name}
              />
              <li className="text-center">{player.name}</li>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersTab;
