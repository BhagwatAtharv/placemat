/**
 * Badge
 * Used for status labels (Active, Upcoming, Completed)
 */
export function Badge({ children, className = "" }) {
  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full
        bg-gray-100 text-gray-700 ${className}`}
    >
      {children}
    </span>
  );
}
