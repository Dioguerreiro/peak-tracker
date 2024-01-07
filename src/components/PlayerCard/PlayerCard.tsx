import PlayerCardProps from "./PlayerCard.types";

const PlayerCard: React.FC<PlayerCardProps> = ({ name, number }) => {
  return (
    <div className="flex flex-col gap-1">
      <div>
        <img
          src={`/images/players/${number}.jpeg`}
          alt={name}
          className="h-80 rounded-xl"
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className=" text-red-700">{number}</div>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default PlayerCard;
