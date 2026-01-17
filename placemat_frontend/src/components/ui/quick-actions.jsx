import { FileText, Calendar } from "lucide-react";
import { Card } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";

/**
 * QuickActions UI
 * Shows Live Tests & Daily Challenge
 * Data can later come from backend via props
 */
export function QuickActions({ onNavigate }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      
      {/* Live Tests */}
      <Card className="p-6 border border-green-200 bg-green-50">
        <div className="flex items-center gap-2 text-green-600 mb-2">
          <FileText size={18} />
          <span>Live Tests</span>
        </div>

        <h3 className="text-2xl mb-2">3 Active Tests</h3>
        <p className="text-gray-600 text-sm mb-4">
          TCS, Infosys & Amazon tests available now
        </p>

        <Button
          onClick={() => onNavigate("test-portal")}
          className="w-full bg-green-600 text-white rounded-xl"
        >
          Go to Test Portal
        </Button>
      </Card>

      {/* Daily Challenge */}
      <Card className="p-6 border border-purple-200 bg-purple-50">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-purple-600">
            <Calendar size={18} />
            <span>Daily Challenge</span>
          </div>
          <span className="text-purple-600">18h 24m</span>
        </div>

        <h3 className="text-xl mb-2">
          Array Manipulation Challenge
        </h3>

        <div className="flex items-center gap-3 mb-4">
          <Badge className="bg-yellow-100 text-yellow-700">
            Medium
          </Badge>
          <span className="text-gray-600">+50 points</span>
        </div>

        <Button
          onClick={() => onNavigate("coding")}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl"
        >
          Start Challenge
        </Button>
      </Card>
    </div>
  );
}
