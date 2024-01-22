export type TPlayer = {
  number: number;
  name: string;
};

interface PlayersTabProps {
  players: TPlayer[];
  selectedPlayer: number | null;
  setSelectedPlayer: (player: number) => void;
}

export default PlayersTabProps;
