/** Brand mark: stylised figure rising from leaves + wordmark. */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 80" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="tv-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6fcf7c" />
          <stop offset="1" stopColor="#0a7a3c" />
        </linearGradient>
      </defs>
      <path d="M4 14c14-2 24 4 28 18-14 2-24-4-28-18Z" fill="url(#tv-g)" />
      <path d="M60 14C46 12 36 18 32 32c14 2 24-4 28-18Z" fill="url(#tv-g)" />
      <circle cx="32" cy="16" r="3.2" fill="#6fcf7c" />
      <path
        d="M34 4c-10 2-14 12-8 22 5 8 12 12 10 22-2 10-10 18-20 24"
        stroke="url(#tv-g)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path d="M18 40c-6 8-4 20 6 26" stroke="url(#tv-g)" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M32 44c-3 6-1 12 4 16" stroke="url(#tv-g)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-10 w-8" />
      <span className="text-[1.65rem] font-medium leading-none tracking-tight text-ivory">TheraVita</span>
    </span>
  );
}
