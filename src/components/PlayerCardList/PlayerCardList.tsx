import PlayerCard from "../PlayerCard/PlayerCard";
import PlayerCardListProps from "./PlayerCardList.types";

const PlayerCardList: React.FC<PlayerCardListProps> = ({ players, zone }) => {
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
    <div>
      <h2>{fieldZone}</h2>
      <ul className="flex gap-14">
        {players.map((player) => (
          <PlayerCard
            key={player.number}
            name={player.name}
            number={player.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default PlayerCardList;
