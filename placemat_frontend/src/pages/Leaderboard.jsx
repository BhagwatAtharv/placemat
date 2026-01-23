import { useState } from "react";
import LeaderboardHeader from "../components/leaderboard/LeaderboardHeader";
import LeaderboardTabs from "../components/leaderboard/LeaderboardTabs";
import CodingLeaderboard from "../components/leaderboard/CodingLeaderboard";
import AptitudeLeaderboard from "../components/leaderboard/AptitudeLeaderboard";

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("coding");

  return (
    <div className="px-6 py-8">
      <LeaderboardHeader />
      <LeaderboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "coding" ? <CodingLeaderboard /> : <AptitudeLeaderboard />}
    </div>
  );
}
