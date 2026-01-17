import * as React from "react";

export function Progress({ value = 0 }) {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
