"use client";

import Link from "next/link";
import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { LandingButton } from "./LandingButton";

export function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#010102]/70 backdrop-blur-xl">
      <div className="tt-container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.04]">
            <Leaf className="h-4 w-4 text-[var(--tt-green-soft)]" />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            TrackerTree
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-white/55 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LandingButton href={siteConfig.appUrl} variant="hero">
            Open App
          </LandingButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#010102] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/75"
              >
                {link.label}
              </Link>
            ))}
            <a href={siteConfig.loginUrl} className="text-sm text-white/75">
              Sign in
            </a>
            <LandingButton href={siteConfig.appUrl} variant="hero" className="w-full">
              Open App
            </LandingButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
