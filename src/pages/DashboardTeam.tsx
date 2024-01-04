import React from "react";
import PlayerCardList from "../components/PlayerCardList/PlayerCardList";
import DashboardLayout from "../layout/DashboardLayout";
import useAuthRedirect from "../misc/useAuthRedirect";
import playersData from "../assets/json/players.json";
import { TPlayer } from "../components/PlayerCardList/PlayerCardList.types";

const DashboardTeam = () => {
  const { user, loading } = useAuthRedirect();

  // Function to filter players based on position zone
  const filterPlayersByZone = (positionZone: string) =>
    playersData.soccerTeamPlayers.filter(
      (player) => player.positionZone === positionZone
    ) as TPlayer[];

  return (
    <DashboardLayout>
      <section className="flex flex-col gap-5 p-5">
        {/* Generate PlayerCardList for each position zone */}
        {playersData.positionZones.map((zone) => (
          <div key={zone}>
            <PlayerCardList players={filterPlayersByZone(zone)} zone={zone} />
          </div>
        ))}
      </section>
    </DashboardLayout>
  );
};

export default DashboardTeam;
