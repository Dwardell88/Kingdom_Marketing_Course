import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("text-gold", className)}
    >
      <circle cx="16" cy="16" r="15" className="fill-primary" />
      <path
        d="M16 7.5v17M11 12.5h10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M8.5 21.5c2.5-2 4.5-2 7.5 0 3-2 5-2 7.5 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}
