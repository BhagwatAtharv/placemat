import { Crown, Medal } from "lucide-react";

export default function Podium({ users }) {
  if (!users || users.length < 3) return null;

  return (
    <div className="grid md:grid-cols-3 gap-6 my-10">
      {/* #2 */}
      <PodiumCard user={users[1]} rank={2} color="bg-gray-400" />

      {/* #1 */}
      <PodiumCard user={users[0]} rank={1} color="bg-yellow-500" crown />

      {/* #3 */}
      <PodiumCard user={users[2]} rank={3} color="bg-orange-500" />
    </div>
  );
}

function PodiumCard({ user, rank, color, crown }) {
  return (
    <div className={`rounded-2xl p-8 text-white text-center shadow-xl ${color}`}>
      {crown ? <Crown size={36} className="mx-auto mb-4" /> : <Medal size={36} className="mx-auto mb-4" />}

      <p className="text-3xl font-bold">#{rank}</p>
      <p className="mt-2 text-xl font-semibold">{user.name}</p>

      <p className="mt-6 text-3xl font-bold">{user.score}</p>
      <p className="text-sm opacity-90">Total Score</p>

      <div className="w-full h-px bg-white/30 my-4" />

      <p className="text-lg">{user.solved} Problems Solved</p>
    </div>
  );
}
