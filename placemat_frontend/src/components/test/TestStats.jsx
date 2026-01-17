import { Card } from "../ui/card";
import { Trophy, Calendar, CheckCircle2 } from "lucide-react";

const TestStats = ({ tests }) => {
  const count = (status) => tests.filter(t => t.status === status).length;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Stat title="Active" icon={<CheckCircle2 />} value={count("active")} />
      <Stat title="Upcoming" icon={<Calendar />} value={count("upcoming")} />
      <Stat title="Completed" icon={<Trophy />} value={count("completed")} />
    </div>
  );
};

const Stat = ({ title, icon, value }) => (
  <Card className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div className="flex justify-between mb-1">
      {title} {icon}
    </div>
    <div className="text-3xl">{value}</div>
  </Card>
);

export default TestStats;
