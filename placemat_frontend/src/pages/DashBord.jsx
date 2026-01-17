import {
  Code2,
  Brain,
  Trophy,
  User,
  Bell,
  Search,
  Menu,
  Award,
  TrendingUp,
  Target,
  FileText,
} from "lucide-react";

import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Input } from "../components/ui/input";
import { Avatar } from "../components/ui/avatar";


export default function Dashboard({ onNavigate }) {
  const userName = "Arjun Patel";

  const aptitudeProgress = [
    { topic: "Quantitative", progress: 65, total: 250, completed: 163 },
    { topic: "Logical Reasoning", progress: 42, total: 200, completed: 84 },
    { topic: "Verbal Ability", progress: 78, total: 180, completed: 140 },
    { topic: "Data Interpretation", progress: 55, total: 150, completed: 83 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Code2 className="text-white" />
            </div>
            <span className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PlaceMate
            </span>
          </div>

          <div className="hidden md:block w-96 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Search topics, problems..." className="pl-10 rounded-xl" />
          </div>

          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost">
              <Bell />
            </Button>
            <Avatar
              className="cursor-pointer bg-gradient-to-br from-blue-600 to-purple-600 text-white"
              onClick={() => onNavigate("profile")}
            >
              <User />
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 border-r bg-white/60 min-h-screen sticky top-[72px]">
          <nav className="p-4 space-y-2">
            {[
              ["dashboard", "Dashboard", Menu],
              ["test-portal", "Test Portal", FileText],
              ["aptitude", "Aptitude", Brain],
              ["coding", "Coding", Code2],
              ["leaderboard", "Leaderboard", Trophy],
              ["profile", "Profile", User],
            ].map(([key, label, Icon]) => (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${
                  key === "dashboard"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "hover:bg-purple-100 text-gray-700"
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 md:p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-semibold">
                Welcome back, {userName} 👋
              </h1>
              <p className="text-gray-600">
                Ready to continue your placement preparation?
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                ["Aptitude Solved", 163, Target, "from-blue-500 to-blue-600"],
                ["Coding Solved", 85, Code2, "from-purple-500 to-purple-600"],
                ["Day Streak", 12, TrendingUp, "from-green-500 to-green-600"],
                ["Badges", 8, Award, "from-orange-500 to-orange-600"],
              ].map(([label, value, Icon, gradient]) => (
                <Card
                  key={label}
                  className={`p-6 rounded-2xl text-white bg-gradient-to-br ${gradient}`}
                >
                  <div className="flex justify-between mb-4">
                    <Icon />
                    <span className="text-3xl font-bold">{value}</span>
                  </div>
                  <div>{label}</div>
                </Card>
              ))}
            </div>

            {/* Aptitude Progress */}
            <Card className="p-6 rounded-2xl">
              <h3 className="text-2xl mb-4">Aptitude Progress</h3>
              <div className="space-y-4">
                {aptitudeProgress.map((item) => (
                  <div key={item.topic}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.topic}</span>
                      <span>{item.completed}/{item.total}</span>
                    </div>
                    <Progress value={item.progress} />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
