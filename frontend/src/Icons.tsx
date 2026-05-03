export function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function GlitchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="3" width="6" height="4" opacity="0.7" />
      <rect x="10" y="3" width="12" height="4" />
      <rect x="4" y="9" width="16" height="4" opacity="0.85" />
      <rect x="2" y="15" width="10" height="4" />
      <rect x="14" y="15" width="8" height="4" opacity="0.7" />
    </svg>
  );
}

export function PigIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Face */}
      <ellipse cx="12" cy="13" rx="9" ry="8" opacity="0.9" />
      {/* Ears */}
      <ellipse cx="5" cy="6" rx="2.5" ry="3" />
      <ellipse cx="19" cy="6" rx="2.5" ry="3" />
      {/* Snout */}
      <ellipse cx="12" cy="15" rx="4" ry="2.5" fill="rgba(255,255,255,0.3)" />
      {/* Nostrils */}
      <circle cx="10" cy="15" r="1" fill="rgba(0,0,0,0.4)" />
      <circle cx="14" cy="15" r="1" fill="rgba(0,0,0,0.4)" />
      {/* Eyes */}
      <circle cx="8" cy="10" r="1.5" fill="rgba(0,0,0,0.6)" />
      <circle cx="16" cy="10" r="1.5" fill="rgba(0,0,0,0.6)" />
    </svg>
  );
}

export function FrogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Body */}
      <ellipse cx="12" cy="14" rx="10" ry="7" opacity="0.9" />
      {/* Left eye bump */}
      <circle cx="6" cy="7" r="4" />
      {/* Right eye bump */}
      <circle cx="18" cy="7" r="4" />
      {/* Left eyeball */}
      <circle cx="6" cy="7" r="2.5" fill="rgba(255,255,255,0.9)" />
      <circle cx="6.5" cy="7" r="1.2" fill="rgba(0,0,0,0.7)" />
      {/* Right eyeball */}
      <circle cx="18" cy="7" r="2.5" fill="rgba(255,255,255,0.9)" />
      <circle cx="18.5" cy="7" r="1.2" fill="rgba(0,0,0,0.7)" />
      {/* Mouth */}
      <path
        d="M 6 16 Q 12 20 18 16"
        fill="none"
        stroke="rgba(0,0,0,0.3)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Nostrils */}
      <circle cx="10" cy="12" r="0.8" fill="rgba(0,0,0,0.3)" />
      <circle cx="14" cy="12" r="0.8" fill="rgba(0,0,0,0.3)" />
    </svg>
  );
}
