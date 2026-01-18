import {
  Code2,
  Brain,
  Trophy,
  User,
  Search,
  Menu,
  Award,
  TrendingUp,
  Target,
  FileText,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Input } from "../components/ui/input";
import { Avatar } from "../components/ui/avatar";
import { QuickActions } from "../components/ui/quick-actions";
import { RecentActivity } from "../components/ui/recent-activity";

export default function DashBord() {
  const navigate = useNavigate();

  const userName = "Arjun Patel";

  const aptitudeProgress = [
    { topic: "Quantitative", progress: 65, total: 250, completed: 163 },
    { topic: "Logical Reasoning", progress: 42, total: 200, completed: 84 },
    { topic: "Verbal Ability", progress: 78, total: 180, completed: 140 },
    { topic: "Data Interpretation", progress: 55, total: 150, completed: 83 },
  ];

  const codingProgress = {
    easy: { solved: 45, total: 100 },
    medium: { solved: 28, total: 150 },
    hard: { solved: 12, total: 80 },
  };

  const recentActivities = [
    { type: "aptitude", title: "Quantitative", score: 85, time: "2 hours ago" },
    { type: "coding", title: "Two Sum Problem", difficulty: "Easy", time: "5 hours ago" },
    { type: "aptitude", title: "Logical Reasoning", score: 72, time: "1 day ago" },
    { type: "coding", title: "Binary Search Tree", difficulty: "Medium", time: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">

      {/* TOP BAR */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PlaceMate
            </span>
          </div>

          <div className="hidden md:block relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Search..." className="pl-10 rounded-xl" />
          </div>

          <Avatar
            className="cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <User />
          </Avatar>
        </div>
      </header>

      <div className="flex">

        {/* SIDEBAR */}
        <aside className="hidden lg:block w-64 bg-white/60 border-r min-h-screen">
          <nav className="p-4 space-y-2">

            <SidebarBtn icon={Menu} text="Dashboard" active onClick={() => navigate("/dashbord")} />
            <SidebarBtn icon={FileText} text="Test Portal" onClick={() => navigate("/testportal")} />
            <SidebarBtn icon={Brain} text="Aptitude" />
            <SidebarBtn icon={Code2} text="Coding" />

            {/* ✅ FIXED LEADERBOARD */}
            <SidebarBtn
              icon={Trophy}
              text="Leaderboard"
              onClick={() => navigate("/leaderboard")}
            />

            <SidebarBtn icon={User} text="Profile" onClick={() => navigate("/profile")} />

          </nav>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-6 space-y-8 max-w-7xl mx-auto">

          <div>
            <h1 className="text-4xl">Welcome back, {userName}! 👋</h1>
            <p className="text-gray-600 text-lg">
              Ready to continue your placement preparation?
            </p>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-6">
            <StatCard icon={Target} value="163" label="Aptitude Solved" sub="Total: 780" />
            <StatCard icon={Code2} value="85" label="Coding Solved" sub="Total: 330" />
            <StatCard icon={TrendingUp} value="12" label="Day Streak" sub="Keep it up!" />
            <StatCard icon={Award} value="8" label="Badges Earned" sub="5 more to go!" />
          </div>

          <QuickActions onNavigate={(page) => navigate(`/${page}`)} />
          <RecentActivity activities={recentActivities} />

          {/* PROGRESS */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-2xl mb-4">Aptitude Progress</h3>
              {aptitudeProgress.map((item, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{item.topic}</span>
                    <span>{item.completed}/{item.total}</span>
                  </div>
                  <Progress value={item.progress} />
                </div>
              ))}
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl mb-4">Coding Progress</h3>
              {Object.entries(codingProgress).map(([level, data]) => (
                <div key={level} className="mb-4">
                  <div className="flex justify-between mb-1 capitalize">
                    <span>{level}</span>
                    <span>{data.solved}/{data.total}</span>
                  </div>
                  <Progress value={(data.solved / data.total) * 100} />
                </div>
              ))}
            </Card>
          </div>

        </main>
      </div>
    </div>
  );
}

/* SMALL COMPONENTS */

function SidebarBtn({ icon: Icon, text, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl
        ${active
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
          : "hover:bg-purple-100 text-gray-700"}`}
    >
      <Icon className="w-5 h-5" />
      {text}
    </button>
  );
}

function StatCard({ icon: Icon, value, label, sub }) {
  return (
    <Card className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="flex justify-between mb-4">
        <Icon className="w-8 h-8" />
        <span className="text-3xl">{value}</span>
      </div>
      <div>{label}</div>
      <div className="text-sm opacity-90">{sub}</div>
    </Card>
  );
}
