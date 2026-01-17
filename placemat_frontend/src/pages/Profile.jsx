import {
  Code2,
  User,
  ChevronLeft,
  Mail,
  Building,
  Calendar,
  TrendingUp,
  Award,
  Target,
  Sparkles,
  CheckCircle2,
  Trophy,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

// UI Components
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Alert, AlertDescription } from "../components/ui/alert";

export default function Profile() {
  const navigate = useNavigate();

  /* =========================
     TEMP USER DATA
     ========================= */
  const user = {
    name: "Arjun Patel",
    email: "arjun.patel@example.com",
    college: "IIT Delhi",
    branch: "Computer Science",
    graduationYear: "2025",
    streak: 12,
  };

  const stats = {
    rank: 15,
    avgScore: 76.8,
    completed: 25,
    total: 28,
    percentile: 94.5,
    solved: 185,
    timeSpent: "48h 32m",
    passRate: 80,
  };

  const tests = [
    {
      name: "TCS Aptitude Round 1",
      type: "Aptitude",
      score: 85.5,
      rank: "12/245",
      attempted: "38/40",
      time: "48:23",
      percentile: "95.1%",
      topics: [
        { name: "Quantitative", value: 90 },
        { name: "Logical", value: 85 },
        { name: "Verbal", value: 82 },
      ],
    },
    {
      name: "Amazon Coding Challenge",
      type: "Coding",
      score: 75,
      rank: "45/189",
      attempted: "3/3",
      time: "78:45",
      percentile: "76.2%",
      topics: [
        { name: "Arrays", value: 80 },
        { name: "Dynamic Programming", value: 65 },
        { name: "Trees", value: 80 },
      ],
    },
  ];

  const topicAnalysis = [
    { name: "Quantitative Aptitude", value: 82, tests: 12 },
    { name: "Logical Reasoning", value: 75, tests: 12 },
    { name: "Verbal Ability", value: 68, tests: 8 },
    { name: "Arrays", value: 78, tests: 10 },
    { name: "Dynamic Programming", value: 58, tests: 6 },
    { name: "Trees & Graphs", value: 72, tests: 9 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashbord")}>
            <ChevronLeft />
          </Button>
          <h1 className="text-2xl font-semibold">My Profile</h1>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto p-6 space-y-8">
        {/* PROFILE CARD */}
        <Card className="p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center">
                <User size={40} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{user.name}</h2>
                <div className="space-y-2 mt-3 text-sm">
                  <p className="flex items-center gap-2">
                    <Mail size={16} /> {user.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <Code2 size={16} /> {user.branch}
                  </p>
                  <p className="flex items-center gap-2">
                    <Building size={16} /> {user.college}
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar size={16} /> Batch of {user.graduationYear}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl">🔥</div>
              <div className="text-3xl font-bold">{user.streak}</div>
              <p className="text-sm">Day Streak</p>
            </div>
          </div>
        </Card>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat icon={<Trophy />} label="Global Rank" value={`#${stats.rank}`} />
          <Stat icon={<Target />} label="Avg Score" value={`${stats.avgScore}%`} />
          <Stat
            icon={<CheckCircle2 />}
            label="Tests Completed"
            value={`${stats.completed}/${stats.total}`}
          />
          <Stat icon={<Award />} label="Percentile" value={`${stats.percentile}%`} />
        </div>

        {/* AI PERFORMANCE */}
        <Card className="p-6 rounded-2xl border border-purple-200">
          <div className="flex gap-4 mb-4">
            <Sparkles className="text-purple-600" />
            <div>
              <h3 className="text-xl font-semibold">AI Performance Analysis</h3>
              <p className="text-gray-600">
                You're performing well overall with a {stats.avgScore}% average score.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <ProgressCard label="Pass Rate" value={stats.passRate} right={`${stats.passRate}%`} />
            <ProgressCard label="Problems Solved" value={75} right={stats.solved} />
            <ProgressCard label="Time Spent" value={60} right={stats.timeSpent} />
          </div>
        </Card>

        {/* TABS */}
        <Tabs defaultValue="tests">
          <TabsList className="rounded-xl">
            <TabsTrigger value="tests">Test Performance</TabsTrigger>
            <TabsTrigger value="topics">Topic Analysis</TabsTrigger>
            <TabsTrigger value="ai">AI Insights</TabsTrigger>
          </TabsList>

          {/* TEST PERFORMANCE */}
          <TabsContent value="tests" className="space-y-10">
            {tests.map((test, i) => (
              <Card key={i} className="p-6 rounded-2xl">
                <div className="flex justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">{test.name}</h4>
                    <Badge className="mt-1">{test.type}</Badge>
                  </div>
                  <div className="text-3xl font-bold text-purple-600">
                    {test.score}%
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 text-sm mb-6">
                  <Info label="Rank" value={test.rank} />
                  <Info label="Attempted" value={test.attempted} />
                  <Info label="Time Taken" value={test.time} />
                  <Info label="Percentile" value={test.percentile} />
                </div>

                <div className="space-y-3">
                  {test.topics.map((t, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm">
                        <span>{t.name}</span>
                        <span>{t.value}%</span>
                      </div>
                      <Progress value={t.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* TOPIC ANALYSIS */}
          <TabsContent value="topics" className="space-y-6">
            <Card className="p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">
                Topic-wise Performance
              </h3>

              <div className="space-y-6">
                {topicAnalysis.map((topic, i) => {
                  const status =
                    topic.value >= 80
                      ? "Strong"
                      : topic.value >= 70
                      ? "Good"
                      : "Average";

                  return (
                    <div key={i} className="p-6 bg-gray-50 rounded-xl">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="flex items-center gap-3">
                            <h4 className="text-lg font-semibold">{topic.name}</h4>
                            <Badge
                              className={
                                status === "Strong"
                                  ? "bg-green-100 text-green-700"
                                  : status === "Good"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }
                            >
                              {status}
                            </Badge>
                            <TrendingUp
                              size={16}
                              className={
                                topic.value >= 70
                                  ? "text-green-600"
                                  : "text-red-600 rotate-180"
                              }
                            />
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            {topic.tests} tests taken
                          </p>
                        </div>

                        <div className="text-right">
                          <div className="text-3xl font-bold text-purple-600">
                            {topic.value}%
                          </div>
                          <p className="text-sm text-gray-500">Average</p>
                        </div>
                      </div>

                      <Progress value={topic.value} className="h-3" />
                    </div>
                  );
                })}
              </div>
            </Card>
          </TabsContent>

          {/* AI TAB */}
          <TabsContent value="ai">
            <Alert>
              <AlertDescription>
                Backend AI insights will be connected here.
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

/* ===== SMALL COMPONENTS ===== */

function Stat({ icon, label, value }) {
  return (
    <Card className="p-5 text-center rounded-xl">
      <div className="flex justify-center mb-2 text-purple-600">{icon}</div>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-sm text-gray-600">{label}</p>
    </Card>
  );
}

function ProgressCard({ label, value, right }) {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span className="font-semibold">{right}</span>
      </div>
      <Progress value={value} className="h-2" />
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="bg-gray-50 p-3 rounded-lg">
      <p className="text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
