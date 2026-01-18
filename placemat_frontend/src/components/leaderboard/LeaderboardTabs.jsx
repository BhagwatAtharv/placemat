import { Code2, Brain } from "lucide-react";

export default function LeaderboardTabs({ activeTab, setActiveTab }) {
  return (
    <div className="inline-flex bg-white p-2 rounded-2xl shadow">
      <button
        onClick={() => setActiveTab("coding")}
        className={`px-6 py-2 rounded-xl flex items-center gap-2 transition
          ${activeTab === "coding"
            ? "bg-blue-600 text-white"
            : "text-gray-700"}`}
      >
        <Code2 size={16} /> Coding
      </button>

      <button
        onClick={() => setActiveTab("aptitude")}
        className={`px-6 py-2 rounded-xl flex items-center gap-2 transition
          ${activeTab === "aptitude"
            ? "bg-purple-600 text-white"
            : "text-gray-700"}`}
      >
        <Brain size={16} /> Aptitude
      </button>
    </div>
  );
}
