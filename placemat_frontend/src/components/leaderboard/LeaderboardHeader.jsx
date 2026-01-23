import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LeaderboardHeader() {
  const navigate = useNavigate();

  return (
    <div className="mb-6">
      {/* Top row: Back arrow + title + trophy */}
      <div className="flex items-center gap-3">
        {/* Back Arrow */}
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />

        </button>

        {/* Title + Trophy */}
        <h1 className="text-3xl font-bold flex items-center gap-2">
          Leaderboard <span className="text-3xl">🏆</span>
        </h1>
      </div>

      {/* Subtitle */}
      <p className="ml-12 text-gray-500">
        Compete with the best and track your ranking
      </p>
    </div>
  );
}
