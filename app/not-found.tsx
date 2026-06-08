import { LandingButton } from "@/components/landing/LandingButton";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingNavbar } from "@/components/landing/LandingNavbar";

export default function NotFound() {
  return (
    <>
      <LandingNavbar />
      <main className="flex min-h-screen items-center bg-[var(--tt-light)] pt-24">
        <section className="tt-container py-20 text-center">
          <p className="text-sm font-semibold text-[var(--tt-green)]">404</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em]">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[var(--tt-muted)]">
            The page you are looking for does not exist or may have moved.
          </p>
          <div className="mt-8">
            <LandingButton href="/">Back to home</LandingButton>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}

