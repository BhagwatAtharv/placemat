import React from "react";
import { cn } from "../../lib/utils";

export function Alert({ className = "", children }) {
  return (
    <div
      className={cn(
        "relative w-full rounded-lg border border-gray-200 bg-white p-4 text-gray-900",
        className
      )}
    >
      {children}
    </div>
  );
}

export function AlertDescription({ className = "", children }) {
  return (
    <div className={cn("text-sm text-gray-700", className)}>
      {children}
    </div>
  );
}
