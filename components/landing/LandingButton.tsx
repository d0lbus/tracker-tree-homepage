import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LandingButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  children: ReactNode;
  variant?: "hero" | "primary" | "secondary" | "dark" | "light" | "text";
};

const variants = {
  hero:
    "bg-[var(--tt-green-soft)] text-[var(--tt-super-indigo)] hover:bg-white border border-transparent",
  primary:
    "bg-[var(--tt-green)] text-white hover:bg-[var(--tt-green-hover)] border border-transparent",
  secondary:
    "bg-white/5 text-white hover:bg-white/10 border border-white/15",
  dark:
    "bg-[var(--tt-super-indigo)] text-white hover:bg-[var(--tt-super-indigo-deep)] border border-transparent",
  light:
    "bg-white text-[var(--tt-super-teal)] hover:bg-white/90 border border-transparent",
  text:
    "bg-transparent text-white/75 hover:text-white border border-transparent px-0",
};

function isInternalLink(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

export function LandingButton({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: LandingButtonProps) {
  const buttonClassName = `inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold leading-none transition ${variants[variant]} ${className}`;

  if (isInternalLink(href)) {
    return (
      <Link href={href} className={buttonClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={buttonClassName} {...props}>
      {children}
    </a>
  );
}
