import type { AnchorHTMLAttributes, ReactNode } from "react";

type LandingButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "light";
};

const variants = {
  primary:
    "bg-[var(--tt-green)] text-white hover:bg-[var(--tt-green-hover)] border border-transparent",
  secondary:
    "bg-white/5 text-white hover:bg-white/10 border border-white/15",
  dark:
    "bg-[var(--tt-text)] text-white hover:bg-[#26352b] border border-transparent",
  light:
    "bg-white text-[var(--tt-final-green)] hover:bg-white/90 border border-transparent",
};

export function LandingButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: LandingButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
