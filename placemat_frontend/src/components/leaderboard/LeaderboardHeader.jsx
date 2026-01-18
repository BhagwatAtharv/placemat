import { Trophy } from "lucide-react";

export default function LeaderboardHeader() {
  return (
    <div>
      <h1 className="text-4xl font-bold flex items-center gap-2">
        Leaderboard <Trophy className="text-yellow-500" />
      </h1>
      <p className="text-gray-600 text-lg">
        Compete with the best and track your ranking
      </p>
    </div>
  );
}
