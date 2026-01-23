export default function LeaderboardTabs({ activeTab, setActiveTab }) {
  return (
    <div className="inline-flex bg-gray-100 rounded-xl p-1 mb-8">
      <button
        onClick={() => setActiveTab("coding")}
        className={`px-6 py-2 rounded-lg ${
          activeTab === "coding" ? "bg-blue-600 text-white" : ""
        }`}
      >
        Coding
      </button>

      <button
        onClick={() => setActiveTab("aptitude")}
        className={`px-6 py-2 rounded-lg ${
          activeTab === "aptitude" ? "bg-purple-600 text-white" : ""
        }`}
      >
        Aptitude
      </button>
    </div>
  );
}
