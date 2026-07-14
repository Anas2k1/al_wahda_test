export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      aria-hidden
      className={`text-gold ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <line x1="0" y1="6" x2="48" y2="6" />
      <circle cx="54" cy="6" r="1.5" />
      <path d="M60 2 L64 6 L60 10 L56 6 Z" />
      <circle cx="66" cy="6" r="1.5" />
      <line x1="72" y1="6" x2="120" y2="6" />
    </svg>
  );
}
