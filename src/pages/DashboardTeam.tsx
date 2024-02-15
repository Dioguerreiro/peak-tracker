import React, { useEffect, useState } from "react";
import PlayerCardList from "../components/PlayerCardList/PlayerCardList";
import DashboardLayout from "../layout/DashboardLayout";
import useAuthRedirect from "../misc/useAuthRedirect";
import playersData from "../assets/json/players.json";
import { getPlayersFromTeam } from "../services/firebaseService";
import PlayerProps from "../components/DashboardAddNewPlayer/DashboardAddNewPlayer.types";

const DashboardTeam = () => {
  const { user, loading } = useAuthRedirect();
  const [teamPlayers, setTeamPlayers] = useState<PlayerProps[] | null>(null);

  useEffect(() => {
    // Fetch the players from the user's team when the component mounts
    const fetchTeamPlayers = async () => {
      const players = await getPlayersFromTeam();
      setTeamPlayers(players);
    };

    if (user && !loading) {
      fetchTeamPlayers();
    }
  }, [user, loading]);

  // Function to filter players based on position zone
  const filterPlayersByZone = (positionZone: string) => {
    return teamPlayers
      ? teamPlayers.filter(
          (player) => player.positionFieldZone === positionZone
        )
      : [];
  };

  const handlePlayerAdded = (player: PlayerProps) => {
    // Update the list of team players with the newly added player
    setTeamPlayers((prevPlayers) => prevPlayers ? [...prevPlayers, player] : [player]);
  };

  return (
    <DashboardLayout>
      <section className="flex flex-col gap-5 p-5">
        {/* Generate PlayerCardList for each position zone */}
        {playersData.positionZones.map((zone) => (
          <div key={zone}>
            <PlayerCardList
              players={filterPlayersByZone(zone) ?? []}
              zone={zone}
              onPlayerAdded={handlePlayerAdded}
            />
          </div>
        ))}
      </section>
    </DashboardLayout>
  );
};

export default DashboardTeam;
