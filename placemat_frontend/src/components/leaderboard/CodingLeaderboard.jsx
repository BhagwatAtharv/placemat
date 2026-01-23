import Podium from "./Podium";
import LeaderboardList from "./LeaderboardList";

const users = [
  { name: "CodeMaster_99", country: "India", score: 2847, solved: 287, streak: 45 },
  { name: "AlgoQueen", country: "USA", score: 2756, solved: 265, streak: 38 },
  { name: "ByteNinja", country: "China", score: 2654, solved: 251, streak: 42 },
  { name: "DevWarrior", country: "India", score: 2543, solved: 243, streak: 35 },
  { name: "CodeGenius", country: "UK", score: 2487, solved: 238, streak: 31 },
  { name: "Arjun Patel", country: "India", score: 2554, solved: 185, streak: 12 },
];

export default function CodingLeaderboard() {
  const sorted = [...users].sort((a, b) => b.score - a.score);

  return (
    <>
      <Podium users={sorted.slice(0, 3)} />
      <LeaderboardList title="Top Coders" users={sorted} currentUser="Arjun Patel" />
    </>
  );
}
