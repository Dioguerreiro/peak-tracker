import PlayerProps from "../DashboardAddNewPlayer/DashboardAddNewPlayer.types";

interface PlayerCardListProps {
  players: PlayerProps[];
  zone: string;
  onPlayerAdded: (player: PlayerProps) => void;
}

export default PlayerCardListProps;
