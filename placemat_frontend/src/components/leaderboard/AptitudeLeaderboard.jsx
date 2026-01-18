import Podium from "./Podium";
import LeaderboardList from "./LeaderboardList";

const aptitudeUsers = [
  { rank: 1, name: "DevWarrior", country: "India", score: 2543, solved: 243, streak: 35 },
  { rank: 2, name: "MindBender", country: "USA", score: 2478, solved: 238, streak: 32 },
  { rank: 3, name: "LogicAce", country: "UK", score: 2399, solved: 230, streak: 29 },
  { rank: 4, name: "BugHunter", country: "Canada", score: 2365, solved: 224, streak: 26 },
  { rank: 5, name: "TreeTraverser", country: "Singapore", score: 2021, solved: 192, streak: 17 },
];

export default function AptitudeLeaderboard() {
  return (
    <>
      {/* 🔥 Top 3 */}
      <Podium users={aptitudeUsers.slice(0, 3)} />

      {/* 🔥 Full List */}
      <LeaderboardList
        title="Top Aptitude Masters"
        users={aptitudeUsers}
      />
    </>
  );
}
