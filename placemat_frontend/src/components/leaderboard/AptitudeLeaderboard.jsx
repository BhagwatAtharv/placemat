import Podium from "./Podium";
import LeaderboardList from "./LeaderboardList";

const users = [
  { name: "MindBender", country: "USA", score: 2760, solved: 260, streak: 40 },
  { name: "LogicAce", country: "UK", score: 2680, solved: 250, streak: 34 },
  { name: "QuickThinker", country: "India", score: 2600, solved: 240, streak: 30 },
  { name: "BrainStorm", country: "Canada", score: 2450, solved: 220, streak: 26 },
  { name: "Arjun Patel", country: "India", score: 2620, solved: 210, streak: 18 },
];

export default function AptitudeLeaderboard() {
  const sorted = [...users].sort((a, b) => b.score - a.score);

  return (
    <>
      <Podium users={sorted.slice(0, 3)} />
      <LeaderboardList title="Top Aptitude Masters" users={sorted} currentUser="Arjun Patel" />
    </>
  );
}
