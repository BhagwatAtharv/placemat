export default function LeaderboardList({ title, users, currentUser }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {users.map((user, index) => {
        const isTop3 = index < 3;
        const isYou = user.name === currentUser;

        return (
          <div
            key={user.name}
            className={`flex justify-between items-center p-4 rounded-xl mb-3
              ${isTop3 ? "bg-yellow-50 border border border-zinc-900" : "border"}
              ${isYou ? "border-purple-500 bg-purple-50" : ""}
            `}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold bg-gray-200">
                {index + 1}
              </div>

              <div>
                <div className={`font-semibold ${isYou && "text-purple-600"}`}>
                  {user.name} {isYou && "(You)"}
                </div>
                <div className="text-sm text-gray-500">{user.country}</div>
              </div>
            </div>

            <div className="flex gap-10 text-right">
              <Stat label="Score" value={user.score} />
              <Stat label="Solved" value={user.solved} />
              <Stat label="Streak" value={`${user.streak} 🔥`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-bold text-blue-600">{value}</div>
    </div>
  );
}
