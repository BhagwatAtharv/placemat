import {
  Clock,
  FileText,
  Brain,
  Code2,
  Calendar,
  AlertCircle,
  Users,
} from "lucide-react";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const TestCard = ({ test, onNavigate }) => {
  const handleStartTest = () => {
    // TEMPORARY: replace later with router or backend call
    console.log("Starting test:", test.id);
    alert(`Starting Test: ${test.name}`);
    // onNavigate("test-instructions", test.id);
  };

  return (
    <Card className="p-6 rounded-2xl border border-gray-200 bg-white">

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold">{test.name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            <Users className="w-4 h-4" />
            {test.organizer} • {test.company}
          </div>
        </div>

        <Badge className="bg-green-100 text-green-700">
          ● Active
        </Badge>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4 text-sm">
        <Info icon={<Clock />} label="Duration" value={`${test.duration} mins`} />
        <Info icon={<FileText />} label="Questions" value={test.totalQuestions} />
        <Info label="Difficulty" value={
          <Badge className="bg-yellow-100 text-yellow-700">
            {test.difficulty}
          </Badge>
        }/>
        <Info
  label="Type"
  value={
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
      {test.type === "aptitude" ? (
        <Brain className="w-4 h-4 text-purple-600" />
      ) : (
        <Code2 className="w-4 h-4 text-blue-600" />
      )}
      {test.type === "aptitude" ? "Aptitude" : "Coding"}
    </span>
  }
/>

      </div>

      {/* Date + Negative Marking */}
      <div className="flex items-center gap-6 bg-gray-50 p-3 rounded-xl text-sm mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          {test.startTime}
        </div>

        {test.negativeMarking && (
          <div className="flex items-center gap-2 text-red-600">
            <AlertCircle className="w-4 h-4" />
            Negative Marking
          </div>
        )}
      </div>

      {/* Start Button */}
      <Button
  className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 text-sm"
  onClick={handleStartTest}
>
  Start Test
</Button>

    </Card>
  );
};

const Info = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    {icon && <div className="text-gray-500">{icon}</div>}
    <div>
      <div className="text-gray-500">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  </div>
);

export default TestCard;
