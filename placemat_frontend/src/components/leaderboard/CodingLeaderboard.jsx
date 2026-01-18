import Podium from "./Podium";
import LeaderboardList from "./LeaderboardList";

const codingUsers = [
  { rank: 1, name: "CodeMaster_99", country: "India", score: 2847, solved: 287, streak: 45 },
  { rank: 2, name: "AlgoQueen", country: "USA", score: 2756, solved: 265, streak: 38 },
  { rank: 3, name: "ByteNinja", country: "China", score: 2654, solved: 251, streak: 42 },
  { rank: 4, name: "DevWarrior", country: "India", score: 2543, solved: 243, streak: 35 },
  { rank: 5, name: "CodeGenius", country: "UK", score: 2487, solved: 238, streak: 31 },
];

export default function CodingLeaderboard() {
  return (
    <>
      {/* ✅ THIS IS THE MISSING PART */}
      <Podium users={codingUsers.slice(0, 3)} />

      {/* ✅ FULL LIST BELOW */}
      <LeaderboardList title="Top Coders" users={codingUsers} />
    </>
  );
}
