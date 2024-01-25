import userImg  from "../../assets/images/user.jpeg"
import PlayerCardProps from "./PlayerCard.types";

const PlayerCard: React.FC<PlayerCardProps> = ( {photoURL, name, shirtNumber} ) => {
  return (
    <div className="flex flex-col gap-1">
      <div>
        <img
          src={photoURL || userImg}
          alt={name}
          className="h-80 rounded-xl"
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className=" text-red-700">{shirtNumber}</div>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default PlayerCard;
