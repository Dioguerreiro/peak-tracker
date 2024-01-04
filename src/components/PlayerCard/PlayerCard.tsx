import PlayerCardProps from "./PlayerCard.types";

const PlayerCard: React.FC<PlayerCardProps> = ({ name, number }) => {
  return (
    <div>
        <div>{name}</div>
        <div>{number}</div>
    </div>
  );
};

export default PlayerCard;
