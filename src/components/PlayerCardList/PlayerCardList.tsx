import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlayerCard from "../PlayerCard/PlayerCard";
import PlayerCardListProps from "./PlayerCardList.types";
import { faPlusCircle } from "@fortawesome/pro-solid-svg-icons";
import { useState } from "react";
import DashboardAddNewPlayer from "../DashboardAddNewPlayer/DashboardAddNewPlayer";

const PlayerCardList: React.FC<PlayerCardListProps> = ({ players, zone, onPlayerAdded }) => {
  const [isAddPlayerModalOpen, setIsAddPlayerModalOpen] = useState(false);

  const openAddPlayerModal = () => {
    setIsAddPlayerModalOpen(true);
  };

  const closeAddPlayerModal = () => {
    setIsAddPlayerModalOpen(false);
  };

  let fieldZone = "";

  // Set fieldZone based on the provided zone prop
  if (zone === "GK") {
    fieldZone = "Goalkeeper";
  } else if (zone === "B") {
    fieldZone = "Defender";
  } else if (zone === "M") {
    fieldZone = "Midfielder";
  } else if (zone === "A") {
    fieldZone = "Striker";
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-4xl">{fieldZone}</h2>
      <div className="grid grid-cols-5 gap-4">
        {players.map((player) => (
          <PlayerCard
            key={player.shirtNumber}
            name={player.name}
            shirtNumber={player.shirtNumber}
            photoURL={player.photoURL}
          />
        ))}
        <div
          onClick={openAddPlayerModal}
          className="flex flex-col h-80 w-[250px] bg-neutral-200 hover:bg-neutral-300 justify-center items-center gap-2 rounded-xl cursor-pointer"
        >
          <FontAwesomeIcon icon={faPlusCircle} className="text-3xl" />
          Add new {fieldZone}
        </div>
      </div>
      <DashboardAddNewPlayer
        open={isAddPlayerModalOpen}
        onClose={closeAddPlayerModal}
        onPlayerAdded={onPlayerAdded}
      />
    </div>
  );
};

export default PlayerCardList;
