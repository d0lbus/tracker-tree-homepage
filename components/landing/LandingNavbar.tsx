"use client";

import Link from "next/link";
import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { LandingButton } from "./LandingButton";

export function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06130e]/80 backdrop-blur-xl">
      <div className="tt-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
            <Leaf className="h-5 w-5 text-[#8be0a9]" />
          </span>
          <span className="text-base font-semibold tracking-tight">
            TrackerTree
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.loginUrl}
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            Sign in
          </a>
          <LandingButton href={siteConfig.appUrl}>Open App</LandingButton>
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
        <div className="border-t border-white/10 bg-[#06130e] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/80"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.loginUrl}
              className="text-sm font-medium text-white/80"
            >
              Sign in
            </a>
            <LandingButton href={siteConfig.appUrl} className="w-full">
              Open App
            </LandingButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}

