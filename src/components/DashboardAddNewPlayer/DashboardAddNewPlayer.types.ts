interface PlayerProps {
  name: string;
  birthday: Date;
  shirtNumber: number;
  position: PlayerPosition;
  positionFieldZone: PlayerPositionFieldZone;
  nationality: string;
  photo?: File | null;
}

export enum PlayerPosition {
  Goalkeeper = "GK",
  LeftWingBack = "LWB",
  LeftDefender = "LB",
  CenterDefender = "CB",
  RightDefender = "RB",
  RighWingBack = "RWB",
  DefensiveMidfielder = "CDM",
  CentralMidfielder = "CM",
  LeftMidfielder = "LM",
  RightMidfielder = "RM",
  AttackingMidfileder = "CAM",
  LeftWinger = "LW",
  RightWinger = "RW",
  LeftForward = "LF",
  RightForward = "RF",
  CenterForward = "CF",
  Striker = "ST",
}

export enum PlayerPositionFieldZone {
  Goalkeeper = "GK",
  Defender = "B",
  Midfielder = "M",
  Striker = "A",
}

export default PlayerProps;
