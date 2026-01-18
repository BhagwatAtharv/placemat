import { useState } from "react";

import LeaderboardHeader from "../components/leaderboard/LeaderboardHeader";
import LeaderboardTabs from "../components/leaderboard/LeaderboardTabs";
import CodingLeaderboard from "../components/leaderboard/CodingLeaderboard";
import AptitudeLeaderboard from "../components/leaderboard/AptitudeLeaderboard";

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("coding");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-6 space-y-10">

        <LeaderboardHeader />

        <LeaderboardTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === "coding" && <CodingLeaderboard />}
        {activeTab === "aptitude" && <AptitudeLeaderboard />}

      </div>
    </div>
  );
}
