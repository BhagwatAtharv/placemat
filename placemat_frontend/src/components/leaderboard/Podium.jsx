export default function Podium({ users }) {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
      {/* #2 */}
      <PodiumCard user={users[1]} rank={2} bg="bg-gray-400" />

      {/* #1 */}
      <PodiumCard user={users[0]} rank={1} bg="bg-yellow-500 scale-105" />

      {/* #3 */}
      <PodiumCard user={users[2]} rank={3} bg="bg-orange-500" />
    </div>
  );
}

/* ================= ICONS ================= */

function PodiumIcon({ rank }) {
  // Crown for #1
  if (rank === 1) {
    return (
      <svg
        width="42"
        height="42"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7l4 5 5-6 5 6 4-5" />
        <path d="M3 7v10h18V7" />
      </svg>
    );
  }

  // Medal for #2 and #3 (YOUR IMAGE STYLE)
  return <MedalIcon />;
}

function MedalIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2h8l-2 4h-4z" />
      <circle cx="12" cy="14" r="4" />
    </svg>
  );
}

/* ================= CARD ================= */

function PodiumCard({ user, rank, bg }) {
  return (
    <div className="p-[2px] rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-white/20 shadow-lg hover:shadow-2xl transition">
      <div
        className={`${bg} text-white rounded-2xl p-6 text-center h-[320px] flex flex-col justify-center`}
      >
        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <PodiumIcon rank={rank} />
        </div>

        <div className="text-3xl font-bold mb-2">#{rank}</div>
        <div className="text-lg font-semibold">{user.name}</div>
        <div className="text-4xl font-bold mt-4">{user.score}</div>
        <div className="text-sm opacity-80">Total Score</div>
        <div className="mt-4 opacity-80">
          {user.solved} Problems Solved
        </div>
      </div>
    </div>
  );
}
