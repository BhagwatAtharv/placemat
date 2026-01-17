import { Brain, Code2 } from "lucide-react";
import { Card } from "./card";
import { Badge } from "./badge";

/**
 * RecentActivity UI
 * Displays recent aptitude & coding actions
 */
export function RecentActivity({ activities }) {
  return (
    <Card className="p-6">
      <h3 className="text-2xl mb-6">Recent Activity</h3>

      <div className="space-y-4">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
          >
            <div className="flex items-center gap-4">
              
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center
                  ${item.type === "aptitude"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-purple-100 text-purple-600"}`}
              >
                {item.type === "aptitude" ? <Brain /> : <Code2 />}
              </div>

              {/* Text */}
              <div>
                <div className="text-sm text-gray-500">
                  {item.type === "aptitude"
                    ? "Aptitude Test"
                    : "Coding Problem"}
                </div>
                <div>{item.title}</div>
              </div>
            </div>

            {/* Right Side */}
            <div className="text-right">
              {item.score && (
                <div className="text-green-600">
                  Score: {item.score}%
                </div>
              )}

              {item.difficulty && (
                <Badge
                  className={
                    item.difficulty === "Easy"
                      ? "text-green-600"
                      : item.difficulty === "Medium"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }
                >
                  {item.difficulty}
                </Badge>
              )}

              <div className="text-sm text-gray-500">
                {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
