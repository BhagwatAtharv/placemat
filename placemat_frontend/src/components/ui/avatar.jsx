/**
 * Avatar
 * Displays user icon or initials
 */
export function Avatar({ children, className = "", ...props }) {
  return (
    <div
      {...props}
      className={`w-10 h-10 rounded-full flex items-center justify-center
        bg-gradient-to-br from-blue-600 to-purple-600
        text-white cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}
