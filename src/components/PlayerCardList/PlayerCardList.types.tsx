export type TPlayer = {
  number: number;
  name: string;
};

interface PlayerCardListProps {
  players: TPlayer[];
  zone: string;
}

export default PlayerCardListProps;
