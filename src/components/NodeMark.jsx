// A small schematic "node" mark: two terminals joined by a trace.
// Used as a recurring motif instead of a literal logo.
export default function NodeMark({ className = '', color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 64 16"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="4" cy="8" r="3.5" stroke={color} strokeWidth="1.5" />
      <line x1="7.5" y1="8" x2="56.5" y2="8" stroke={color} strokeWidth="1.5" />
      <circle cx="60" cy="8" r="3.5" fill={color} />
    </svg>
  )
}
