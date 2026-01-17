/**
 * Button
 * Reusable button component
 */
export function Button({
  children,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      {...props}
      className={`px-4 py-2 rounded-xl font-medium transition
        hover:opacity-90 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
