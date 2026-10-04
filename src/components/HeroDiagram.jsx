export default function HeroDiagram() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="w-full max-w-md text-cream"
      fill="none"
      aria-hidden="true"
    >
      {/* left terminal: the user's screen */}
      <rect x="24" y="70" width="140" height="100" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <rect x="24" y="70" width="140" height="14" fill="currentColor" opacity="0.15" />
      <circle cx="32" cy="77" r="2" fill="currentColor" opacity="0.6" />
      <line x1="40" y1="100" x2="130" y2="100" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="40" y1="114" x2="150" y2="114" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="40" y1="128" x2="110" y2="128" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <rect x="24" y="170" width="140" height="10" fill="currentColor" opacity="0.1" />

      {/* right terminal: the technician's desk */}
      <rect x="256" y="150" width="140" height="100" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="326" cy="200" r="26" stroke="var(--color-amber)" strokeWidth="1.5" />
      <path d="M326 188v24M314 200h24" stroke="var(--color-amber)" strokeWidth="1.5" />

      {/* trace connecting the two, with terminal nodes */}
      <circle cx="164" cy="120" r="4" stroke="var(--color-trace)" strokeWidth="1.5" fill="var(--color-ink)" />
      <circle cx="256" cy="200" r="4" fill="var(--color-trace)" />
      <path
        d="M164 120 C 210 120, 210 200, 256 200"
        stroke="var(--color-trace)"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
      <circle r="3.5" fill="var(--color-amber)">
        <animateMotion
          dur="3.2s"
          repeatCount="indefinite"
          path="M164 120 C 210 120, 210 200, 256 200"
        />
      </circle>
    </svg>
  )
}
