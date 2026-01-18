import { Flame, User } from "lucide-react";

export default function LeaderboardList({ title, users }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>

      <div className="space-y-4">
        {users.map((user) => {
          const isTop3 = user.rank <= 3;

          return (
            <div
              key={user.rank}
              className={`flex items-center justify-between p-5 rounded-xl border transition
                ${
                  isTop3
                    ? "bg-yellow-50 border-yellow-300"
                    : "bg-white hover:bg-purple-50"
                }`}
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                {/* Rank / Medal */}
                {isTop3 ? (
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold
                      ${
                        user.rank === 1
                          ? "bg-yellow-500"
                          : user.rank === 2
                          ? "bg-gray-400"
                          : "bg-orange-500"
                      }`}
                  >
                    {user.rank}
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                    {user.rank}
                  </div>
                )}

                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center">
                  <User size={18} />
                </div>

                {/* Name */}
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.country}</p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex gap-10 text-right">
                <div>
                  <p className="text-sm text-gray-500">Score</p>
                  <p className="font-semibold text-blue-600">{user.score}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Solved</p>
                  <p className="font-semibold">{user.solved}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Streak</p>
                  <p className="font-semibold text-orange-500 flex items-center gap-1">
                    {user.streak} <Flame size={16} />
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
